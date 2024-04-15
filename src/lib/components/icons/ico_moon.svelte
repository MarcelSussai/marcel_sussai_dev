<script lang="ts">
  import { fade } from 'svelte/transition'

</script>

<style>
  svg {
    width: 100%;
    height: 100%;
    fill: none;
    transition: all .3s var(--cubic-easeInOutSine);
  }
  .config-01 {
    transition: all .3s var(--cubic-easeInOutSine);
    fill-rule: evenodd; clip-rule: evenodd;
    fill: var(--c1, hsl( var(--hs-surface), var(--l-200) ));
  }
</style>

<svg transition:fade={{ duration: 300 }} viewBox="0 0 118 112" xmlns="http://www.w3.org/2000/svg">
  <path class="config-01" d="M117.543 69.0497C108.378 74.7246 97.5717 78.0005 86 78.0005C52.8629 78.0005 26 51.1375 26 18.0005C26 12.0777 26.8582 6.35546 28.4569 0.951172C11.3773 11.527 0 30.4351 0 52.0005C0 85.1375 26.8629 112 60 112C87.2144 112 110.197 93.882 117.543 69.0497Z" />
</svg>
