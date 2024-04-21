<script lang="ts">
  import {
    IcoAboutMe,
    IcoArticles,
    IcoContact,
    IcoHome,
    IcoPortfolio,
    IcoSkills,
    MenuLink,
  } from '$lib';



  const LINKS = [
    { name: 'home',         href: '/', icon: IcoHome      },
    { name: 'quem sou',     href: '/dashboard/colors', icon: IcoAboutMe   },
    { name: 'habilidades',  href: '/dashboard/texts', icon: IcoSkills    },
    { name: 'portfólio',    href: '/dashboard/testes', icon: IcoPortfolio },
    { name: 'artigos',      href: '/', icon: IcoArticles  },
    { name: 'contato',      href: '/teste', icon: IcoContact   },
  ]
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
    />
  {/each}
</div>

