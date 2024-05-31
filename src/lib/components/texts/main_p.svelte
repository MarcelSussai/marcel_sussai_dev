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

  p {
    padding:      0px 8px;
    line-height:  1.72;
    font-size:    var(--fts-150);
    text-wrap:    balance;
    transform:    translate3d(var(--show-trsl, 0), 0, 0);
    opacity:      var(--show-opc, 0);
    transition:   all .6s var(--cubic-easeInOutSine);
    
    @media (min-width: $media-050) { font-size: var(--fts-175); }
    @media (min-width: $media-150) { font-size: var(--fts-225); }
    @media (min-width: $media-250) { font-size: var(--fts-275); }
    @media (min-width: $media-675) { font-size: var(--fts-325); }
  }
</style>

<p
  style={
    style +
    `--show-opc:${is_visible ? '1' : '0'};` +
    `--show-trsl:${is_visible ? '0' : '-16%'};`
  }
  class="{classs} default-text"
  use:observe={ { percent_by: 8 } }
  on:intersect={fn_visible}
> <slot></slot> </p>