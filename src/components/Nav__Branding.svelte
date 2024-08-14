<script lang="ts">
  export let logoUrl: string = '/assets/images/VAV.svg';
  export let brandingText: string = 'Val Angelo Valencia';
  export let className: string = '';
</script>

<style lang="scss">
  
  .nav__branding {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    @include doodleButton(false);
  }

  .nav__branding img {
    width: 5rem;
  }

  h1 {
    font-size: $font-size-xxl;
  }
</style>

<div class={className}>
  {#if logoUrl}
    <img src={logoUrl} alt="Logo" />
  {/if}
  <h1 class="nav__branding-text">{brandingText}</h1>
</div>
