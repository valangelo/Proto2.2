<!-- src/components/Hero.svelte -->
<script>
  import proto from '$lib/assets/images/proto2.2.svg';
</script>

<section class="hero">
  <div class="hero__text">
    <h2>Hey there, Stranger! I'm <span>PROTO</span>,</h2>
    <h3>The Cute, Quirky Companion of My Creator's Portfolio.</h3>
    <p>Explore the creations and projects he has crafted.</p>
    <p>It's an ongoing journey, and there's plenty of exciting stuff to see.</p>
    <p>Enjoy the adventure!</p>
  </div>

  <div class="hero__image">
    <div class="proto">
      <img src={proto} alt="Proto" />
    </div>

    <!-- <img src={proto} alt="Proto"> -->
    <!-- <img class="protoshadow" src={proto} alt="Proto"> -->
  </div>
</section>

<style lang="scss">
  
  $shadow-color-dark: hsl(0, 0%, 20%);
  $shadow-color-light: hsla(60, 93%, 89%, 0.804);
  $shadow-color: rgba(0, 0, 0, 0.1);
  $spacing-unit: 10px;
  $box-shadow-main: 
  0 -1 * $spacing-unit $shadow-color-light,
  0 -2 * $spacing-unit $shadow-color-dark,
  $spacing-unit 0 $shadow-color-light,
  $spacing-unit -1 * $spacing-unit $shadow-color-dark,
  2 * $spacing-unit 0 $shadow-color-dark,
  0 $spacing-unit $shadow-color-light,
  0 2 * $spacing-unit $shadow-color-dark,
  -1 * $spacing-unit 0 $shadow-color-light,
  -1 * $spacing-unit $spacing-unit $shadow-color-dark,
  -2 * $spacing-unit 0 $shadow-color-dark,
  -1 * $spacing-unit -1 * $spacing-unit $shadow-color-dark,
  $spacing-unit $spacing-unit $shadow-color-dark,
  ($spacing-unit * 3) $spacing-unit $shadow-color,
  (3 * $spacing-unit) $spacing-unit $shadow-color,
  (2 * $spacing-unit) (2 * $spacing-unit) $shadow-color;


  // Some settings
  $shadow-color-scale: 1.1;
  $letter-spacing: calc(300em / 1000);
  $initial-skew: -40deg;
  $hover-skew: -10deg;
  $animation-duration: 0.3s;

  // Automatic settings
  $shadow-color-initial-skew: calc($initial-skew/ 2) * -1;
  $shadow-color-hover-skew: calc($hover-skew/ 2) * -1;

  .hero {
    display: flex;
    // margin`: 10rem;
    // width: 100vw;
    // margin-block: 2rem;
    align-items: center;
    justify-content: center;
    // padding: 3rem;
    // gap:5rem;
    flex-direction: row-reverse;
    // background-color: red;    
    &__text {// .hero__text (container for hero's TEXT)
      min-height: 15rem;
      background-color: $shadow-color-light;
      text-align: center;
      box-shadow: $box-shadow-main;
      //this simple calculate the borders width thickness * 2 then add a margin
        margin-inline: calc(($spacing-unit * 2) + 1rem);
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;


      h2 {
        font-family: "Mynerve";
        font-weight: $font-weight-bolder;
        font-size: $font-size-xxl;
        line-height: 3rem;
        span {
          font-weight: $font-weight-bolder;
        }
      }
      h3 {
        font-family: "Caveat";
        font-size: $font-size-xl;
        line-height: 5rem;
        font-weight: $font-weight-normal;
      }
      p {
        font-family: "Neucha";
        font-size: $font-size-md;
        line-height: 2rem;
      }
    }


    &__image { // .hero__image
    height: 15rem;
    .proto {
      margin-inline: auto;
      height: 15rem;
      width: 15rem;
      position: relative;
      img {
        animation: float 7s ease-in-out infinite;
        transform: translatey(0px);
        height: 100%;
        width: 100%;
        filter: hue-rotate();
        z-index: -3;
      }
      & :hover::before {
        transform: scale($shadow-color-scale, 1) skew(0deg, $shadow-color-hover-skew);
      }
    }
  }
}

  @media (width < 50em) {
    .hero {
      display: grid;
      align-items: center;
      position: relative;

      &__image {//.hero__image
        z-index: -999;
        order: 1;
        height: fit-content;
      }

      &__text {//hero__text
        margin-inline: 10vw;
        position: relative;
        top: -4rem;
        order: 2;
        
      }
    }
  }
</style>
