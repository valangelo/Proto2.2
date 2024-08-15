<style lang="scss">
@include font-face('GloriaHallelujah', 'Gloria_Hallelujah/GloriaHallelujah-Regular');

    .containerSkills{
    @include highlightTags('section', 2);
  }
  section{
    margin-inline:calc($indent * 3);
    display: flex;
    flex-direction: column;
    @include doodleBorder;
  }
  .skillsHeadingWrapper{
    position: relative;


    // justify-content: center;
    text-align: center;
    padding: 1.5rem;
    width: 100%;
    @include doodleBorder(2);
    // background-image: $image-background;s
    
    &{
      h2{
        font-family: "GloriaHallelujah";
        font-size: $font-size-xl;
      }
      .tape-section {
      position: absolute;
      width: 100%;
      }
      .tape-section:first-of-type {
      top: 0;
      }
      .tape-section:last-of-type {
      bottom: 0;
      }
    }
  }
  .container-column-3{
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    div{
      // margin-inline:calc($indent * 3);
    }

  h2{
    font-size: $font-size-xl;
  }
  li{
    font-size: $font-size-md;
    list-style-type:circle;
  }

  }

  


 


.paper {
  position: relative; 
}

  
.tape-section {
  --tape: #dbd8be;
  --tape-edge: #666;
  position: absolute;
}

.tape-section::before,
.tape-section::after {
  display: flex;
  justify-content: center;
  place-items: center;
  content: "VAV";
  width: 10vmin;
  height: 4vmin;
  position: absolute;
  background-color: var(--tape);
  opacity: 0.7;
  border-right: 1px dotted var(--tape-edge);
  border-left: 1px dotted var(--tape-edge);
  filter: drop-shadow(0px 0px 1px hsl(0, 0%, 0%));
  color: rgba(0, 0, 0, 0.08); 
}
/* Top Left */
.tape-section:first-of-type::before {
  transform: rotate(-45deg);
  left: -7vmin;
  top: -1vmin;
}
/* Top Right */
.tape-section:first-of-type::after {
  transform: rotate(45deg);
  right: -2vmin;
  top: -1vmin;
}
/* Bottom Left */
.tape-section:last-of-type::before {
  transform: rotate(45deg);
  left: -7vmin;
  bottom: -2vmin;
}
/* Bottom Left */
.tape-section:last-of-type::after {
  transform: rotate(-45deg);
  right: -3vmin;
  top: -3vmin;
}

  </style>

<!-- HTML -->
<div  class="containerSkills">
  
  <section id="skills">

    <div class="skillsHeadingWrapper paper">
      <div class="tape-section"/>
      <h2>Skills</h2>
      <div class="tape-section"/>
    </div>
      
    <div class="container-column-3">
      <div>
        <h2>Frontend Development & Design</h2>
        <ul>
          <li>MERN stack (MongoDB, Express.js, React.js, Node.js)</li>
          <li>Svelte & SvelteKit</li>
          <li>HTML/CSS/SCSS</li>
          <li>Responsive Web Design</li>
          <li>JavaScript</li>
          <li>Microsoft Visual Studio Code</li>
          <li>LESS/SASS (stylesheet Language)</li>
          <li>Front-End Development</li>
          <li>Bootstrap</li>
          <li>HTML (Semantic HTML)</li>
        </ul>
      </div><!-- !1st -->
      
      <div>
        <h2>Backend Development & Databases</h2>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful APIs</li>
          <li>Authentication & Authorization</li>
        <li>MongoDB</li>
        <li>Mongoose ODM</li>
        <li>SQL</li>
        <li>SQLite</li>
        <li>MySQL</li>
        <li>NoSQL</li>
        <li>Database Design</li>
      </ul>
    </div><!-- !2nd -->
    
    <div>
      <h2>Design Tools</h2>
      <ul>
        <li>Adobe Photoshop</li>
        <li>SketchUp</li>
        <li>Figma</li>
        <li>Darktable</li>
      </ul>
      
      <h2>Operating Systems</h2>
      <ul>
        <li>Linux</li>
        <li>Solaris OS</li>
        <li>Windows</li>
      </ul>
  
      <h2>Version Control & Collaboration</h2>
      <ul>
        <li>Git</li>
        <li>GitHub</li>
        <li>GitLab</li>
      </ul>
    </div><!-- !3rd -->
  </div>
  </section>  
</div><!-- !containerSkills -->