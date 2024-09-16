<script lang="ts">
  export let logoUrl: string = '/assets/images/VAV.svg';
  export let brandingText: string = 'Val Angelo Valencia';
  export let className: string = '';
</script>

<style lang="scss">
  @include font-face('Mynerve', 'Mynerve/Mynerve-Regular');
  .nav__branding {
    @include doodleButton(false);
    &{
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
      background-color: $backgroundPrimary;
    }
  }

 
  .nav__branding img {
    width: 5rem;
  }

  h1 {
    font-family: 'Mynerve';
    font-size: $font-size-xxl;
  }
</style>

<div class={className}>
  {#if logoUrl}
    <img src={logoUrl} alt="Logo" />
  {/if}
  <h1 class="nav__branding-text">{brandingText}</h1>
</div>
