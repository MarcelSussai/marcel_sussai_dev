<script lang='ts'>
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'
  import createGlobe from 'cobe'

/*
  baseColor:        [0.235294, 0.564706, 0.898039],
  glowColor:        [0.235294, 0.898039, 0.47451],
  baseColor:        [0.0823529411764706, 0.4549019607843137, 0.7803921568627451],
*/

  const size_spring_x = spring(100, {
    stiffness: 0.3, damping: 0.4, precision: 0.005,
  })
  const size_spring_y = spring(100, {
    stiffness: 0.3, damping: 0.4, precision: 0.005,
  })

  let cv:             HTMLCanvasElement
  let pointer_x:      number | null       = null
  let pointer_y:      number | null       = null
  let pointer_move_x: number              = 0
  let pointer_move_y: number              = 0

  const adjust_pointers = (cx: number, cy: number) => {
    pointer_x = cx - pointer_move_x
    pointer_y = cy - pointer_move_y
  }
  const move_pointers = (cx: number, cy: number) => {
    if (pointer_x && pointer_y) {
      const delta_x           = cx - pointer_x
      const delta_y           = cy - pointer_y
      pointer_move_x          = delta_x
      pointer_move_y          = delta_y
      size_spring_x.stiffness = delta_x / 100
      size_spring_y.stiffness = delta_y / 100
    }
  }
  const cancel_pointers = () => {
    pointer_x       = null
    pointer_y       = null
    cv.style.cursor = 'grab'
  }
  const handle_pointerDown = (e: PointerEvent) => {
    adjust_pointers(e.clientX, e.clientY)
    cv.style.cursor = 'grabbing'
  }
  const handle_pointerUp  = (e: PointerEvent) => { cancel_pointers() }
  const handle_pointerOut = (e: PointerEvent) => { cancel_pointers() }
  const handle_mouseMove  = (e: MouseEvent) => {
    move_pointers(e.clientX, e.clientY)
  }
  const handle_touchMove  = (e: TouchEvent) => {
    // console.log(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    move_pointers(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
  }

  onMount(() => {
    let phi    = 0
    let theta  = 0
    let width  = 0
    let height = 0
    const on_resize = () => cv &&
      (width = cv.offsetWidth) &&
      (height = cv.offsetHeight)
    window.addEventListener('resize', on_resize)
    on_resize()
    createGlobe(cv, {
      phi:              0,
      theta:            0,
      mapSamples:       4848,
      mapBrightness:    40.0,
      mapBaseBrightness: 0.00,
      diffuse:          2.00,
      dark:             0.80,
      baseColor:        [0.0823529411764706, 0.4549019607843137, 0.7803921568627451],
      glowColor:        [0.0823529411764706, 0.7803921568627451, 0.3607843137254902],
      scale:            1,
      offset:           [0, 0],
      opacity:          0.92,
      width:            width   * 2,
      height:           height  * 2,
      devicePixelRatio: 2,
      markers:          [],
      markerColor:      [0, 0, 0],
      onRender: (state) => {
        if(!pointer_x && !pointer_y) { phi += 0.006 }
        state.phi    = phi + size_spring_x.stiffness
        state.theta  = theta + size_spring_y.stiffness
        state.width  = width * 2
        state.height = height * 2
      },
    })
  })

  let classs: string | undefined = undefined
  let style: string | undefined = undefined
  export { classs as class, style }
</script>

<style lang="scss">
  @import '$lib/styles/mixins.scss';
  @import '$lib/styles/vars.scss';

  @keyframes rotating {
    0% { transform: rotate(-360deg); } 100% { transform: rotate(360deg); }
  }
  @keyframes ani-cont-globe {
    0% { opacity: 0; transform: scale3d(0, 0, 0); } 100% { opacity: 1; transform: scale3d(1, 1, 1); }
  }
  .cont-globe {
    --max-wh:       576px;
    --pos-all-bef:  12px;
    --brd-w-bef:    12px;
    --pos-all-bef:  12px;

    // width:          fit-content;
    // height:         fit-content;
    max-width:      var(--max-wh);
    max-height:     var(--max-wh);
    aspect-ratio:   1;
    position:       relative;
    overflow:       clip;
    transition:     all .3s var(--cubic-easeInOutSine);
    opacity: 0; transform: scale(0);
    animation: ani-cont-globe .6s .2s var(--cubic-easeInOutSine) forwards;

  }
  @media screen {
    @media (min-width: $media-025) {.cont-globe { --pos-all-bef: 16px; --brd-w-bef: 16px; }}
    @media (min-width: $media-125) {.cont-globe { --pos-all-bef: 18px; --brd-w-bef: 24px; }}
    @media (min-width: $media-175) {.cont-globe { --pos-all-bef: 20px; }}
    @media (min-width: $media-200) {.cont-globe { --pos-all-bef: 24px; }}
    @media (min-width: $media-250) {.cont-globe { --pos-all-bef: 22px; --brd-w-bef: 32px; }}
    @media (min-width: $media-275) {.cont-globe { --pos-all-bef: 20px; --brd-w-bef: 40px; }}
  }
  :global([data-theme="light"] .cont-globe::before) { --a-brd: .08; --l-bef: var(--l-500); }
  :global([data-theme="dark"] .cont-globe::before)  { --a-brd: .04; --l-bef: var(--l-300); }
  .cont-globe::before {
    content:        '';
    position:       absolute;
    top:            var(--pos-all-bef);
    right:          var(--pos-all-bef);
    bottom:         var(--pos-all-bef);
    left:           var(--pos-all-bef);
    border:         dashed var(--brd-w-bef) hsla(var(--hs-surface), var(--l-bef), var(--a-brd));
    border-radius:  3000px;
    animation:      rotating 48s linear infinite;
  }
  canvas {
    --sz: 88dvw;

    width:        var(--sz);
    height:       var(--sz);
    max-width:    var(--max-wh);
    max-height:   var(--max-wh);
    z-index:      4;
    aspect-ratio: 1;
  }

</style>


<div class="cont-globe flx-center {classs}" {style}>
  <canvas
    bind:this={cv}
    on:pointerdown={handle_pointerDown}
    on:mousemove={handle_mouseMove}
    on:pointerup={handle_pointerUp}
    on:pointerout={handle_pointerOut}
    on:touchmove={handle_touchMove}
  ></canvas>
</div>