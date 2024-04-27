<script lang="ts">

  let classs: string | undefined = undefined
  let style:  string | undefined = undefined

  export {
    classs as class, style,
  }
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  :root { --w-marquee: 100dvw; }
  @media (min-width: $md-menu) { :root { --w-marquee: calc(888px - var(--w-md-menu)); } }

  @keyframes marquee {
    0%    { transform: translate3d( var(--w-marquee), 0px, 0px ); }
    100%  { transform: translate3d( -100%, 0px, 0px ); }
  }

  .all {
    width:      calc(var(--w-marquee) - 20px );
    position:   absolute;
    background: hsla( var(--hs-surface), var(--l-975), .80 );
    backdrop-filter: blur(3px);

    border-top:     solid 1px   hsla(var(--hs-surface), var(--l-700), .24);
    border-bottom:  solid 1px   hsla(var(--hs-surface), var(--l-700), .24);
    border-left:    solid 16px  hsla(var(--hs-surface), var(--l-700), .24);
    border-right:   solid 16px  hsla(var(--hs-surface), var(--l-700), .24);
    border-radius: 16px / 32px;

    box-shadow:
      0px 0px 32px 0px hsla( var(--hs-surface), var(--l-500), .32 ),
      inset 0px 0px 24px 0px hsla( var(--hs-surface), var(--l-500), .88 )
    ;

    transform:  skew(0deg, -4deg);
    transition: all .3s var(--cubic-easeInOutSine);
  }
  .all-marquee {
    display:      flex;
    align-items:  center;
    overflow:     hidden;
    transition:   all .3s var(--cubic-easeInOutSine);
  }
  .marquee {
    @include drop-shadow-effect-mark($size: 2px, $blur: 0px, $clr-l: var(--l-975), $alpha: .48);
    @include drop-shadow-effect-light(
      $clr-hs-1: var(--hs-surface), $clr-hs-2: var(--hs-surface),
      $alpha-1: .48, $alpha-2: .48
    );
    filter: var(--sha-eff-mark) var(--sha-eff-light);

    --ani-time: 24s;

    width:        fit-content;
    display:      inline-block;
    padding:      12px 0px;

    font-size:    var(--fts-500);
    font-weight:  900;
    line-height:  1;
    white-space:  nowrap;

    animation:    marquee var(--ani-time) linear infinite;
    transition:   all .3s var(--cubic-easeInOutSine);

    .main {
      --clr-grd-1: hsla( var(--hs-main), var(--l-500), 1 );
      --clr-grd-2: hsla( var(--hs-main), var(--l-150), 1 );
      --deg-grd:   0deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-surface), $clr-hs-2: var(--hs-surface),
        $alpha-1: .48, $alpha-2: .48
      );
    }
    .second {
      --clr-grd-1: hsla( var(--hs-second), var(--l-500), 1 );
      --clr-grd-2: hsla( var(--hs-second), var(--l-150), 1 );
      --deg-grd:   0deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-surface), $clr-hs-2: var(--hs-surface),
        $alpha-1: .48, $alpha-2: .48
      );
    }
    .detail {
      --clr-grd-1: hsla( var(--hs-detail), var(--l-500), 1 );
      --clr-grd-2: hsla( var(--hs-detail), var(--l-150), 1 );
      --deg-grd:   0deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-surface), $clr-hs-2: var(--hs-surface),
        $alpha-1: .48, $alpha-2: .48
      );
    }

    @media (min-width: $media-025) { font-size: var(--fts-650); }
    @media (min-width: $media-050) { font-size: var(--fts-725); }
    @media (min-width: $media-100) { font-size: var(--fts-775); }
    @media (min-width: $media-175) { font-size: var(--fts-825); padding: 16px 0px;}
    @media (min-width: $media-250) { font-size: var(--fts-875); --ani-time: 28s;}
    @media (min-width: $media-300) { font-size: var(--fts-900); padding: 24px 0px;}
  }
</style>


<div {style} class="{classs ? classs + ' ' : ''}all" >
  <div class="all-marquee">
    <p class="marquee">
      <span class="gradient-text main">Explore</span> as possibilidades
      <span class="gradient-text second">além dos limites!</span>
      Esteja <span class="gradient-text main">conectado</span> com o
      <span class="gradient-text second">mundo todo</span> e
      <span class="gradient-text detail">gere valor</span> da
      <span class="gradient-text main">tecnologia!</span>
    </p>
  </div>
</div>