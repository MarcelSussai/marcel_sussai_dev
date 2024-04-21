<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { config_theme } from '$lib/stores/theme'
	import { Header } from '$lib'

  onMount(() => {
    config_theme()
    addEventListener('scroll', (e) => {
      // console.log(window.scrollY)
    })
  })
  export let data
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  main {
    padding:  76px 4px 6400px 4px;
    gap: 32px;
    @media (min-width: $md-menu) {
      padding:  76px 4px 6400px var(--w-md-menu);
    }
  }
</style>


<Header />
{#key data.url}
  <main class="flx-col-center"
    in:fade={{ duration: 200, delay: 200 }}
    out:fade={{ duration: 200 }}
  >
    <slot></slot>
  </main>
{/key}

