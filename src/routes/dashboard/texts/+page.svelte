<script lang="ts">
	import { onMount } from 'svelte'


  const ABC = 'A Á B C Ç D E É F G H I Í J K L M N O Ó P Q R S T U Ú V X W Y Z PALAVRA'
  const num = '1 2 3 4 5 6 7 8 9'
  const sym = '! @ # $ % ¨ & * ( ) _ = + `´"'
  
  let e_scroll_test: HTMLDivElement
  let observer: IntersectionObserver
  let unobserve: () => void = () => {}
  let percent: number
  let top    = 0
  let bottom = 0
  let left   = 0
  let right  = 0
  let steps  = 100

  function stepsToThreshold(steps: number) { return [...Array(steps).keys()].map(n => n / steps) }
  
  onMount(() => {
    let opt_observer = {
      rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
      threshold: stepsToThreshold(steps),
    }
    observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        percent = Math.round(Math.ceil(entry.intersectionRatio * 100))

        console.group()
        console.log('percent', percent);
        
        // console.log('boundingClientRect', entry.boundingClientRect)
        // console.log('intersectionRatio', entry.intersectionRatio)
        // console.log('intersectionRect', entry.intersectionRect)
        // console.log('isIntersecting', entry.isIntersecting)
        // console.log('rootBounds', entry.rootBounds)
        // console.log('time', entry.rootBounds)
        console.groupEnd()
      })
    }, opt_observer)

    observer.observe(e_scroll_test)
    unobserve = () => observer.unobserve(e_scroll_test)
    return unobserve
  })
</script>

<style lang="scss">
  section {
    gap: 40px;
    padding: 16px;
  }
  .test-scroll {
    width: 40px;
    height: 40px;
    background: red;
  }
</style>



<svelte:head> <title> Texts </title> </svelte:head>

<section class="flx-col-center">
  <h1>[h1] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </h1>
  <h2>[h2] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </h2>
  <h3>[h3] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </h3>
  <h4>[h4] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </h4>
  <h5>[h5] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </h5>
  <h6>[h6] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </h6>
  <p>[p] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}  </p>
</section>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div bind:this={e_scroll_test} class="test-scroll"> </div>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div class="test-scroll"> </div>