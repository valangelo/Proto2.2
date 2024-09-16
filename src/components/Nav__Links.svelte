<script lang="ts">
  
  export let navLinks: Array<{
    text: string;
    location: string;
  }>;

  export let isOpen: boolean;
</script>

<style lang="scss">
  @include font-face('Shadows into Light', 'Shadows_Into_Light/ShadowsIntoLight-Regular');
  .links {
    display: flex;
    gap: 1rem;
    align-content: space-between;    
  }
    .doodleButton {
    z-index: 1;
    position: relative;
    min-width: 50px;
    width: auto;
    font-size: $font-size-xxl;
    font-family: 'Shadows into Light';
    padding: 0.75rem;
    color: $clr-font-200;
    align-self: center;
    transition: all 235ms ease 0s;
    cursor: pointer;
    background-image: none;
    background: $backgroundPrimary;
    border: 0px none transparent;
    outline: none;

      &::after{
        z-index: -1;
        content: '';
        border-color: hsla(40, 2%, 25%, 1);
        border-color: var(--primary);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-style: solid;
        border-width: 3px;
        pointer-events: none;
        filter: drop-shadow(3px 3px 2px hsla(0, 0%, 0%, 0.6));
      }
     
    }

    @for $i from 1 through 4 {
      .doodleButton:nth-child(#{$i}) {
        transition-delay: (5 - $i) * 50ms;
      }
    }

    .doodleButton:nth-child(1)::after {
      border-radius: 1% 5% 11% 56% / 25% 2% 11% 1%;
      transform: rotate(0.5deg);
    }

    .doodleButton:nth-child(2)::after {
      border-radius: 75% 50% 4% 70% / 6% 4% 7% 5%;
      transform: rotate(0.25deg);
    }

    .doodleButton:nth-child(3)::after {
      border-radius: 132% 117% 5% 130% / 7% 8% 115% 6%;
      transform: rotate(-0.5deg);
    }

    .doodleButton:nth-child(4)::after {
      border-radius: 68% 40% 6% 75% / 7% 6% 60% 6%;
      transform: rotate(-0.25deg);
    }



    .doodleButton:hover {
        animation: shake 1s;
        animation-iteration-count: infinite;
      }

      .doodleButton:active {
        top: 0.2rem;
      }

      @keyframes shake {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(1deg); }
        50% { transform: rotate(-1deg); }
        75% { transform: rotate(1deg); }
        100% { transform: rotate(0deg); }
      }

.nav__links{
  background-color: red;
}
.nav__links .open{
  background-color: green;
}

</style>

<div class={`links  ${isOpen ? 'isOpen' : ''}`}>
  {#each navLinks as { text, location }}
    <button type="button" class={` doodleButton`} on:click={() => (window.location.href = location)}>
      {text}
    </button>
  {/each}
</div>
