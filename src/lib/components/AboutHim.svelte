<!--
MARK: Script
-->
<script lang="ts">
  import valiw from '$lib/assets/images/valiw.webp';
</script>
<!--
MARK: Html
 -->
<section id="about" class="abouthim">
  <div class="left">
    <h2>Greetings, Earthlings!</h2>
    <h3>Meet the one and only: <span>Angelo!</span></h3>
    <h4>Primary Functions</h4>
    <ul>
      <li>
        Supreme Sorcerer of Visual <span class="vs" /> Wizardry, conjuring tales
        that pop out of the box!
      </li>
      <li>
        Engages in recreational antics: conquering digital <span
          class="camera"
        />
        realms, trekking terrestrial trails <span class="trek" />, and exploring
        liquidy wonders <span class="sea" />
      </li>
      <li>
        <p>
          Gaming Enthusiast: Conqueror of <span class="lol"
            >League of Legends</span
          >,
          <span class="wotlk">World Of Warcraft: Wrath Of The Lich King</span>,
        </p>
        <p>
          and captivating worlds of <span class="horizon"
            >Horizon: Zero Dawn & Forbidden West</span
          >.
        </p>
      </li>
      <li>
        The Chief caretaker of three mischievous feline companions: <span
          class="elliot">Elliot</span
        >, <span class="timmy">Timmy</span>, and the newest addition, the
        energetic <span class="natsu">Natsu</span>.
      </li>
    </ul>
    <p>
      Get ready to join the fun! Follow Angelo's escapades through the social
      laughter network below! <a href="#contacthim">&#128071;</a>
    </p>
  </div>
  <div class="valiw">
    <img src={valiw} alt="Valiw" />
  </div>
</section>
<!-- 
MARK: Style
-->
<style lang="scss">
  // @include font-face("Neucha", "Neucha/Neucha-Regular");
  // @include font-face("Caveat", "Caveat/static/Caveat-Regular");
  // @include font-face("Mansalva", "Mansalva/Mansalva-Regular");
  // @include font-face("Mynerve", "Mynerve/Mynerve-Regular");
@include font-face('CatFont', 'CatFont/OrientalCatsLight',normal, 'opentype');
@include font-face('LoL', 'LoL/BeaufortforLOL-Medium');
@include font-face('LifeCraft', 'LifeCraft_font/LifeCraft_Font');
@include font-face('horizon-font', 'horizon-font/Horizon-nMeM');


  $icons-size: 35px;
 
  .abouthim {
    @include doodleElement(1,1);
    & {
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
      display: flex;
      font-family: "Neucha";
      font-size: $font-size-md;
      line-height: 2rem;
      padding: 1.5rem;
      justify-content: space-between;
      gap: 2rem;
      @media (width < 50em) {
        font-size: $font-size-sm;
        flex-direction: column;
        flex-direction: column-reverse;
        align-items: center;
        // text-align: center;
        
        ul {
          padding-left: 2em;
          padding-left: 1.5em;
          li {
            white-space: normal;
            text-indent: -0.8em;
            font-size: $font-size-sm;
          }
        }
      }
    }
  }
  
  span {
    filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, 0.2));
    
  }
  .valiw img {
      max-width: 25dvw;
      animation: float 7s ease-in-out infinite;
      
    
  }
  
  h2 {
    
    line-height: $spacing-xxl;
    font-size: $font-size-xxl;
    font-weight: $font-weight-bold;
    font-family: "Mynerve";
  }
  h3 span {
    line-height: $spacing-xl;
    font-family: "Mansalva";
    font-size: $font-size-xxl;
  }
  h4 {
    font-family: "Caveat";
    font-size: $font-size-xxl;
    line-height: $spacing-xl;
  }
  ul {
    line-height: $spacing-xl;
    padding-left: 1em;
  }
  li {
    padding-left: 1rem;
    list-style: circle;
    display: list-item; // ensures bullet shows
    text-wrap: stable;
  }

  .vs {
    @include icon("$lib/assets//images/chibiwebdevwiz.png", 70px);
  }

  .lol {
    font-family: "LoL";
    @include icon("$lib/assets//images/LoL_Icon_Rendered_Hi-Res.png");
  }
  .wotlk {
    font-family: "LifeCraft";
    font-size: $font-size-sm;
    @include icon("$lib/assets//images/horde.png");
  }

  .horizon {
    font-family: "horizon-font";
    @include icon("$lib/assets//images/aloy.webp");
  }
  .elliot {
    @include icon("$lib/assets//images/elliot.png");
  }
  .timmy {
    @include icon("$lib/assets//images/timmy.png");
  }
  .natsu {
    @include icon("$lib/assets//images/natsu.png");
  }
  .elliot,
  .timmy,
  .natsu {
    font-family: "Catfont";
    font-weight: $font-weight-bolder;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
</style>
