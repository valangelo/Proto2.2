<script lang="ts">
  export let isOpen: boolean = false;
  export let logoUrl: string = '/assets/images/VAV.svg';
  export let brandingText: string = 'Val Angelo Valencia';
</script>

<style lang="scss">
.nav__branding {
  display: flex;
  align-items: center;
  gap: 1rem;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
  background-color: $backgroundPrimary;
  padding: 0.5rem 1rem;
  min-width: fit-content;
  
  @include doodleElement(3,3);
  
  img {
    width: 5rem;
    height: auto;
    transition: transform 0.3s ease;
    padding-inline-end: .5rem;
  }
  
  h1 {
    font-family: 'Mynerve';
    font-size: $font-size-xxl;
    padding:1rem;
  }
}

/* Only apply rotation when container is mobile AND isOpen is true */
.nav--open img {
  /* Default: no rotation */
  transform: rotate(0deg);
  
  /* Only rotate when container is in mobile mode */
  @container mainnav (max-width: 500px) {
    transform: rotate(180deg);
  }
}

/* Pointer behavior and mobile styles based on container size */
.nav__branding {
  @container mainnav (max-width: 500px) {
    cursor: pointer;
    justify-content: center;
    width: 100%;
    
    img {
      width: 3rem;
    }
    
    h1 {
      font-size: $font-size-lg;
    }
  }
  
  @container mainnav (min-width: 501px) {
    
  }
}
</style>

<button
  class="nav__branding {isOpen ? 'nav--open' : ''}"
  on:click
>
  {#if logoUrl}
    <img src={logoUrl} alt="Logo" />
  {/if}
  <h1 class="nav__branding-text">{brandingText}</h1>
</button>