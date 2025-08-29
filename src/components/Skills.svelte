<script lang="ts">
  import Skill from './Skills_li.svelte';
  
  // Import SVG icons
  const urls = import.meta.glob("./src/assets/images/icons/**/*.{png,svg}", { eager: true }) as Record<string, { default: string }>;

  const path = './src/assets/images/icons/';
  const icons = Object.fromEntries(
  Object.entries(urls).map(([path, module]) => [path.split('/').pop(), module.default])
);
  // Skills Arrays
  let frontendSkills = [
    { name: 'HTML5',              className: 'frontend-html5',    iconName: `${path}html5.svg` },
    { name: 'CSS/SCSS',           className: 'frontend-css',      iconName: `${path}sass.svg`},  
    { name: 'JavaScript',         className: 'frontend-js',       iconName: `${path}javascript.svg` },
    { name: 'React',              className: 'frontend-react',    iconName: `${path}react.svg` },
    { name: 'Svelte/SvelteKit',   className: 'frontend-svelte',   iconName: `${path}svelte.svg` },
    { name: 'Bootstrap',          className: 'frontend-bootstrap',iconName: `${path}bootstrap.svg` },
    { name: 'WordPress',          className: 'frontend-wordpress',iconName: `${path}wordpress.svg` }
  ].map(skill => ({
    ...skill,
    iconUrl: skill.iconName && icons[skill.iconName] ? icons[skill.iconName] : null,
  }));
  
  let backendSkills = [
    { name: 'NodeJS',             className: 'backend-nodejs',    iconName: `${path}nodeJs.svg` },
    { name: 'Express.JS',         className: 'backend-express',   iconName: `${path}expressJs.svg` },
    { name: 'SQL (MySQL, SQLite)',className: 'backend-sql',       iconName: `${path}sql.svg` },
    { name: 'NoSQL',              className: 'backend-nosql',     iconName: `${path}nosql.svg` },
    { name: 'PHP',                className: 'backend-php',       iconName: `${path}php.svg` }
  ].map(skill => ({
    ...skill,
    iconUrl: skill.iconName && icons[skill.iconName] ? icons[skill.iconName] : null,
  }));
  
  let toolsAndSoftware = [
    { name: 'Adobe Photoshop',    className: 'tools-photoshop',   iconName: `${path}photoshop.svg` },
    { name: 'SketchUp',           className: 'tools-sketchup',    iconName: `${path}sketchUp.svg` },
    { name: 'Darktable',          className: 'tools-darktable',   iconName: `${path}darktable.svg` }
  ].map(skill => ({
    ...skill,
    iconUrl: skill.iconName && icons[skill.iconName] ? icons[skill.iconName] : null,
  }));
  
  let developmentTools = [
    { name: 'Microsoft Visual Studio',  className: 'devtools-visualstudio', iconName: `${path}visualStudio.svg` },
    { name: 'Git',                      className: 'devtools-git',          iconName: `${path}git.svg` },
    { name: 'GitHub',                   className: 'devtools-github',       iconName: `${path}github.svg` },
    { name: 'GitLab',                   className: 'devtools-gitlab',       iconName: `${path}gitlab.svg` },
    { name: 'VB.NET',                   className: 'devtools-vbnet',        iconName: `${path}VBNet.svg` },
    { name: 'Visual Basic',             className: 'devtools-vbbasic',      iconName: `${path}visualBasic.svg` }
  ].map(skill => ({
    ...skill,
    iconUrl: skill.iconName ? `${path}${skill.iconName}` : null
  }));
  

</script>

<style lang="scss">
@include font-face('GloriaHallelujah', 'Gloria_Hallelujah/GloriaHallelujah-Regular');
@include font-face('Caveat', 'Caveat/static/Caveat-Regular');
@include font-face('Neucha', 'Neucha/Neucha-Regular');
    .containerSkills{
    @include highlightTags('section', 2);
  }
  section{
    @include doodleBorder(1);
    &{
      margin-inline:calc($indent * 3);
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    }
  }
  .skillsHeadingWrapper{
    
    @include doodleBorder(2);
    @import '../styles/base/tapeSection';
    @import '../styles/base/foldpaper';
    &{
      position: relative;
      padding-block: 1rem;
      text-align: center;
      width: 100%;
    }
  }
  .container-column-3{
    margin  : 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    
    // justify-content: space-between;
    // display: flex;
    // flex-wrap: wrap;
    
    h2{
      font-size: $font-size-xl;
    }
    
    
    div{//Css Effect For Paper Edge
      padding: var(--p);
      --c: 50px;
      --p: 30px;
      --d: 10px;
      background: 
            radial-gradient(farthest-side at 0 0, hsl(0, 0%, 0%), hsla(0, 0%, 0%, 0)) 0 0 / var(--c) var(--c),
            radial-gradient(farthest-side at 100% 100%, hsl(0, 0%, 0%), rgba(0, 0, 0, 0)) 100% 100% / var(--c) var(--c),
            linear-gradient($backgroundPrimary 0 0) 50% 50% / calc(100% - var(--p)) calc(100% - var(--p)),
            linear-gradient(rgba(0, 0, 0, 0), hsl(0, 0%, 0%) 25% 75%, rgba(0, 0, 0, 0)) 50% 50% / calc(100% - var(--p)) calc(100% - var(--d)),
            linear-gradient(90deg, rgba(0, 0, 0, 0), hsl(0, 0%, 0%) 25% 75%, rgba(0, 0, 0, 0)) 50% 50% / calc(100% - var(--d)) calc(100% - var(--p)),
            radial-gradient(farthest-side at 0 100%, hsla(0, 0%, 0%, 0.094), rgba(0, 0, 0, 0)) calc(100% - var(--d)* 0.5) calc(var(--d)* 0.5) / var(--d) var(--d),
            radial-gradient(farthest-side at 100% 0, hsla(0, 0%, 0%, 0.094), rgba(0, 0, 0, 0)) calc(var(--d)* 0.5) calc(100% - var(--d)* 0.5) / var(--d) var(--d);

      background-repeat: no-repeat;
      
      -webkit-clip-path: polygon(0 var(--c),
      var(--c) 0,
      100% 0,
      100% calc(100% - var(--c)),
      calc(100% - var(--c)) 100%,
      0 100%);
      clip-path: polygon(0 var(--c),
      var(--c) 0,
      100% 0,
      100% calc(100% - var(--c)),
      calc(100% - var(--c)) 100%,
      0 100%);
      

      h2{
        line-height: 5rem;
        font-family: 'Caveat';  
      }
        
      }
      
    }
    
    
    
    
    </style>

<!-- HTML -->
<div class="containerSkills">
  <section id="skills">
    <div class="skillsHeadingWrapper">
      <div class="tape-section"></div>
      <h2>Skills</h2>
        <div class="tape-section"></div>
      </div>

      <div class="container-column-3">
        <div>
          <h2>Frontend Development & Design</h2>
          <ul>
            {#each frontendSkills as skill}
              <Skill name={skill.name} className={skill.className} iconUrl={skill.iconName} />
            {/each}
          </ul>
        </div>

        <div>
          <h2>Backend Development & Databases</h2>
          <ul>
            {#each backendSkills as skill}
              <Skill name={skill.name} className={skill.className} iconUrl={skill.iconName} />
            {/each}
          </ul>
        </div>

        <div>
          <h2>Tools & Software</h2>
          <ul>
            {#each toolsAndSoftware as skill}
              <Skill name={skill.name} className={skill.className} iconUrl={skill.iconName} />
            {/each}
          </ul>

          <h2>Development Tools</h2>
          <ul>
            {#each developmentTools as skill}
              <Skill name={skill.name} className={skill.className} iconUrl={skill.iconName} />
            {/each}
          </ul>
        </div>
      </div>
    </section>
  </div>