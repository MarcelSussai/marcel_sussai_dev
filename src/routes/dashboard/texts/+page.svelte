<script lang="ts">

  const ABC = 'A Á B C Ç D E É F G H I Í J K L M N O Ó P Q R S T U Ú V X W Y Z PALAVRA'
  const num = '1 2 3 4 5 6 7 8 9'
  const sym = '! @ # $ % ¨ & * ( ) _ = + `"'

</script>

<style lang="scss">
  section {
    gap: 40px;
    padding: 16px;
  }
  h1 {
    padding: 16px;
    background: hsl( var(--hs-surface), var(--l-bg-01) );
    border: solid 1px;
  }
</style>



<svelte:head> <title> Texts </title> </svelte:head>

<section class="flx-col-center">
  <h1>[h1] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h1>
  <h1><span class="gradient-text">Teste de fundo de texto</span></h1>
  <h2>[h2] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h2>
  <h3>[h3] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h3>
  <h4>[h4] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h4>
  <h5>[h5] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h5>
  <h6>[h6] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</h6>
  <p>[p] - {ABC} - {ABC.toLowerCase()} - {num} - {sym}</p>
</section>
