<script lang="ts">
	import {
    Globe, MarqueeHome, MainTitle, MainTitleH2, MainP,
    SvgAplications, SvgApps, SvgExes, SvgSites,
    CardPossibilities,
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

  .welcome {
    width: 100%;
    background: hsl( var(--hs-surface), var(--l-bg-01) );
    opacity: 0;
    transform: translate3d(0, -100%, 0);
    animation: ani-wellcome .4s var(--cubic-easeInOutSine) forwards;
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
  .all-cards {
    width: 100%;
    padding: 8px;
    background: hsl( var(--hs-surface), var(--l-bg-01) );
    gap: 16px;
    
    @media (min-width: $media-200) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      max-width: 720px;
    }
    @media (min-width: $media-700) {
      grid-template-columns: repeat(4, 1fr);
      max-width: var(--m-w-cont);
    }
  }
  ul {
    width: 100%;
    padding: 16px 24px;
    gap: 16px;
    li {
      list-style: circle;
      font-size: var(--fts-125);
      color:      hsla(var(--hs-surface), var(--l-200), 1);
      font-weight: 300;
      
      @media (min-width: $media-050) { font-size: var(--fts-150); }
      @media (min-width: $media-150) { font-size: var(--fts-200); }
      @media (min-width: $media-250) { font-size: var(--fts-250); }
      @media (min-width: $media-675) { font-size: var(--fts-275); }
    }
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


<section class="all-intro cont-m-w flx-col-center">
  <MainTitle>
    Como desenvolvedor full-stack,
    <span class="gradient-text grd-config-1 grd-config-weight-1">posso fazer o projeto todo</span>,
    mas sou <span class="gradient-text grd-config-2 grd-config-weight-1">especialista front-end.</span>
  </MainTitle>
  <MainP>
    Sou programador e <span class="gradient-text grd-config-4 grd-config-weight-1">desenvolvedor web full-stack, especialista em front-end</span> e com bons conhecimentos em back-end e APIs <span class="detail-mark">(Node, Bun ou Deno com JS/TS, Rust)</span>, banco de dados <span class="detail-mark"> (MySQL, Postgresql, MongoDB, etc)</span> e também posso criar aplicações de baixo nível <span class="detail-mark">(Rust)</span>.
    Tenho <span class="gradient-text grd-config-4 grd-config-weight-1">mais de 10 anos de experiência</span> como dev web, e sou apaixonado pelo que faço, pois sempre me reinvento, sempre estudando e buscando inovar para estar pronto para conquistar a excelência nas mais variadas ambições digitais na web. <span class="gradient-text grd-config-4 grd-config-weight-1">Crio produtos digitais de qualidade e criatividade</span> que impulsionam seus negócios, iniciativas e projetos, <span class="gradient-text grd-config-4 grd-config-weight-1">e o conecta com o mundo todo</span>, além de poder criar soluções para automação de tarefas, sistemas personalizados, como também <span class="gradient-text grd-config-4 grd-config-weight-1">muitas outras possibilidades</span>. Me preocupo com tudo para que os resultados <span class="gradient-text grd-config-3 grd-config-weight-1">gerem valor</span> e que forneçam a solução ideal para o que você precisa, analisando as demandas e criando soluções digitais viáveis para essas demandas!
  </MainP>
</section>

<section class="all-intro cont-m-w flx-col-center">
  <MainTitleH2 class="cont-m-w">
    Eis <span class="gradient-text grd-config-4">algumas</span> das possibilidades:
  </MainTitleH2>

  <div class="all-cards flx-col-center">
    <CardPossibilities>
      <svelte:fragment slot="icon"> <SvgSites /> </svelte:fragment>
      <svelte:fragment slot="title">Criação de sites</svelte:fragment>
      <svelte:fragment slot="text">
        Criação de <span class="gradient-text grd-config-4 grd-config-weight-2">sites responsivos rápidos</span> e otimizados para motores de busca (SEO) e para o marketing digital conforme sua necessidade, e se não tiver um design eu também posso criar um com boas práticas de UI/UX...
      </svelte:fragment>
    </CardPossibilities>
    <CardPossibilities>
      <svelte:fragment slot="icon"> <SvgAplications /> </svelte:fragment>
      <svelte:fragment slot="title">Aplicações web</svelte:fragment>
      <svelte:fragment slot="text">
        Criação de <span class="gradient-text grd-config-4 grd-config-weight-2">aplicações na internet robustas</span>, podendo ter um site, um app e um sistema back-end de alta eficiência fornecendo uma aplicação completa na web, criando a solução que seja a ideal para sua necessidade!
      </svelte:fragment>
    </CardPossibilities>
    <CardPossibilities>
      <svelte:fragment slot="icon"> <SvgApps /> </svelte:fragment>
      <svelte:fragment slot="title">Aplicativos mobile</svelte:fragment>
      <svelte:fragment slot="text">
        Criação de <span class="gradient-text grd-config-4 grd-config-weight-2">apps de experiência nativa</span>, utilizando recursos dos dispositivos mobile, e sendo bem desenvolvido, rápido e eficiente para diversas aplicações disponibilizando-as nas lojas como o Play Store, etc.
      </svelte:fragment>
    </CardPossibilities>
    <CardPossibilities>
      <svelte:fragment slot="icon"> <SvgExes /> </svelte:fragment>
      <svelte:fragment slot="title">Aplicações Nativas</svelte:fragment>
      <svelte:fragment slot="text">
        Criação de <span class="gradient-text grd-config-4 grd-config-weight-2">aplicações multiplataforma nativas</span>, usando linguagem de baixo nível, para gerar softwares para Windows, Mac e Linux. Inclusive jogos, eficientes e otimizados gerando softwares nativos executáveis.
      </svelte:fragment>
    </CardPossibilities>
  </div>
</section>

<section class="all-intro cont-m-w flx-col-center">
  <MainTitleH2><span class="gradient-text grd-config-4">Objetivos gerais</span> da minha vida profissional como desenvolvedor</MainTitleH2>
  <MainP>
    Esses são meus objetivos que espero da minha carreira profissional, claro que, o tanto de coisa que espero realizar não seria conveniente colocar aqui, por várias razões, quero sim fazer mais que o descrito aqui, porém aqui estão os objetivos gerais de médio a curto prazo que espero realizar com minha carreira profissional.
    <ul class="flx-col">
      <li>
        Trabalhar em uma empresa que valoriza o trabalho feito, onde eu realmente possa ser útil com minhas habilidades e que eu possa trabalhar <span class="gradient-text grd-config-5">totalmente remoto, e isso é inegociável</span>.
      </li>
      <li>
        Quero dar uma vida melhor para minha família e para mim mesmo com meu trabalho desenvolvendo <span class="gradient-text grd-config-5">softwares de qualidade</span> que impactam de alguma forma o mundo!
      </li>
      <li>
        Poder <span class="gradient-text grd-config-5">aprender sempre mais</span>, e com conhecimento atualizado poder <span class="gradient-text grd-config-5">compartilhar o que sei</span>.
      </li>
      <li>
        Liderar o desenvolvimento de um projeto importante. Sendo uma solução lucrativa para um problema ou necessidade, e como líder técnico cuidar para que tudo tenha <span class="gradient-text grd-config-5">a qualidade da qual tenho apreço</span>.
      </li>
      <li>
        Evoluir sempre como profissional e como pessoa desenvolvedora, não apenas tecnicamente e com conhecimentos de especialista, mas de forma geral também, para <span class="gradient-text grd-config-5">integrar mais avanço e tecnologia</span> aos projetos que trabalho.
      </li>
    </ul>
  </MainP>
</section>