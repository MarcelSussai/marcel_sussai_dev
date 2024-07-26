<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { config_theme } from '$lib/stores/theme'
	import { Header, Footer } from '$lib'
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
  @import '$lib/styles/mixins.scss';

  main {
    padding:  88px 0px 32px 0px;
    gap: 40px;
    @media (min-width: $md-menu) {
      padding:  96px 20px 32px var(--w-md-menu-with-pad);
    }
  }

  :global(.all-intro ) { width: 100%; }

  :global(.grd-config-1) {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-main),
      $clr-hs-2: var(--hs-main),
    );
  }
  :global(.grd-config-2) {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-second),
      $clr-hs-2: var(--hs-second),
    );
  }
  :global(.grd-config-3) {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-detail),
      $clr-hs-2: var(--hs-detail),
      $alpha-1:   .16,
      $alpha-2:   .16
    );
  }
  :global(.grd-config-4) {
    @include sha-grd-config-1(
      $clr-hs-1:  var(--hs-second),
      $clr-hs-2:  var(--hs-main),
      $clr-l-1:   var(--l-250),
      $clr-l-2:   var(--l-250),
      $deg-grd:   45deg,
      $alpha-1:   .16,
      $alpha-2:   .16
    );
  }
  :global(.grd-config-5) {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-mark),
      $clr-hs-2: var(--hs-mark),
      $clr-l-1:   var(--l-400),
      $alpha-1:   .16,
      $alpha-2:   .16
    );
    font-weight: 500;
  }
  :global(.grd-config-weight-1) { font-weight: 800; }
  :global(.grd-config-weight-2) { font-weight: 400; }
  :global(.detail-mark) {
    color: hsl( var(--hs-mark), var(--l-300) );
    font-weight: 300;
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
<Footer />