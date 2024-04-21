import type { Action } from 'svelte/action'

export interface Params_action {
  top:    number
  right:  number
  bottom: number
  left:   number
  steps:  number
}

export interface Observe_result {
  percent:            number
  root_bounds:        DOMRectReadOnly | null
  bounds:             DOMRectReadOnly
  is_intersecting:    boolean
  intersection_rect:  DOMRectReadOnly
  intersection_ratio: number
  time:               number
}

export let default_params_action: Params_action = {
  top: 0, right: 0, bottom: 0, left: 0, steps: 100
}

export const observe: Action<
  HTMLDivElement
  , Params_action
  , { 'on:emit': (e: CustomEvent) => void }
> = (node, param) => {

  let observer: IntersectionObserver
  let unobserve: () => void = () => {}

  let stepsToThreshold = (steps: number) => {
    return [...Array(steps).keys()].map(n => n / steps)
  }

  const fn_observer = (
    entries: IntersectionObserverEntry[], observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      let observe_result: Observe_result = {
        percent:              Math.round(Math.ceil(entry.intersectionRatio * 100)),
        root_bounds:          entry.rootBounds,
        bounds:               entry.boundingClientRect,
        intersection_ratio:   entry.intersectionRatio,
        is_intersecting:      entry.isIntersecting,
        intersection_rect:    entry.intersectionRect,
        time:                 entry.time
      }
      node.dispatchEvent( new CustomEvent( 'emit', { detail: observe_result } ) )
    })
  }

  let opt_observer = {
    rootMargin: `${param.top}px ${param.right}px ${param.bottom}px ${param.left}px`,
    threshold:  stepsToThreshold(param.steps),
  }

  observer = new IntersectionObserver(fn_observer, opt_observer)
  observer.observe(node)
  unobserve = () => observer.unobserve(node)

  return {
    update(param) {},
    destroy() { return unobserve },
  }
}