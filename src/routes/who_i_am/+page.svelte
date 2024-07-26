<script lang="ts">
	import {
    MainTitle, MainP, MainTitleH2,
  } from '$lib'
	import { calc_age } from '$lib/utils/calc_age'
	import { onMount } from 'svelte'

  let age: number

  onMount(() => { age = calc_age() })
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  div {
    --size-temp: 256px;
    width: var(--size-temp);
    height: var(--size-temp);
    background: hsl( var(--hs-aux), var(--l-700) );
    border-radius: var(--size-temp);
  }
</style>

<svelte:head>
  <title> Quem Sou - MarcelSussai desenvolvedor web full-stack </title>
</svelte:head>

<section style="padding-top: 32px; padding-bottom: 32px;" class="all-intro cont-m-w flx-col-center">
  <div class="temp"></div>
</section>

<section class="all-intro cont-m-w flx-col-center">
  <MainTitle>
    <span class="gradient-text grd-config-1 grd-config-weight-1">Quem eu sou profissionalmente</span> está ligado a como eu vivi <span class="gradient-text grd-config-2 grd-config-weight-1">envolto com a computação</span>.
  </MainTitle>
  <MainP>
    Tenho {age} anos, mas <span class="gradient-text grd-config-4 grd-config-weight-1">desde que era criança</span> me interesso por computadores e tecnologias relacionadas, trago uma bagagem e experiência de quem gosta do que faz, amo o que faço, programar e desenvolver uma coisa que realmente solucionará um problema ou que será útil na vida das pessoas com tecnologia, isso me deixa motivado.
    <span class="gradient-text grd-config-4 grd-config-weight-1">Nascido em 1986</span>, e quando criança, em 1994 / 1996, tive meu primeiro computador, um 386, e depois um 486 com windows 95 instalado com fucking 27 disquetes! Era tempos difíceis para aprender conceitos de computação enquanto se era criança, mas divertido! Interessado por jogos e também curioso em saber como as coisas funcionavam, <span class="gradient-text grd-config-4 grd-config-weight-1">cresci junto da internet!</span> E de lá pra cá muitas coisas aconteceram...
    <span class="gradient-text grd-config-4 grd-config-weight-1">Sou autodidata</span>, mas também aprendo e aprendi com cursos quando necessário, sempre buscando aprimorar minha experiência com mais conhecimentos e inovações, toda vez que pego um projeto para fazer, pretendo <span class="gradient-text grd-config-4 grd-config-weight-1">criar a melhor experiência digital para o meu cliente</span>, com qualidade e confiabilidade certa para termos sucesso juntos!
    Estudo a anos sobre computação, programação, algoritmo e desenvolvimento, front-end, back-end, UI/UX designer, etc, e recentemente estudando muito sobre sistemas e programação de baixo nível. Gosto de computação e o que se pode fazer com a tecnologia. Adoro desafios e realmente <span class="gradient-text grd-config-4 grd-config-weight-1">estou pronto a entregar valor com o que gosto!</span>
  </MainP>
</section>

<section class="all-intro cont-m-w flx-col-center">
  <MainTitleH2>O poder de ser autodidata!</MainTitleH2>
  <MainP>
    Autodidata não é apenas aprender sozinho, é <span class="gradient-text grd-config-4 grd-config-weight-1">ser curioso e aprender com tudo que estiver a disposição</span>, dito isto, também é aprender com a experiência alheia, com a vasta informação disponível na internet, com experimentações próprias, com cursos, com documentações, com os próprios erros, etc. <span class="gradient-text grd-config-4 grd-config-weight-1">Até quem cursa ensino superior precisa ser autodidata</span>, ainda mais nessa área de tecnologia, onde <span class="gradient-text grd-config-4 grd-config-weight-1">tudo evolui muito rápido</span>, e para acompanhar isso de maneira satisfatória <span class="gradient-text grd-config-4 grd-config-weight-1">é preciso ser autodidata.</span> A vontade, o gostar e a curiosidade em aprender sempre mais e da melhor forma, é uma característica de ser autodidata que apesar das óbvias dificuldades, me faz superar desafios e encontrar melhores soluções para as necessidades apresentadas. <span class="gradient-text grd-config-4 grd-config-weight-1">Não é preciso saber tudo, mas saber como aprender a resolver tudo que precisar, encontrando a melhor solução.</span>
    Ser autodidata é ser proativo com o conhecimento e com o não saber que todos possuem, ninguém saber tudo não é uma desculpa válida para se acovardar diante de desafios, pois são desafios que evoluem o autodidata como profissional.
  </MainP>
</section>