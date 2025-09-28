<script lang="ts">
  import Nav__Links from './Nav__Links.svelte';
  import Nav__Branding from './Nav__Branding.svelte';
  
  let logoUrl: string = import.meta.env.VITE_API_URL;
  let brandingText: string = import.meta.env.VITE_APP_NAME;
  
  let isOpen: boolean = false;
  let navLinks = [
    { text: 'About', location: '/#about', className: 'navLink navLink__aboutHim' },
    { text: 'Skills', location: '/#skills', className: 'navLink navLink__skills' },
    { text: 'Projects', location: '/#projects', className: 'navLink navLink__projects' },
    { text: 'Contact', location: '/#contact', className: 'navLink navLink__contact' }
  ];

  function toggleNav() {
    isOpen = !isOpen;
  }
</script>

<style lang="scss">
  nav {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 1rem 0;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    container: mainnav / inline-size;
    @include doodleBorder(1);

  }

  @container mainnav (max-width: 768px) {
    nav {
      flex-wrap: wrap;
    }
  }
</style>
<!-- on:click={toggleNav} -->

<nav>
  <div
  role="button"
  tabindex="0"
  on:click={toggleNav}
  on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleNav()}
  >
    <Nav__Branding {isOpen} {logoUrl} {brandingText} />
  </div>
  
  {#if navLinks && navLinks.length > 0}
    <Nav__Links {isOpen} {navLinks} />
  {/if}
</nav>