<script lang="ts">
	import type { ComponentType } from 'svelte'
  import { is_open } from '$lib/stores/nav_store'



  let classs:       string | undefined = undefined
  let style:        string | undefined = undefined
  let IcoComponent: ComponentType
  let href:         string
  let name:         string
  let path:         boolean
  export {
    classs as class, style,
    IcoComponent, href, name, path,
  }
  $: test = path ? ' path' : ''
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  :global([data-theme="light"] a.all-link) { --l-out-hover: var(--l-975); }
  :global([data-theme="dark"] a.all-link)  { --l-out-hover: var(--l-975); }

  a.all-link { /* styles */
    --hs-of-this: var(--hs-surface);
    --hs-of-aux: var(--hs-aux);
    --c1:         hsl( var(--hs-of-aux), var(--l-300) );
    --c2:         hsl( var(--hs-of-aux), var(--l-600) );
    --c-brd:      hsl( var(--hs-of-this), var(--l-950) );
    --c-txt:      hsl( var(--hs-of-this), var(--l-200) );
    --f-sz:       var(--fts-075);
    --h-ico:      40px;
    --bg-text:    hsl( var(--hs-of-this), var(--l-900) );

    min-width:              100%;
    min-width:              100%;
    color:                  hsl( var(--hs-of-this), var(--l-150) );
    background:             hsl( var(--hs-of-this), var(--l-875) );
    justify-content:        space-between;
    display:                grid;
    grid-template-columns:  1fr;
    border-radius:          12px;
    overflow:               clip;
    border:                 solid 2px var(--c-brd);
    outline:                solid 4px transparent;
    outline-offset:         -12px;
    transition:
      all             .4s var(--cubic-easeInOutSine),
      outline-offset  .3s var(--cubic-easeInOutSine),
      border          .2s var(--cubic-easeInOutSine),
      transform       .1s var(--cubic-easeInOutSine)
    ;
    box-shadow:
      12px 12px 48px -16px hsla( var(--hs-of-this), var(--l-100), .32 )
    ;

    &.path {
      --hs-of-this: var(--hs-active);
      --hs-of-aux:  var(--hs-active);
      outline:        solid 2px hsla( var(--hs-of-this), var(--l-400), 1 );
      outline-offset: -4px;
    }
    &:hover, &.path:hover {
      --c1:       hsla( var(--hs-main),     var(--l-400), 1 );
      --c2:       hsla( var(--hs-second),   var(--l-400), 1 );
      --c-brd:    hsla( var(--hs-of-this),  var(--l-500), 1 );
      --c-txt:    hsl( var(--hs-detail),    var(--l-250) );
      --bg-text:  hsl( var(--hs-of-this),   var(--l-975) );

      background: hsla( var(--hs-of-this),  var(--l-925), 1 );
      box-shadow:
        0px 0px 32px 4px hsla( var(--hs-effect), var(--l-250), .40 )
      ;
      outline: solid 4px hsla(
        var(--hs-of-this),  var(--l-out-hover, var(--l-025)), .40
      );
      outline-offset: 2px;
      z-index: 99;
      border: solid 2px var(--c-brd);
      transition: all .3s var(--cubic-easeInOutSine);
    }
    &:focus-visible {
      outline: solid 4px hsla( var(--hs-focus),  var(--l-500), 1 );
      outline-offset: 4px;
    }
    &:active { transform: translate3d(3px, 3px, 0); }
    // @media (min-width: $md-menu) {  }
    // @media (min-width: $media-050) { --f-sz: var(--fts-075); }
    @media (min-width: $media-100) { --f-sz: var(--fts-125); --h-ico: 44px; }
    // @media (min-width: $media-150) { --f-sz: var(--fts-125); }
  }

  .ico {
    width:      100%;
    height:     var(--h-ico);
    box-shadow: inset 0 -4px 16px -8px hsla( var(--hs-of-this), var(--l-500), .48 );
    transition: all .3s var(--cubic-easeInOutSine);
  }

  :global([data-theme="light"] .text) { --f-wei-txt: 700; }
  :global([data-theme="dark"] .text)  { --f-wei-txt: 600; }
  .text {
    width:        100%;
    height:       100%;
    padding:      8px 8px 6px 8px;
    color:        var(--c-txt);
    font-size:    var(--f-sz);
    font-weight:  var(--f-wei-txt, 700);
    line-height:  1;
    background:   var(--bg-text);
    transition:   all .3s var(--cubic-easeInOutSine);
  }
</style>

<a {href} {style} class="{classs ? classs + ' ' : ''}all-link{test}" on:click={() => is_open.set(false)}>
  <span class="ico flx-center"> <svelte:component this={IcoComponent} /> </span>
  <span class="text flx-center">{name}</span>
</a>