<script lang="ts">
  import {
    BtnThemeMode, MenuAllLinks
  } from '$lib'
  import { is_open } from '$lib/stores/nav_store'

  $: open_tog_class = $is_open ? 'open' : ''

</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';

  .all-nav { /* styles */
    --brd-clr:  hsla( var(--hs-surface), var(--l-raw-125), 1 );
    --brd-top-sz: 80px;

    height:          100dvh;
    max-width:       fit-content;
    min-width:       248px;
    max-height:      calc(100dvh - 0px);
    // display:      none;
    gap:             24px;
    position:        fixed;
    left:            0;
    top:             0;
    padding:         12px 12px 64px 12px;
    z-index:         99;
    overflow-y:      auto;
    border-right:    solid 1px   var(--brd-clr);
    border-top:      solid var(--brd-top-sz) var(--brd-clr);
    border-bottom:   solid 8px   var(--brd-clr);
    background:      hsla( var(--hs-surface), var(--l-400), .20 );
    backdrop-filter: blur(5px);
    transform:       translate3d(-100%, 0, 0);
    transition:
      all       .3s var(--cubic-easeInOutSine),
      transform .8s var(--cubic-easeInOutSine)
    ;

    &.open { transform: translate3d(0, 0, 0); }

    @media (min-width: $media-050) { --brd-top-sz: 84px; }
    @media (min-width: $media-100) { min-width: 264px; --brd-top-sz: 86px; }
    @media (min-width: $media-150) { --brd-top-sz: 88px; }
    @media (min-width: $md-menu) {
      --brd-top-sz: 40px;
      max-width:  unset;
      max-height: unset;
      min-width:  calc( var(--w-md-menu) - 4px);
      transform:  translate3d(0, 0, 0);
      &.open { transform: translate3d(0, 0, 0); }
    }
  }

</style>



<nav class="flx-col-center all-nav {open_tog_class}">
  <MenuAllLinks />
  <BtnThemeMode />
</nav>