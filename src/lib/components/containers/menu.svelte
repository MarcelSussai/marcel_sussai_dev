<script lang="ts">
  import {
    BtnThemeMode, MenuAllLinks
  } from '$lib'


</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';

  .all-nav { /* styles */
    --brd-clr:  hsla( var(--hs-surface), var(--l-raw-050), 1 );

    height:                 100dvh;
    max-width:              fit-content;
    max-height:             calc(100dvh - 0px);
    position:               fixed;
    left:                   0;
    top:                    0;
    display:                grid;
    grid-template-columns:  repeat(1, 1fr);
    align-content:          flex-start;
    gap:                    24px;
    z-index:                99;
    padding:                12px 12px 64px 12px;
    overflow-y:             auto;
    background:             hsla( var(--hs-surface), var(--l-400), .16 );
    backdrop-filter:        blur(6px);
    border-right:           solid 1px   var(--brd-clr);
    border-top:             solid 80px  var(--brd-clr);
    border-bottom:          solid 8px   var(--brd-clr);
    transition:             all .3s var(--cubic-easeInOutSine);

    @media (min-width: $md-menu) {
      max-width: unset;
      max-height: unset;
    }
  }

</style>



<nav class="flx-col-center all-nav">
  <MenuAllLinks />
  <BtnThemeMode />
</nav>