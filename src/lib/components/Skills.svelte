<script lang="ts">
  import Skill from './Skills_li.svelte';
  
  
  // Import all icons from src/assets/images/icons
const iconModules = import.meta.glob('$lib/assets/icons/*.{svg,png}', { eager: true }) as Record<string, { default: string }>;

// Convert to simpler map: filename -> URL
const icons = Object.fromEntries(
  Object.entries(iconModules).map(([path, module]) => [path.split('/').pop(), module.default])
);
1


const path = '$lib/assets/icons/'; 

type Skill = {
  name: string;
  className: string;
  iconUrl?: string | null;
};

const mapSkills = (skills: Skill[]): Skill[] =>
  skills.map(skill => ({
    ...skill,
    iconUrl: skill.iconUrl ? icons[skill.iconUrl] : null
  }));

// Arrays
let webDevelopment = mapSkills([
  { name: 'HTML5',              className: 'web-html5',    iconUrl: 'html5.svg' },
  { name: 'CSS3/SCSS',          className: 'web-css',      iconUrl: 'sass.svg' },
  { name: 'JavaScript',         className: 'web-js',       iconUrl: 'javascript.svg' },
  { name: 'React',              className: 'web-react',    iconUrl: 'react.svg' },
  { name: 'Svelte/SvelteKit',   className: 'web-svelte',   iconUrl: 'svelte.svg' },
  { name: 'Next.js',            className: 'web-nextjs',   iconUrl: 'nextjs.svg' },
  { name: 'Bootstrap',          className: 'web-bootstrap',iconUrl: 'bootstrap.svg' },

]);

let backendData = mapSkills([
  { name: 'Node.js',    className: 'backend-nodejs',  iconUrl: 'nodeJs.svg' },
  { name: 'Express.js', className: 'backend-express', iconUrl: 'expressJs.svg' },
  { name: 'PHP',        className: 'backend-php',     iconUrl: 'php.svg' },
  { name: 'MySQL',      className: 'backend-mysql',   iconUrl: 'sql.svg' },
  { name: 'SQLite',     className: 'backend-sqlite',  iconUrl: 'sql.svg' }
]);

let devEcosystem = mapSkills([
  { name: 'Git',          className: 'dev-git',       iconUrl: 'git.svg' },
  { name: 'GitHub',       className: 'dev-github',    iconUrl: 'github.svg' },
  { name: 'GitLab',       className: 'dev-gitlab',    iconUrl: 'gitlab.svg' },
  { name: 'NPM',          className: 'dev-npm',       iconUrl: 'nodeJs.svg' },
  { name: 'Visual Studio',className: 'dev-vs',        iconUrl: 'visualStudio.svg' },
  { name: 'VB.NET',       className: 'dev-vbnet',     iconUrl: 'VBNet.svg' },
  { name: 'Photoshop',    className: 'dev-photoshop', iconUrl: 'photoshop.svg' },
  { name: 'SketchUp',     className: 'dev-sketchup',  iconUrl: 'sketchUp.svg' },
  { name: 'Darktable',    className: 'dev-darktable', iconUrl: 'darktable.svg' }
]);


  
  
</script>


<!--
 MARK: Style
-->  
<style lang="scss">
  @include font-face('GloriaHallelujah', 'Gloria_Hallelujah/GloriaHallelujah-Regular');
  @include font-face('Caveat', 'Caveat/static/Caveat-Regular');
  @include font-face('Neucha', 'Neucha/Neucha-Regular');
  
  
  
  .containerSkills{
    // @include doodleBorder(1);
    @include doodleElement(1,1);
    &{
      min-width: min-content;
      margin-inline:$indent;
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    }
  }
  .skillsHeadingWrapper{
    
    // @include doodleBorder(2);
    @include doodleElement(1,1);
    @import '../styles/base/tapeSection';
    @import '../styles/base/foldpaper';
    &{
      min-width: min-content;
      position: relative;
      padding-block: 1rem;
      text-align: center;
      width: 100%;
    }
  }
  .container-column-3{
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem; 
    
  @container (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 0.5rem;
  }
  
  h2{
      font-weight: bolder;
      font-size: $font-size-xl;
    }
    
    
    div{
        @include paper-slit($bg-color: #fff, $corner-size: 50px, $slit-thickness: 10px, $padding: 30px);
      
      box-shadow: $shadow-large;
      h2{
        line-height: 5rem;
        font-family: 'Caveat';  
        word-wrap: break-word;
        font-size: $font-size-lg;
      }
        
      }
      
    }
    
    
    
    
    </style>

<!--
 MARK: HTML
-->  
<section id="skills" class="containerSkills">
  <div class="skillsHeadingWrapper">
    <div class="tape-effect"></div>
    <h2>Skills</h2>
      <div class="tape-effect"></div>
    </div>

    <div class="container-column-3">
     <div>
  <h2>Frontend Development & Design</h2>
  <ul>
    {#each webDevelopment as skill}
      <Skill name={skill.name} className={skill.className} iconUrl={skill.iconUrl} />
    {/each}
  </ul>
</div>

<div>
  <h2>Backend Development & Databases</h2>
  <ul>
    {#each backendData as skill}
      <Skill name={skill.name} className={skill.className} iconUrl={skill.iconUrl} />
    {/each}
  </ul>
</div>

<div>
  <h2>Tools & Software</h2>
  <ul>
    {#each devEcosystem as skill}
      <Skill name={skill.name} className={skill.className} iconUrl={skill.iconUrl} />
    {/each}
  </ul>
</div>

  </section>
  