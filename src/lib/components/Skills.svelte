<script lang="ts">
  import Skill from "./Skills_li.svelte";

  // Import all icons from src/assets/images/icons
  const iconModules = import.meta.glob("$lib/assets/icons/*.{svg,png}", {
    eager: true,
  }) as Record<string, { default: string }>;

  // Convert to simpler map: filename -> URL
  const icons = Object.fromEntries(
    Object.entries(iconModules).map(([path, module]) => [
      path.split("/").pop(),
      module.default,
    ]),
  );
  

  const path = "$lib/assets/icons/";

  type Skill = {
    name: string;
    className: string;
    iconUrl?: string | null;
  };

  const mapSkills = (skills: Skill[]): Skill[] =>
    skills.map((skill) => ({
      ...skill,
      iconUrl: skill.iconUrl ? icons[skill.iconUrl] : null,
    }));

  // Arrays
  let webDevelopment = mapSkills([
    { name: "HTML5", className: "web-html5", iconUrl: "html5.svg" },
    { name: "CSS3/SCSS", className: "web-css", iconUrl: "sass.svg" },
    { name: "JavaScript", className: "web-js", iconUrl: "javascript.svg" },
    { name: "React", className: "web-react", iconUrl: "react.svg" },
    {
      name: "Svelte/SvelteKit",
      className: "web-svelte",
      iconUrl: "svelte.svg",
    },
    { name: "Next.js", className: "web-nextjs", iconUrl: "nextjs.svg" },
    { name: "Bootstrap", className: "web-bootstrap", iconUrl: "bootstrap.svg" },
  ]);

  let backendData = mapSkills([
    { name: "Node.js", className: "backend-nodejs", iconUrl: "nodeJs.svg" },
    {
      name: "Express.js",
      className: "backend-express",
      iconUrl: "expressJs.svg",
    },
    { name: "PHP", className: "backend-php", iconUrl: "php.svg" },
    { name: "MongoDB", className: "backend-mongodb", iconUrl: "mongodb.svg" },
    { name: "MySQL", className: "backend-mysql", iconUrl: "mysql.svg" },
    { name: "SQLite", className: "backend-sqlite", iconUrl: "Sqlite.svg" },
  ]);

  let devTools = mapSkills([
    { name: "Git & GitHub", className: "dev-git", iconUrl: "git.svg" },
    { name: "NPM", className: "dev-npm", iconUrl: "npm.svg" },
    { name: "Visual Studio", className: "dev-vs", iconUrl: "visualstudio.svg" },
    { name: "VB.NET", className: "dev-vbnet", iconUrl: "VBNet.svg" },
    { name: "Photoshop", className: "dev-photoshop", iconUrl: "photoshop.svg" },
    { name: "SketchUp", className: "dev-sketchup", iconUrl: "sketchUp.svg" },
    { name: "Darktable", className: "dev-darktable", iconUrl: "darktable.svg" },
  ]);
</script>

<!--
 MARK: HTML
-->
<section id="skills" class="skills">
  <div class="skills__heading">
    <h2 class="skills__title %accent-tape">Skills</h2>
  </div>

  <div class="skills__content">
    <div>
      <h2>Frontend Development & Design</h2>
      <ul>
        {#each webDevelopment as skill}
            <Skill
            name={skill.name}
            className={skill.className}
            iconUrl={skill.iconUrl}
          />
        {/each}
      </ul>
    </div>

    <div>
      <h2>Backend Development & Databases</h2>
      <ul>
        {#each backendData as skill}
          <Skill
            name={skill.name}
            className={skill.className}
            iconUrl={skill.iconUrl}
          />
        {/each}
      </ul>
    </div>

    <div>
      <h2>Tools & Software</h2>
      <ul>
        {#each devTools as skill}
          <Skill
            name={skill.name}
            className={skill.className}
            iconUrl={skill.iconUrl}
          />
        {/each}
      </ul>
    </div>
  </div>
</section>

<!--
 MARK: Style
-->
<style lang="scss">
  @include font-face(
    "GloriaHallelujah",
    "Gloria_Hallelujah/GloriaHallelujah-Regular"
  );
  @include font-face("Caveat", "Caveat/static/Caveat-Regular");
  @include font-face("Neucha", "Neucha/Neucha-Regular");

  $spacing-unit: 30px;
  .skills {
    width: 100%;
    min-width: fit-content;
    @include doodleElement(1, 1);
    & {
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    }
  }

  .skills__title {
    // @extend %tape-section;
  }
  .skills--tape {
    // @extend %tape-effect;
  }
  .skills__heading {
    @include doodleElement(1,2);
    @import "../styles/base/tapeSection";
    @import "../styles/base/foldpaper";
    
    @extend %accent-heading !optional; 
    & {
      min-width: min-content;
      position: relative;
      padding-block: 1rem;
      text-align: center;
      width: 100%;
    }
  }
  .skills__content {
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;

    @container (max-width: 600px) {
      grid-template-columns: 1fr;
      margin: 0.5rem;
    }

    div {
      @include paper-slit(
        $bg-color: #fff,
        $corner-size: 50px,
        // $slit-thickness: 10px,
        $padding: 30px
      );

      box-shadow: $shadow-large;
      h2 {
        line-height: 5rem;
        font-family: "Caveat";
        word-wrap: break-word;
        font-size: $font-size-lg;
      }
    }
  }
</style>
