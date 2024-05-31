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
  @media (min-width: $md-menu) { :root { --w-marquee: calc(896px - var(--w-md-menu)); } }

  @keyframes marquee {
    0%    { transform: translate3d( var(--w-marquee), 0px, 0px ); }
    100%  { transform: translate3d( -100%, 0px, 0px ); }
  }

  @keyframes intro-marquee {
    0%    {
      transform:  skew(0deg, -8deg) translate3d(-50%, -50%, 0);
      width:      0px;
      opacity:    0;
    }
    32%   {
      transform:  skew(0deg, -8deg) translate3d(0, -50%, 0);
      width:      0px;
      opacity:    .06;
    }
    100%  {
      transform:  skew(0deg, -8deg) translate3d(0, 0, 0);
      width:      calc(var(--w-marquee) - 20px );
      opacity:    1;
    }
  }

  .all {
    width:      calc(var(--w-marquee) - 20px );
    position:   absolute;
    background: hsla( var(--hs-surface), var(--l-975), .8 );
    backdrop-filter: blur(2px);
    overflow: hidden;
    
    border-top:     solid 1px   hsla(var(--hs-surface), var(--l-700), .24);
    border-bottom:  solid 1px   hsla(var(--hs-surface), var(--l-700), .24);
    border-left:    solid 16px  hsla(var(--hs-surface), var(--l-700), .24);
    border-right:   solid 16px  hsla(var(--hs-surface), var(--l-700), .24);
    // border-radius: 16px / 32px;
    
    box-shadow:
      0px 0px 32px 0px hsla( var(--hs-surface), var(--l-500), .32 ),
      inset 0px 0px 24px 0px hsla( var(--hs-surface), var(--l-500), .64 )
    ;
    
    width: 0px; opacity: 0;
    transform:  skew(0deg, 0deg);
    transition: all .3s var(--cubic-easeInOutSine);
    animation: intro-marquee .8s .4s var(--cubic-easeInOutSine) forwards;
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
    padding:      8px 0px;

    font-size:    var(--fts-500);
    font-weight:  900;
    line-height:  1.12;
    white-space:  nowrap;

    animation:    marquee var(--ani-time) linear infinite;
    transition:   all .3s var(--cubic-easeInOutSine);

    .main {
      --clr-grd-1: hsla( var(--hs-main), var(--l-500), 1 );
      --clr-grd-2: hsla( var(--hs-main), var(--l-150), 1 );
      --deg-grd:   0deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-main), $clr-hs-2: var(--hs-main),
        $alpha-1: .64, $alpha-2: .64, $size: 2px
      );
    }
    .second {
      --clr-grd-1: hsla( var(--hs-second), var(--l-500), 1 );
      --clr-grd-2: hsla( var(--hs-second), var(--l-150), 1 );
      --deg-grd:   0deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-second), $clr-hs-2: var(--hs-second),
        $alpha-1: .64, $alpha-2: .64, $size: 2px
      );
    }
    .detail {
      --clr-grd-1: hsla( var(--hs-detail), var(--l-500), 1 );
      --clr-grd-2: hsla( var(--hs-detail), var(--l-150), 1 );
      --deg-grd:   0deg;
      @include drop-shadow-effect-light(
        $clr-hs-1: var(--hs-detail), $clr-hs-2: var(--hs-detail),
        $alpha-1: .64, $alpha-2: .64, $size: 2px
      );
    }

    @media (min-width: $media-025) { font-size: var(--fts-650); }
    @media (min-width: $media-050) { font-size: var(--fts-725); }
    @media (min-width: $media-100) { font-size: var(--fts-775); }
    @media (min-width: $media-175) { font-size: var(--fts-825); padding: 12px 0px;}
    @media (min-width: $media-250) { font-size: var(--fts-875); --ani-time: 28s;}
    // @media (min-width: $media-300) { font-size: var(--fts-875); padding: 12px 0px;}
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