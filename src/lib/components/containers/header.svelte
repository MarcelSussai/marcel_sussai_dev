<script lang="ts">
  import { Logotype, Menu, BtnOpenMenu } from '$lib'


</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';

  :global([data-theme="light"] header) {
    --a-01: .76;
    --a-02: .8;
    --s-01: 1px;
  }
  :global([data-theme="dark"] header) {
    --a-01: .32;
    --a-02: .64;
    --s-01: 1px;
  }
  header {
    width:          100%;
    height:         40px;
    position:       fixed;
    top:            0;
    z-index:        99999999;
    background:
      linear-gradient(to bottom, hsl( var(--hs-surface), var(--l-raw-125) ) 24%, hsl( var(--hs-surface), var(--l-raw-175) ))
    ;
    // background:     hsl( var(--hs-surface), var(--l-raw-125) );
    border-bottom:  solid var(--s-01) hsla( var(--hs-surface), var(--l-raw-500), var(--a-01) );
    box-shadow:     0 6px 32px 2px hsla( var(--hs-surface), var(--l-raw-025), var(--a-02) );
    transition:     all .3s var(--cubic-easeInOutSine);
  }
  .wrap-logotype {
    width:      fit-content;
    height:     fit-content;
    position:   absolute;
    top:        12px;
    z-index:    99999999;
    transition: all .3s var(--cubic-easeInOutSine);

    @media (min-width: $md-menu) { margin-left: var(--w-md-menu); }
  }
</style>

<header class="flx-center">
  <BtnOpenMenu />
  <div class="wrap-logotype"> <Logotype /> </div>
  <Menu />
</header>