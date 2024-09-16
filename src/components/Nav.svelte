<script lang="ts">
  import Nav__Links from './Nav__Links.svelte';
  import Nav__Branding from './Nav__Branding.svelte';
  
  let logoUrl: string = import.meta.env.VITE_API_URL;
  let brandingText: string = import.meta.env.VITE_APP_NAME;
  
  let isOpen:boolean = false;
  let navLinks = [
    { text: 'About', location: '/#about', className: 'navLink navLink__aboutHim' },
    { text: 'Skills', location: '/#skills', className: 'navLink navLink__skills' },
    { text: 'Projects', location: '/#projects', className: 'navLink navLink__projects' },
    { text: 'Contact', location: '/#contact', className: 'navLink navLink__contact' }
  ];

  function toggleNav() {
    isOpen = !isOpen;
    console.log(isOpen);
  } 
</script>

<style lang="scss">
  
  div {

    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    @include highlightTags('nav', 2);
  }

  nav {
    @include doodleBorder(1);
    &{
      display: flex;
      margin-inline: calc($indent * 3);
      justify-content: space-between;
      align-items: center;
    }
  }

  

  // .nav__links.open {
  //   display: flex;
  // }
</style>

<div>
  <nav>
    <Nav__Branding {logoUrl} {brandingText} className="nav__branding"/>
    {#if navLinks && navLinks.length > 0}
      <Nav__Links {isOpen} {navLinks}  />
    {/if}
  </nav>
</div>
