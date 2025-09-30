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
    width:50dvw;
    min-width: 5rem;
    margin: auto;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    container: mainnav / inline-size;
    @include doodleElement(2,1);
  }

  /* Fix container query - remove the nested nav selector */
  @container mainnav (max-width: 768px) {
    nav {
      flex-direction: column; /* Add this */
      flex-wrap: wrap;
      
      /* Center the branding wrapper on mobile */
      > .branding-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
</style>

<nav>
  <div
    role="button"
    tabindex="0"
    on:click={toggleNav}
    on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleNav()}
    class="branding-wrapper"
  >
    <Nav__Branding {isOpen} {logoUrl} {brandingText} />
  </div>
  
  {#if navLinks && navLinks.length > 0}
    <Nav__Links {isOpen} {navLinks} />
  {/if}
</nav>