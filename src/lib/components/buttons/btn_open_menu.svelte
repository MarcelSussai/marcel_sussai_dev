<script lang="ts">
  import { is_open, hand_is_open_tog } from '$lib/stores/nav_store'

  $: open_tog_class = $is_open ? 'open' : ''

  let classs: string = ''
  let style:  string = ''
  export { classs as class, style }
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';

  :global([data-theme="light"] .btn-open) { --l-brd: var(--l-975); }
  :global([data-theme="dark"] .btn-open) { --l-brd: var(--l-900); }
  .btn-open {
    --hs-of-this: var(--hs-surface);

    width:            64px;
    height:           56px;
    position:         fixed;
    bottom:           64px;
    right:            0;
    z-index:          999;
    padding:          0px 8px 0px 0px;
    border-top:       solid 2px hsla( var(--hs-of-this), var(--l-brd, var(--l-975)), 1 );
    border-left:      solid 2px hsla( var(--hs-of-this), var(--l-brd, var(--l-975)), 1 );
    border-bottom:    solid 2px hsla( var(--hs-of-this), var(--l-brd, var(--l-975)), 1 );
    border-radius:    32px 0 0 32px;
    background:       hsla( var(--hs-of-this), var(--l-800), .64 );
    backdrop-filter:  blur(2px);
    cursor:           pointer;
    transition:       all .3s var(--cubic-easeInOutSine);
    box-shadow:
      inset 2px 0 16px -2px hsla( var(--hs-of-this), var(--l-raw-850), .8 ),
      -8px 4px 32px 0px hsla( var(--hs-of-this), var(--l-500), .48 )
    ;
    &:hover { --hs-of-this: var(--hs-effect); }
    @media (min-width: $md-menu) { display: none; }
  }

  .all-bars {
    width:      40px;
    height:     40px;
    position:   relative;
    background: hsla( var(--hs-of-this), var(--l-150), 1 );
    border: solid 2px hsla( var(--hs-of-this), var(--l-brd, var(--l-975)), 1 );
    border-radius: 9999px;
    box-shadow: inset 0px 0 8px 0px hsla( var(--hs-of-this), var(--l-800), .48 );
    transition: all .4s var(--cubic-easeInOutSine);
  }
  .bars, .bars::before, .bars::after {
    width: 20px;
    height: 3px;
    border-radius: 99px;
    background: hsl( var(--hs-of-this), var(--l-brd, var(--l-975)) );
    transition: all .4s var(--cubic-easeInOutSine);
  }
  .bars::before, .bars::after {
    content: '';
    position: absolute;
    left: 0;
    transform-origin: center;
  }
  .bars { position: absolute; }
  .bars.open { background: transparent; }
  .bars::before { top: -6px; }
  .bars::after  { top: 6px; }
  .bars.open::before { transform: rotate(45deg); }
  .bars.open::after  { transform: rotate(-45deg); }
  .bars.open::before, .bars.open::after {
    top: 0px; background: hsl( var(--hs-effect), var(--l-800) );
  }
  .txt {
    position: absolute;
    z-index: 999;
    right: -15px;
    transform: rotate(-90deg);
    display: block;
    font-size: var(--fts-125);
    font-weight: 400;
    color: hsla( var(--hs-of-this), var(--l-175), 1 );
    text-shadow:
      2px 2px 2px hsla( var(--hs-of-this), var(--l-900), .32 ),
      -2px -2px 2px hsla( var(--hs-of-this), var(--l-900), .32 )
    ;
    transition: all .4s var(--cubic-easeInOutSine);
  }
</style>

<button {style} class="btn-open {classs} flx-center {open_tog_class}"
  on:click={hand_is_open_tog}
>
  <span class="txt">menu</span>
  <div class="all-bars flx-center {open_tog_class}">
    <div class="bars {open_tog_class}"></div>
  </div>
</button>