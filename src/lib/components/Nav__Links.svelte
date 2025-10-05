
<script lang="ts">
  export let navLinks: Array<{
    text: string;
    location: string;
    className?: string;
  }>;

  export let isOpen: boolean;

  function closeNavAndNavigate(location: string) {
    if (isOpen) {
      isOpen = false;
    }
    window.location.assign(location);
  }
</script>

<div class="nav__links" class:nav__links--mobile-open={isOpen}>
  <ul class="nav__list">
    {#each navLinks as { text, location, className }}
      <li class="nav__item {className}">
        <a
          class="nav__link"
          href={location}
          on:click|preventDefault={() => closeNavAndNavigate(location)}
          >
          <span class="nav__link-text">{text}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">

  /* ===== VARIABLES ===== */
  $nav-link-padding: 0.75rem 1.5rem;
  $nav-link-mobile-padding: 1rem 1.5rem;
  $nav-desktop-gap: 2rem;
  $nav-mobile-gap: 0.5rem;
  $nav-margin-top: 2rem;
  
  /* ===== BASE COMPONENT STRUCTURE ===== */
  .nav__links {
      margin-top: -$nav-margin-top;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .nav__list {
    // outline: auto;
    display: flex;
    gap: $nav-desktop-gap;
    margin: 0;
    padding: 0;
    list-style: none;
    justify-content: center;
    

    // align-items: center;
  }
  
  /* ===== NAV LINK STYLES ===== */
  .nav__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 65px;
    padding: $nav-link-padding;
    font-size: $font-size-lg;
    font-family: "Shadows into Light";
    // color: $clr-font-200;
    text-decoration: none;
    cursor: pointer;
    @include doodleElement(3,3);
  }
  
  /* ===== INTERACTION STATES ===== */
  .nav__item {
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &:hover {
      transform: scale(1.15);
    }

    &:focus-within {
      // outline: 2px solid $lightGray;
      // outline-offset: 1px;
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
      transition: transform 0.1s ease;
    }
  }

  /* ===== RESPONSIVE DESIGN ===== */
  
  /* Mobile Styles */
  @container mainnav (max-width: 500px) {
    .nav__links {
      
      margin-top: calc(#{$nav-margin-top} / 2);
      display: none;
      width: 100%;
      flex-direction: column;
      order: 2;
      &.nav__links--mobile-open {
        display: flex;
        
        .nav__list {
          flex-direction: column;
          width: 100%;
          gap: $nav-mobile-gap;
          align-items: stretch;
        }
        
        .nav__item {
          width: 100%;
          display: flex;
        }
        
        .nav__link {
          width: 100%;
          padding: $nav-link-mobile-padding;
          text-align: center;
        }
      }
    }
  }

  /* Desktop Styles */
  @container mainnav (min-width: 769px) {
    .nav__links {
      display: flex;
    }
  }

  /* Tablet Styles */
  @container mainnav (max-width: 768px) and (min-width: 501px) {
    .nav__list {
      gap: 1.5rem; // Add some gap for tablets
    }
    
    .nav__link {
      padding: 0.75rem 1.25rem;
      font-size: $font-size-xl;
    }
  }

  /* ===== ACCESSIBILITY ENHANCEMENTS ===== */
  @media (prefers-reduced-motion: reduce) {
    .nav__link {
      animation: none;
      transition: none;
      
      &:hover {
        animation: none;
        transform: none;
      }

      &:focus {
        transform: none;
      }

      &:active {
        transform: none;
        transition: none;
      }
    }
  }
</style>