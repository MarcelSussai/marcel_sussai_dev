<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { config_theme } from '$lib/stores/theme'
	import { Header } from '$lib'
	import { is_active_link, hand_is_active_link } from '$lib/stores/nav_store.js';
	import { navigating } from '$app/stores'

  export let data


  $: if($navigating) is_active_link.set($navigating.to?.url.pathname || '')

  onMount(() => {
    config_theme()
    hand_is_active_link(data.url)
  })
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  main {
    padding:  88px 0px 6400px 0px;
    gap: 16px;
    @media (min-width: $md-menu) {
      padding:  96px 4px 6400px var(--w-md-menu);
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

