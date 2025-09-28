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
    // Better navigation than setting window.location
    window.location.assign(location);
  }
</script>

<style lang="scss">
  // @include font-face('Shadows into Light', 'Shadows_Into_Light/ShadowsIntoLight-Regular');

  .nav-links-container {
    display: flex;
    gap: 1rem;
    align-items: center;

    .links {
      display: flex;
      gap: 1rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  /* Mobile styles */
  @container mainnav (max-width: 768px) {
    .nav-links-container {
      display: none;
      width: 100%;
      flex-direction: column;
      margin-top: 1rem;

      &.mobile-open {
        display: flex;
      }

      .links {
        flex-direction: column;
        width: 100%;
        gap: 0.5rem;
      }
    }
  }

  /* Doodle button styles */
  .nav-link {
    position: relative;
    min-width: 50px;
    font-size: $font-size-xxl;
    font-family: 'Shadows into Light';
    padding: 0.75rem 1.5rem;
    color: $clr-font-200;
    text-decoration: none;
    background: $backgroundPrimary;
    border: none;
    cursor: pointer;
    transition: all 235ms ease;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 3px solid var(--primary, hsla(40, 2%, 25%, 1));
      pointer-events: none;
      filter: drop-shadow(3px 3px 2px hsla(0, 0%, 0%, 0.6));
    }

    &:nth-child(1)::after {
      border-radius: 1% 5% 11% 56% / 25% 2% 11% 1%;
      transform: rotate(0.5deg);
    }
    &:nth-child(2)::after {
      border-radius: 75% 50% 4% 70% / 6% 4% 7% 5%;
      transform: rotate(0.25deg);
    }
    &:nth-child(3)::after {
      border-radius: 132% 117% 5% 130% / 7% 8% 115% 6%;
      transform: rotate(-0.5deg);
    }
    &:nth-child(4)::after {
      border-radius: 68% 40% 6% 75% / 7% 6% 60% 6%;
      transform: rotate(-0.25deg);
    }

    &:hover {
      animation: shake 1s infinite;
    }
  }

  @keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(1deg); }
    50% { transform: rotate(-1deg); }
    75% { transform: rotate(1deg); }
    100% { transform: rotate(0deg); }
  }
</style>

<div class="nav-links-container" class:mobile-open={isOpen}>
  <ul class="links">
    {#each navLinks as { text, location, className }}
      <li>
        <a
          href={location}
          class="nav-link {className}"
          on:click|preventDefault={() => closeNavAndNavigate(location)}
        >
          {text}
        </a>
      </li>
    {/each}
  </ul>
</div>
