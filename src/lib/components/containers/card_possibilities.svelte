<script lang="ts">
  import { TitleCardH3, CardText } from '$lib'
	import { observe, type Observe_result } from '$lib/actions/observe'

  let is_visible: boolean | undefined = false
  const fn_visible = ({ detail }: CustomEventInit<Observe_result>) => {
    is_visible = detail?.is_only_by_bottom
  }

  // let dataCard: DataCard
  let classs: string = ''
  let style:  string = ''
  export { classs as class, style }


</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  article {
    container-type: inline-size;
    border: solid 1px hsl( var(--hs-surface), var(--l-775) );
    border-radius: 8px;
    width: 100%;
    max-width: 320px;
    gap: 8px;
    padding: 16px;
    opacity: var(--show-opc);
    transform: translate3d(var(--show-trsl, 0), 0, 0);
    transition: all .6s var(--cubic-easeInOutSine);
    background: hsl( var(--hs-surface), var(--l-900) );
    box-shadow: 0px 0px 8px hsla( var(--hs-surface), var(--l-100), .12 );

    .icon-poss {
      height: 200px;
    }

    @media (min-width: $media-200) {
      height: 100%;
      max-width: unset;
    }
  }
  figure {
    max-height: 160px;
    padding: 8px;
  }
</style>


<article
  style={
    style +
    `--show-opc:${is_visible ? '1' : '0'};` +
    `--show-trsl:${is_visible ? '0' : '-16%'};`
  }
  class="{classs} flx-col-center"
  use:observe={ { percent_by: 32 } }
  on:intersect={fn_visible}
>
  <figure class="icon-poss flx-center">
    <slot name="icon">Sem ícone</slot>
  </figure>
  <TitleCardH3>
    <slot name='title'> Sem título </slot>
  </TitleCardH3>
  <CardText>
    <slot name="text"> Sem Texto </slot>
  </CardText>
</article>