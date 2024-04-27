<script lang="ts">
  import {
    IcoAboutMe,
    IcoArticles,
    IcoContact,
    IcoHome,
    IcoPortfolio,
    IcoSkills,
    MenuLink,
  } from '$lib'
	import { is_active_link } from '$lib/stores/nav_store';
	import { onMount } from 'svelte';



  const LINKS = [
    { name: 'home',         href: '/', icon: IcoHome      },
    { name: 'quem sou',     href: '/dashboard/colors', icon: IcoAboutMe   },
    { name: 'habilidades',  href: '/dashboard/texts', icon: IcoSkills    },
    { name: 'portfólio',    href: '/dashboard/testes', icon: IcoPortfolio },
    { name: 'artigos',      href: '', icon: IcoArticles  },
    { name: 'contato',      href: '', icon: IcoContact   },
  ]


  // $: console.log($is_active_link)
  onMount(() => {
    
  })
</script>

<style lang="scss">
  @import '$lib/styles/vars.scss';

  .all {
    width:                  100%;
    display:                grid;
    grid-template-columns:  repeat(2, 1fr);
    gap:                    12px;
    transition:             all .3s var(--cubic-easeInOutSine);

    @media (min-width: $md-menu) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>


<div class="all flx-row-wrap">
  {#each LINKS as link}
    <MenuLink
      IcoComponent={link.icon}
      href={link.href}
      name={link.name}
      path={$is_active_link === link.href}
    />
  {/each}
</div>

