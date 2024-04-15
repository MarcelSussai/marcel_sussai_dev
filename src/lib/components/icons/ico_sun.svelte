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
    fill: var(--c1, hsl( var(--hs-surface), var(--l-200) ));
    transition: all .3s var(--cubic-easeInOutSine);
  }
</style>

<svg transition:fade={{ duration: 200 }} viewBox="0 0 204 204" xmlns="http://www.w3.org/2000/svg">
  <circle cx="102" cy="102" r="60" class="config-01"/>
  <rect x="94" width="16" height="32" rx="8" class="config-01"/>
  <rect x="94" y="172" width="16" height="32" rx="8"  class="config-01" />
  <rect x="204" y="94" width="16" height="32" rx="8" transform="rotate(90 204 94)" class="config-01"/>
  <rect x="32" y="94" width="16" height="32" rx="8" transform="rotate(90 32 94)" class="config-01"/>
  <rect x="179.782" y="168.468" width="16" height="32" rx="8" transform="rotate(135 179.782 168.468)" class="config-01"/>
  <rect x="58.1594" y="46.8457" width="16" height="32" rx="8" transform="rotate(135 58.1594 46.8457)" class="config-01"/>
  <rect x="168.468" y="24.2178" width="16" height="32" rx="8" transform="rotate(45 168.468 24.2178)" class="config-01"/>
  <rect x="46.8457" y="145.841" width="16" height="32" rx="8" transform="rotate(45 46.8457 145.841)" class="config-01"/>    
</svg>
