<!-- src/components/Hero.svelte -->
<script>
import proto from '../assets/images/figure.svg';

</script>

<style lang="scss">


$black: #000;
  $white: hsl(61, 67%, 88%);
  $shadow: rgba(0, 0, 0, 0.1);
  $px: 7px;
  $bubble-border: 0 -1*$px $white,
  0 -2*$px $black,
  $px 0 $white,
  $px -1*$px $black,
  2*$px 0 $black,
  0 $px $white,
  0 2*$px $black,
  -1*$px 0 $white,
  -1*$px $px $black,
  -2*$px 0 $black,
  -1*$px -1*$px $black,
  $px $px $black;




     // Brownish
$background-color-brownish: hsla(353, 8%, 40%, 1);
// Purple
$background-color-purple: hsla(259, 36%, 47%, 1);
// CodePen Grey
//$background-color-grey: #252527;
// CodePen Blue
//$background-color-blue: hsla(210, 63%, 53%, 1);

// Some settings
$shadow-scale: 1.1;
$letter-spacing: calc(300em / 1000);
$initial-skew: -40deg;
$hover-skew: -10deg;
$animation-duration: .3s;

// Automatic settings
$shadow-initial-skew: calc($initial-skew/ 2) * -1;
$shadow-hover-skew: calc($hover-skew/ 2) * -1;

    section{
      @include highlightTags('section', 1,);
      &{
        margin-inline:calc($indent * 1);
      justify-content: space-between;
    }
    
  

  }
  .heroContainer{
    display: flex;
    // width: 100vw;
    // margin-block: 2rem;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    // gap:5rem;
    flex-direction: row-reverse;
    // background-color: red;
  }

  
  .hero_containerText {
    // margin-inline:calc($indent * );
    height: 15rem;
    background-color:$white;
  flex: 5;
  // max-width: 75%;
  // position: relative;
  text-align: center;
  color: $black;
  padding: 1*$px;
  /* Adjust as needed */
  /* Main box shadow */
  box-shadow:$bubble-border,
  $px 3*$px $shadow,
  3*$px $px $shadow,
  2*$px 2*$px $shadow;

  
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2{
    font-size: $font-size-xxl;
    line-height: 3rem;
    span{
      font-weight: bold;
    }
  }
  h3{
    font-size: $font-size-lg;
    line-height: 5rem;
  }
  p{
    font-size: $font-size-sm;
    line-height: 2rem;
  }
}


.hero_containerImage{
  flex:2;
  display: flex;
  justify-content: center;
  // background-color: green;
  height: 15rem;

  .proto{
    // background-color: red;
    height: 15rem;
    width: 15rem;
    position: relative;
    // transform-style: preserve-3d;
    // perspective: 500px;
    // background-image: url('../assets/images/figure.svg'); // Use background image
    // background-repeat: no-repeat;
    // background-size: contain; 
    // background-position: center;
    // fill: red;
    
    
  img{
    height: 100%;
    width: 100%;
    filter:hue-rotate();
    z-index: -3;
  }
}
  
  .proto:hover::before {
      transform: scale($shadow-scale, 1) skew(0deg, $shadow-hover-skew);
    }
  // &::before,
  // &::after {
  //   position: absolute;
  //   top: 0;
  //   left: -1px;
  //   height: 100%; // Set height to 100% of the parent img
  //   width: 100%; // Set width to 100% of the parent img
  //   transform-origin: left top;
  //   transition: all ease-out $animation-duration;
  //   content: ''; // Set content to an empty string
  //   background-image: url('../assets/images/figure.svg'); // Use background image
  //   background-size: cover; 
  //   border: 1px solid red; // Debugging border

  // }

  // &::before {
  //   content: "";
  //   color: rgba(0, 0, 0, .2);
  //   transform: scale($shadow-scale, 1) skew(0deg, $shadow-initial-skew);
  //   background-color: rgba(255, 0, 0, 0.5); // Debugging background color

  // }

  // &::after {
  //   z-index: 2;
  //   color: $background-color-brownish; // Use the appropriate background color variable
  //   text-shadow: -1px 0 1px $background-color-brownish, 1px 0 1px rgba(0, 0, 0, .8);
  //   transform: rotateY($initial-skew);
  //   background-color: rgba(0, 0, 255, 0.5); // Debugging background color

  // } 

  // &:hover {
  //   &::before {
  //     transform: scale($shadow-scale, 1) skew(0deg, $shadow-hover-skew);
  //   }

  //   &::after {
  //     transform: rotateY($hover-skew);
  //   }
  // }
  //   }

  }




  </style>  
<section >
  <div class="heroContainer">
    <div class="hero_containerText">
      <h2>Hey there, Stranger! I'm <span>Proto</span>,</h2>
      <h3>The Cute, Quirky Companion of My Creator's Portfolio.</h3>
      <p>Explore the creations and projects he has crafted.</p>
      <p>It's an ongoing journey, and there's plenty of exciting stuff to see.</p>
      <p>Enjoy the adventure!</p>
    </div>

    <div class="hero_containerImage">
      <div class=proto>
        <img src={proto} alt="Proto">
      </div>
      
      <!-- <img src={proto} alt="Proto"> -->
      <!-- <img class="protoshadow" src={proto} alt="Proto"> -->
    </div>
  </div>

</section>