<script lang="ts">
	import { observe, type Observe_result } from '$lib/actions/observe'

  let is_visible: boolean | undefined = false
  const fn_visible = ({ detail }: CustomEventInit<Observe_result>) => {
    is_visible = detail?.is_only_by_bottom
  }

  let classs: string = ''
  let style:  string = ''
  export { classs as class, style }
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  h1 {
    padding: 12px 8px;
    font-size: var(--fts-325);
    font-family: var(--font-logo);
    font-weight: 900;
    transform: translate3d(var(--show-trsl), 0, 0);
    text-wrap:    balance;
    // opacity: 0;
    opacity: var(--show-opc, 0);
    text-shadow:
      1px    1px  1px hsla( var(--hs-surface), var(--l-975), 1 ),
      -1px  -1px  1px hsla( var(--hs-surface), var(--l-975), 1 ),
      -1px   1px  1px hsla( var(--hs-surface), var(--l-975), 1 ),
      1px   -1px  1px hsla( var(--hs-surface), var(--l-975), 1 )
    ;
    transition: all .6s var(--cubic-easeInOutSine);

    // &.visible {
    //   opacity: 1;
    //   transform: skew(0, -2deg);
    // }

    @media (min-width: $media-050) { font-size: var(--fts-450); }
    @media (min-width: $media-150) { font-size: var(--fts-550); }
    @media (min-width: $media-200) {
      text-shadow:
        2px    2px  1px hsla( var(--hs-surface), var(--l-975), 1 ),
        -2px  -2px  1px hsla( var(--hs-surface), var(--l-975), 1 ),
        -2px   2px  1px hsla( var(--hs-surface), var(--l-975), 1 ),
        2px   -2px  1px hsla( var(--hs-surface), var(--l-975), 1 )
      ;
      font-size: var(--fts-650);
    }
    @media (min-width: $media-250) { font-size: var(--fts-725); }
    @media (min-width: $media-450) { font-size: var(--fts-775); }
    @media (min-width: $media-675) { font-size: var(--fts-850); }
  }
</style>

<h1
  style={
    style +
    `--show-opc:${is_visible ? '1' : '0'};` +
    `--show-trsl:${is_visible ? '0' : '-16%'};`
  }
  class="{classs} default-text {is_visible ? 'visible' : ''}"
  use:observe={ { percent_by: 40 } }
  on:intersect={fn_visible}
> <slot></slot> </h1>