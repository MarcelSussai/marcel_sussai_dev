<script lang="ts">
  import { LogoSymbol } from '$lib'
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';

  @keyframes ani-logotype {
    0% {
      --opc-both: 0;
      width: 0px;
      gap: 0px;
      padding: 0px;
      transform: translate3d(0, -120%, 0);
    }
    64% {
      --opc-both: 0;
      width: 0px;
      gap: 0px;
      padding: 0px;
      transform: translate3d(0, 0, 0);
    }
    96% {
      --opc-both: 0;
    }
    100% {
      --opc-both: 1;
      width:   100%;
      gap:     8px;
      padding: 2px 8px 2px 6px;
      transform: translate3d(0, 0, 0);
    }
  }

  :global([data-theme="light"] .wrap-all) { --a: .56; }
  :global([data-theme="dark"] .wrap-all) { --a: .08; }
  .wrap-all {
    --hs-of-this: var(--hs-surface);
    --brd-clr-1:  hsla( var(--hs-of-this), var(--l-raw-050), 1 );
    --brd-clr-2:  hsla( var(--hs-of-this), var(--l-raw-300), 1 );
    --f-sz-names: var(--fts-325);
    --f-sz-desc:  var(--fts-025);
    --sz-symbol:  48px;
    --bg-clr:     hsla( var(--hs-of-this), var(--l-raw-075), 1 );
    --opc-both:   0;

    background:
      linear-gradient(var(--bg-clr), var(--bg-clr)) padding-box,
      linear-gradient(0deg, var(--brd-clr-1) 56%, var(--brd-clr-2)) border-box
    ;
    border-left:    solid 16px  transparent;
    border-right:   solid 16px  transparent;
    border-top:     solid 1px   transparent;
    border-bottom:  solid 2px   transparent;
    border-radius:  34px / 64px;

    width:      0;
    gap:        0;
    padding:    0;
    transform:  translate3d(0, -120%, 0);

    height: fit-content;
    max-width:      100%;
    position:       relative;
    overflow:       hidden;

    box-shadow:
      0px 0px 16px 2px hsla( var(--hs-of-this), var(--l-025), var(--a) ),
      inset 0 0 16px 4px hsla( var(--hs-of-this), var(--l-raw-225), .48 )
    ;
    transition: all .3s var(--cubic-easeInOutSine);
    animation: ani-logotype 1s var(--cubic-easeInOutSine) forwards ;

    @media (min-width: $media-050) {
      --f-sz-names: var(--fts-350);
      --f-sz-desc:  var(--fts-050);
      --sz-symbol:  50px;
    }
    @media (min-width: $media-100) {
      --f-sz-names: var(--fts-400);
      --f-sz-desc:  var(--fts-075);
      --sz-symbol:  52px;
    }
    @media (min-width: $media-150) {
      --f-sz-names: var(--fts-450);
      --f-sz-desc:  var(--fts-100);
      --sz-symbol:  56px;
    }
  }
  .wrap-symbol {
    max-width: var(--sz-symbol); max-height: var(--sz-symbol);
    min-width: var(--sz-symbol); min-height: var(--sz-symbol);
    opacity: var(--opc-both);
    transition: all .2s var(--cubic-easeInOutSine);
  }
  .wrap-all-text {
    opacity: var(--opc-both);
    width: 100%;
    gap: 2px;
    transition: all .6s var(--cubic-easeInOutSine);
    text-wrap: nowrap;
  }
  .wrap-types { gap: 4px; }
  .m, .s, .desc { line-height: 1; transition: all .3s var(--cubic-easeInOutSine); }
  .m, .s {
    font-family:  var(--font-logo);
    font-weight:  900;
    font-size:    var(--f-sz-names);
  }
  .desc {
    font-size:    var(--f-sz-desc);
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