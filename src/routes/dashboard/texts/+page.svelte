<script lang="ts">

  const ABC = 'A Á B C Ç D E É F G H I Í J K L M N O Ó P Q R S T U Ú V X W Y Z PALAVRA'
  const num = '1 2 3 4 5 6 7 8 9'
  const sym = '! @ # $ % ¨ & * ( ) _ = + `"'

</script>

<style lang="scss">
  @import '$lib/styles/mixins.scss';
  section {
    gap: 40px;
  }
  :global([data-theme="light"] .title-1)  { --l-bg: var(--l-850); }
  :global([data-theme="dark"] .title-1)   { --l-bg: var(--l-875); }
  .title-1 {
    padding:      16px;
    color:        hsl( var(--hs-surface), var(--l-200) );
    background:   hsla( var(--hs-surface), var(--l-bg, var(--l-850)), .8 );
    font-size:    var(--fts-400);
    font-weight:  900;
    line-height:  1.24;
    font-family:  var(--font-logo);
    width:        100%;
    text-wrap:    balance;
    transform: skewY(-1.6deg);
    // word-spacing: 0.01ch;

    .grd-config-1 {
      --clr-grd-1: hsla( var(--hs-main), var(--l-350), 1 );
      --clr-grd-2: hsla( var(--hs-main), var(--l-125), 1 );
      --deg-grd: 0deg;
      // @include drop-shadow-effect-light(
      //   $clr-hs-1: var(--hs-main),
      //   $clr-hs-2: var(--hs-main),
      //   $alpha-1: .24,
      //   $alpha-2: .24
      // );
    }
    .grd-config-2 {
      --clr-grd-1: hsla( var(--hs-second), var(--l-350), 1 );
      --clr-grd-2: hsla( var(--hs-second), var(--l-125), 1 );
      --deg-grd:   8deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-second),
        $clr-hs-2: var(--hs-second),
        $alpha-1: .24,
        $alpha-2: .24
      );
      // --clr-sha-1: hsla( var(--hs-second),   var(--l-350), .24 );
      // --clr-sha-2: hsla( var(--hs-second),   var(--l-350), .24 );
    }
    .gradient-text {
      @include drop-shadow-effect-mark();
      filter: var(--sha-eff-mark) var(--sha-eff-light);
      font-weight: 900;
    }
    // .pronome {
    //   font-size: var(--fts-150);
    //   // font-family: var(--font-main);
    //   // font-variant: small-caps;
    //   line-height: .88;
    //   font-weight: 900;
    //   width: fit-content;
    //   display: inline-block;
    //   text-align: center;
    //   // padding: 0 2px;
    //   // transform: translate3d(2px, 0px, 0);
    // }
  }
  h6 {
    align-self: flex-start;
  }
</style>



<svelte:head> <title> Texts </title> </svelte:head>

<section class="flx-col-center">
  <h1 class="title-1">[h1] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h1>
  <h1 class="title-1">
    <!-- olá, seja bem vind<span class="pronome flx-col-center"><div>o/a</div><div>es</div></span>! <br> -->
    Como desenvolvedor fullstack,
    <span class="gradient-text grd-config-1">posso fazer o projeto todo</span>,
    mas sou <span class="gradient-text grd-config-2">especialista front-end.</span>
  </h1>
  <h2>[h2] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h2>
  <h3>[h3] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h3>
  <h4>[h4] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h4>
  <h5>[h5] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h5>
  <h6>[h6] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h6>
  <p>[p] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</p>
</section>
