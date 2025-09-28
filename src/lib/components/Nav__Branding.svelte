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
    cursor: pointer;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    background-color: $backgroundPrimary;
    padding: 0.5rem 1rem;
    min-width: fit-content;
    
    @include doodleButton(false);
    /* Mobile arrow indicator */
    &::after {
      content: "▼";
      font-size: 0.8rem;
      transition: transform 0.3s ease;
    }
    
    &.open::after {
      transform: rotate(180deg);
    }
    
    img {
      width: 5rem;
      height: auto;
    }
    
    h1 {
      font-family: 'Mynerve';
      font-size: $font-size-xxl;
      margin: 0;
    }
  }

  /* Hide arrow on desktop */
  @container mainnav (min-width: 769px) {
    .nav__branding::after {
      display: none;
    }
  }

  /* Mobile adjustments */
  @container mainnav (max-width: 768px) {
    .nav__branding {
      padding: 0.5rem;
      gap: 0.5rem;
      
      img {
        width: 3rem;
      }
      
      h1 {
        font-size: $font-size-lg;
      }
    }
  }
  
  @container mainnav (max-width: 360px) {
    .nav__branding h1 {
      font-size: $font-size-md;
    }
  }
</style>

<div class="nav__branding" class:open={isOpen}>
  {#if logoUrl}
    <img src={logoUrl} alt="Logo" />
  {/if}
  <h1 class="nav__branding-text">{brandingText}</h1>
</div>