<script lang="ts">
import { LogoSymbol } from '$lib'


</script>

<style lang="scss">
  :global([data-theme="light"] .wrap-all) { --a: .56; }
  :global([data-theme="dark"] .wrap-all) { --a: .08; }
  .wrap-all {
    --brd-clr: hsla( var(--hs-surface), var(--l-raw-025), 1 );

    background:     hsl( var(--hs-surface), var(--l-raw-025) );
    padding:        2px 9px 4px 6px;
    gap:            8px;
    width:          100%;
    max-width:      312px;
    position:       relative;
    border-inline:  solid 16px var(--brd-clr);
    border-block:   solid 1px var(--brd-clr);
    border-radius:  34px / 64px;
    box-shadow:
      0px 0px 16px 2px hsla( var(--hs-surface), var(--l-025), var(--a) ),
      inset 0 0 16px 4px hsla( var(--hs-surface), var(--l-raw-225), .48 )
    ;
  }
  .wrap-symbol { --size: 48px; max-width: var(--size); max-height: var(--size); }
  .wrap-all-text {
    width: 100%;
    gap: 2px;
  }
  .wrap-types { gap: 4px; }
  .m, .s, .desc { line-height: 1; }
  .m, .s {
    font-family:  var(--font-logo);
    font-weight:  900;
    font-size:    var(--fts-325);
  }
  .desc {
    font-size:    var(--fts-025);
    color:        hsl( var(--hs-detail), var(--l-raw-675) );
    font-weight:  300;
    text-shadow:  0px 0px 12px hsla( var(--hs-detail), var(--l-raw-700), 1 );
  }
  .m {
    color:        hsl( var(--hs-main), var(--l-500) );
    text-shadow:  0px 0px 12px hsla( var(--hs-main), var(--l-raw-700), .4 );
  }
  .s {
    color:        hsl( var(--hs-second), var(--l-500) );
    text-shadow:  0px 0px 12px hsla( var(--hs-second), var(--l-raw-700), .4 );
  }
</style>

<div class="wrap-all flx-row-nowrap">
  <div class="wrap-symbol"> <LogoSymbol /> </div>
  <div class="wrap-all-text flx-col-center">
    <div class="wrap-types flx-row-nowrap">
      <span class="m">Marcel</span> <span class="s">Sussai</span>
    </div>
    <span class="desc">desenvolvedor web full-stack</span>
  </div>
</div>