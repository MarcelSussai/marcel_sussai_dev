<script lang="ts">
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { config_theme } from '$lib/stores/theme'
	import { Header } from '$lib'

  onMount(() => { config_theme() })
  export let data
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  main {
    padding:  76px 4px 6400px 4px;
    gap: 32px;
    @media (min-width: $md-menu) {
      padding:  76px 4px 6400px 128px;
    }
  }
</style>


<Header />
{#key data.url}
  <main class="flx-col-center"
    in:fly={{ x: -32, duration: 300, delay: 300 }}
    out:fly={{ x: 32, duration: 300 }}
  >
    <slot />
  </main>
{/key}

