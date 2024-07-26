<script lang="ts">
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  h3 {
    padding: 8px 8px;
    font-size: var(--fts-325);
    // font-family: var(--font-mono);
    font-weight: 900;
    transform: translate3d(var(--show-trsl, 0), 0, 0);
    opacity: var(--show-opc, 0);
    text-wrap:    balance;
    // opacity: 0;
    @include drop-shadow-effect-mark-text($blur: 2px, $size: 1px, $alpha: .80);
    transition: all .6s var(--cubic-easeInOutSine);
    background: hsl( var(--hs-surface), var(--l-800) );
    width: calc(100% + var(--calc-w-no-pad, 32px));
    text-align: center;
    // &.visible {
    //   opacity: 1;
    //   transform: skew(0, -2deg);
    // }

    @media (min-width: $media-050) { font-size: var(--fts-300); }
    // @media (min-width: $media-150) { font-size: var(--fts-325); }
    // @media (min-width: $media-200) { font-size: var(--fts-400); }
    // @media (min-width: $media-250) { font-size: var(--fts-450); }
    // @media (min-width: $media-450) { font-size: var(--fts-500); }
    // @media (min-width: $media-675) { font-size: var(--fts-600); }
  }
</style>

<h3>
  <slot></slot>
</h3>