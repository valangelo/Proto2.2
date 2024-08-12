<style lang="scss">
    // @import '../styles/main.scss';
    @import 'base/mixins';
    @import 'base/typography';
    @import 'base/variables';
    .containerSkills{
    @include highlightTags('section', 2,);
  }
  section{
    display: flex;
    flex-wrap: wrap;
    // mask: url(../asssets/images/border-svg.png);
    // mask-size: cover;
    // -webkit-mask: url(../assets/images/border-mask.webp);
    // -webkit-mask-size:cover;
    // -webkit-mask-repeat: no-repeat;
    
    margin-inline:calc($indent * 3);
    padding: 1.5rem;
    justify-content: space-between;
    @include doodleBorder;
  }
  h2{
    font-size: $font-size-xl;
  }
  li{
    font-size: $font-size-md;
    list-style-type:circle;
  }
  </style>

<!-- HTML -->
<div  class="containerSkills">
  <section>
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
  </section>  
</div><!-- !containerSkills -->