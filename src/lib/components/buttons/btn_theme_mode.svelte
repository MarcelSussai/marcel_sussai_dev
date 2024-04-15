<script lang="ts">
  import { slide } from 'svelte/transition'
  import { IcoMoon, IcoSun } from '$lib'
  import { current_theme, set_theme } from '$lib/stores/theme'

  const toggle_theme = () => { set_theme( $current_theme === 'light' ? 'dark' : 'light') }
  $: theme_desc = $current_theme === 'dark' ? 'escuro' : 'claro'
  $: thumb      = $current_theme === 'dark' ? 'calc( var(--sz-w) - 30px - 4px)' : '2px'
  $: s_txt      = $current_theme === 'dark' ? 'left: 10px;' : 'right: 10px;'
</script>

<style lang="scss">
  :global([data-theme="light"] .btn-all) { --l-out-hover: var(--l-975); }
  :global([data-theme="dark"] .btn-all)  { --l-out-hover: var(--l-975); }
  .btn-all {
    --hs-of-this: var(--hs-surface);
    --c1:         hsla( var(--hs-of-this), var(--l-850), 1 );
    --clr-txt:    hsla( var(--hs-of-this), var(--l-250), 1 );
    --clr-brd:    hsla( var(--hs-of-this), var(--l-900), 1 );
    --clr-out:    hsla( var(--hs-of-this), var(--l-out-hover, var(--l-500) ), 0 );
    --bg-btn:     hsla( var(--hs-of-this), var(--l-850), 1 );
    --bg-thumb:   hsla( var(--hs-of-this), var(--l-600), 1 );
    --rad:        8px;
    --sz-w:       100%;
    --trs:
      all         .3s var(--cubic-easeInOutSine),
      box-shadow  .2s var(--cubic-easeInOutSine),
      border      .2s var(--cubic-easeInOutSine)
    ;

    width:          96px;
    height:         40px;
    position:       relative;
    line-height:    1;
    background:     var(--bg-btn);
    border:         solid 2px var(--clr-brd);
    border-radius:  var(--rad);
    outline:        solid 4px var(--clr-out);
    outline-offset: -2px;
    cursor:         pointer;
    transition:     var(--trs);

    &:focus-visible {
      --clr-out: hsla( var(--hs-focus), var(--l-500), 1 );
      outline-offset: 4px;
    }

    &:hover {
      --clr-brd:  hsla( var(--hs-of-this),  var(--l-500), 1 );
      --clr-txt:  hsla( var(--hs-detail),   var(--l-350), 1 );
      --bg-btn:   hsla( var(--hs-of-this),  var(--l-900), 1 );
      --bg-thumb: hsla( var(--hs-of-this),  var(--l-350), 1 );
      --c1:       hsla( var(--hs-of-this),  var(--l-850), 1 );
      outline: solid 4px hsla( var(--hs-of-this),  var(--l-out-hover, var(--l-975) ), .4 );
      outline-offset: 2px;
    }
  }

  :global([data-theme="light"] .txt)  { --f-wei: 600 }
  :global([data-theme="dark"] .txt)   { --f-wei: 500 }
  .txt {
    position:     absolute;
    font-size:    var(--fts-025);
    font-weight:  var(--f-wei);
    line-height:  1;
    color:        var(--clr-txt);
    transition:   var(--trs);
    user-select:  none;
  }

  .thumb {
    --mov: 2px;

    width:          32px;
    height:         32px;
    position:       absolute;
    left:           var(--mov);
    padding:        6px;
    background:     var(--bg-thumb);
    border-radius:  calc(var(--rad) - 2px);
    transition:     var(--trs);
  }

</style>

<button class="btn-all flx-center" on:click={toggle_theme}>

  {#key $current_theme}
    <span
      style="{s_txt}" class="txt"
      transition:slide={{ duration: 300, axis: 'x', }}
    >
      {theme_desc}
    </span>
  {/key}

  <span style="--mov: {thumb};" class="thumb flx-center" aria-hidden="true">
    {#if $current_theme === 'dark'} <IcoMoon /> {:else} <IcoSun /> {/if}
  </span>

</button>
