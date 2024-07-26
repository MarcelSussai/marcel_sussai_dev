<script lang="ts">

</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  p {
    font-size: var(--fts-125);
    font-weight: 300;

    @media (min-width: $media-050) { font-size: var(--fts-150); }
    @media (min-width: $media-450) { font-size: var(--fts-225); }
    @media (min-width: $media-825) { font-size: var(--fts-200); }
  }

</style>

<p>
  <slot></slot>
</p>