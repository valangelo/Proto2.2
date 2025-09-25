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
      min-width: 15dvw;
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


  @container mainnav (width < 700px) {
  .nav__branding {
    width:100%;
    // display:inline-flexbox;
       justify-content: space-between;
  }
}
@container mainnav (width < 40em) {
  .nav__branding img {
    width: 2.5rem;
  }
}
@container mainnav (width < 240px) {
  .nav__branding{
   text-align: center;
   &::after{
    
     color:red;
    content: "asdas";
    // width: 1rem;
    font-size: 2
    }
  }
  .nav__branding-text {
    display: none;
  }

}
    .nav__branding{
    display: flex;
    // align-items: center;
    justify-content: center;
   &::after{
      // position: relative;
      content: "";
      width: 1rem;
      font-size: 2rem;
      // height: fit-content;
      // background-color: red;
    }
  }
</style>

<!-- Nav Branding  -->
<div class={className}>
  {#if logoUrl}
    <img src={logoUrl} alt="Logo" />
  {/if}
  <h1 class="nav__branding-text">{brandingText}</h1>
</div>
