<script lang="ts">
	import { onMount } from 'svelte'
	import { root_css_clear_names } from '$lib/utils/vars_css_in_js'

  let name_clrs: string[] = ['']
  let tones_clr: string[] = ['']
  onMount(() => {
    name_clrs = root_css_clear_names('hs')
    tones_clr = root_css_clear_names('l-raw')
  })

  const make_vars = (name: string, tone: string) => {
    return `--c: hsl( var(--hs-${name}), var(--l-${tone}) );`
  }
  const check_tone = (tone: string) => tone === '500' ? 'grid-column: 1 / -1; --w: 100%;' : ''

  const group_style = (name: string, tone: string) => {
    return `${make_vars(name, tone)} ${check_tone(tone)}`
  }
</script>

<style lang="scss">
  .all-colors {
    // padding: 8px;
    justify-content: center;
    gap: 12px;
    // border: solid 1px hsla( var(--hs-surface), var(--l-500), 1 );
  }
  .clr-tones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: solid 6px #FFF;
    background: #FFF;
    // border-radius: 6px;
  }
  .clr-tone {
    --w: 64px;

    width: var(--w);
    height: 40px;
    background: var(--c);
    font-weight: 900;
    font-size: var(--fts-275);
    font-family: var(--font-mono);
    color: #000;
    text-shadow:
      1px   1px   1px #FFF,
      -1px  -1px  1px #FFF,
      1px   -1px  1px #FFF,
      -1px  1px   1px #FFF
    ;
  }
  .clr-n { gap: 0px; padding-top: 0px; }
  .clr-n > span {
    background: hsl( var(--name-l), var(--l-950) );
    color: hsl( var(--name-l), var(--l-150) );
    font-size: var(--fts-400);
    line-height: 1;
    padding: 4px 8px;
    font-weight: 900;
    text-align: center;
    width: 100%;
  }

</style>



<svelte:head> <title> Colors </title> </svelte:head>

<h1>Cores</h1>

<section class="all-colors flx-row-wrap">
  {#each name_clrs as name }
    <div class="clr-n flx-col-center">
      <span style="--name-l: var(--hs-{name}); "> {name} </span>
      <div class="clr-tones">
        {#each tones_clr as tone }
          <div style={group_style(name, tone)} class="clr-tone flx-center">
            {tone}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>