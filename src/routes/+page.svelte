<script lang="ts">
	import {
    Globe, MarqueeHome, MainTitle, MainTitleH2, MainP,
  } from '$lib'

</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';
  @import '$lib/styles/mixins.scss';

  @keyframes ani-wellcome {
    0% {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .all-intro { width: 100%; }
  .cont-1 {
    width: 100%;
    // gap: 8px;
    // border: solid 1px;
  }
  .grd-config-1 {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-main),
      $clr-hs-2: var(--hs-main),
    );
  }
  .grd-config-2 {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-second),
      $clr-hs-2: var(--hs-second),
    );
  }
  .grd-config-3 {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-detail),
      $clr-hs-2: var(--hs-detail),
      // $clr-l-1:   var(--l-500),
      $alpha-1:   .16,
      $alpha-2:   .16
    );
  }
  .grd-config-4 {
    @include sha-grd-config-1(
      $clr-hs-1: var(--hs-mark),
      $clr-hs-2: var(--hs-mark),
      // $clr-l-1:   var(--l-500),
      $alpha-1:   .16,
      $alpha-2:   .16
    );
  }
  .grd-config-weight-1 {
    font-weight: 800;
  }
  .welcome {
    width: 100%;
    background: hsl( var(--hs-surface), var(--l-bg-01) );
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    animation: ani-wellcome 1s .4s var(--cubic-easeInOutSine) forwards;
  }
  .p-welcome {
    font-weight: 900;
    font-family: var(--font-logo);
    font-size: var(--fts-350);
    text-align: center;
    // color: hsl( var(--hs-surface), var(--l-200) );
    width: 100%;
    @include drop-shadow-effect-mark($size: 1px, $blur: 1px,);
    filter: var(--sha-eff-mark);
  }
</style>



<svelte:head>
  <title> Home - MarcelSussai desenvolvedor web full-stack </title>
</svelte:head>

<section class="welcome cont-m-w">
  <p class="p-welcome">Seja bem vind@</p>
</section>

<section class="all-intro flx-center">
  <Globe />
  <MarqueeHome />
</section>


<section class="cont-1 cont-m-w flx-col-center">
  <MainTitle>
    Como desenvolvedor full-stack,
    <span class="gradient-text grd-config-1 grd-config-weight-1">posso fazer o projeto todo</span>,
    mas sou <span class="gradient-text grd-config-2 grd-config-weight-1">especialista front-end.</span>
  </MainTitle>
  <MainP>
    Sou programador e <span class="gradient-text grd-config-4 grd-config-weight-1">desenvolvedor web fullstack, especialista em front-end</span> com bons conhecimentos em back-end, banco de dados, APIs REST, etc.
    Tenho <span class="gradient-text grd-config-4 grd-config-weight-1">mais de 10 anos de experiência</span> como dev web, e sou apaixonado pelo desenvolvimento web, pois sempre me reinvento, sempre estudando e buscando inovar para estar pronto para conquistar a excelência nas mais variadas ambições digitais na web. <span class="gradient-text grd-config-4 grd-config-weight-1">Crio produtos digitais de qualidade e criatividade</span> que impulsionam seus negócios, iniciativas e projetos, <span class="gradient-text grd-config-4 grd-config-weight-1">e o conecta com o mundo todo</span>, além de poder criar soluções para automação de tarefas, sistemas personalizados, como também <span class="gradient-text grd-config-4 grd-config-weight-1">muitas outras possibilidades</span>. Me preocupo com tudo para que os resultados <span class="gradient-text grd-config-3 grd-config-weight-1">gerem valor</span> e que forneçam a solução ideal para o que você precisa, analisando as demandas e criando soluções digitais viáveis para essas demandas!
  </MainP>
</section>

<section class="cont-1 flx-col-center">
  <MainTitleH2 class="cont-m-w">Eis <span class="gradient-text grd-config-4">algumas</span> das possibilidades:</MainTitleH2>
</section>