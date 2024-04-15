<script lang="ts">
	import type { ComponentType } from 'svelte'



  let classs:       string | undefined = undefined
  let style:        string | undefined = undefined
  let IcoComponent: ComponentType
  let href:         string
  let name:         string
  export {
    classs as class, style,
    IcoComponent, href, name
  }
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  :global([data-theme="light"] .all-link) { --l-out-hover: var(--l-975); }
  :global([data-theme="dark"] .all-link)  { --l-out-hover: var(--l-975); }
  a:active { background: red; }

  .all-link { /* styles */
    --hs-of-this: var(--hs-surface);
    --c1:         hsl( var(--hs-of-this),    var(--l-300) );
    --c2:         hsl( var(--hs-of-this),  var(--l-675) );
    --c-brd:      hsl( var(--hs-of-this), var(--l-900) );
    --c-txt:      hsl( var(--hs-of-this), var(--l-275) );

    width: 96px;
    color: hsl( var(--hs-of-this), var(--l-150) );
    background: hsl( var(--hs-of-this), var(--l-850) );
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 8px;
    overflow: clip;
    border: solid 2px var(--c-brd);
    outline: solid 4px transparent;
    outline-offset: -2px;
    transition: all .3s var(--cubic-easeInOutSine);
    box-shadow:
      12px 12px 48px -16px hsla( var(--hs-of-this), var(--l-025), .24 )
    ;

    &:hover {
      --hs-of-this: var(--hs-surface);
      --c1:       hsla( var(--hs-main),     var(--l-400), 1 );
      --c2:       hsla( var(--hs-second),   var(--l-400), 1 );
      --c-brd:    hsla( var(--hs-of-this),  var(--l-500), 1 );
      --c-txt:    hsl( var(--hs-detail),    var(--l-300) );

      background: hsla( var(--hs-of-this),  var(--l-925), 1 );
      box-shadow:
        8px 4px 48px -4px hsla( var(--hs-detail), var(--l-200), .64 )
      ;
      outline: solid 4px hsla(
        var(--hs-of-this),  var(--l-out-hover, var(--l-025)), .40
      );
      outline-offset: 2px;
    }
    &:focus-visible {
      outline: solid 2px hsla( var(--hs-focus),  var(--l-500), 1 );
      outline-offset: 4px;
    }
    // @media (min-width: $md-menu) {  }
  }

  .ico {
    width:      100%;
    height:     40px;

    transition: all .3s var(--cubic-easeInOutSine);
    box-shadow: inset 0 -4px 16px -8px hsla( var(--hs-of-this), var(--l-500), .48 );
  }

  :global([data-theme="light"] .text) { --f-wei-txt: 600; }
  :global([data-theme="dark"] .text)  { --f-wei-txt: 500; }
  .text {
    width: 100%;
    height: 100%;
    line-height: 1;
    background: hsl( var(--hs-of-this), var(--l-900) );
    color: var(--c-txt);
    padding: 8px 4px 6px 4px;
    font-size: var(--fts-050);
    font-weight: var(--f-wei-txt, 700);
    transition: all .3s var(--cubic-easeInOutSine);
  }
</style>

<a {href} {style} class="all-link {classs}">
  <span class="ico flx-center"> <svelte:component this={IcoComponent} /> </span>
  <span class="text flx-center">{name}</span>
</a>