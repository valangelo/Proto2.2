<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  interface Project {
    id: string;
    title: string;
    image: string;
    url: string;
    background: string;
    description: string;
    backstory: string;
  }
  import Dialog from "./Projects__Dialog.svelte";

  import PitikElliot from "$lib/assets/images/pitikElliot.svg";
  import Gawarang from "$lib/assets/images/gawarang.svg";
  import GawarangBG from "$lib/assets/images/gawarangbg.jpg";
  import Figure from "$lib/assets/images/figure.svg";
  import proto2 from "$lib/assets/images/proto2.2.svg";
  const projects: Project[] = [
    {
      id: "pitikCatsDialog",
      title: "PitikCats",
      image: PitikElliot,
      background: PitikElliot,
      url: "https://pitikcats.vercel.app/",
      description:
        '"PitikCats" is a personal webpage where I share photos of cats and dogs I encounter during my daily walks. Each photo captures unique moments in their everyday lives, highlighting the beauty in the ordinary.',
      backstory: `
      <div class="test">
      <p>
        PitikCats is my personal project where I share random pictures of street cats. I love taking photos of cats I come across while out and about, capturing their everyday moments. This site is a simple space to share those snapshots and celebrate the charm of these furry wanderers.
      </p>
      <p>
      Let me know if this works or needs adjustments!
      </p>
      </div>`,
    },

    {
      id: "gawarangDialog",
      title: "Gawarang",
      image: Gawarang,
      background: GawarangBG,
      url: "https://proto2-2.vercel.app/",
      description:
        "This is a personal project: a custom-designed, hand-coded blog and portfolio website for my girlfriend.",
      backstory:
        "This is a personal project: a custom-designed, hand-coded blog and portfolio website for my girlfriend.",
    },
    {
      id: "proto10Dialog",
      title: "Proto1.2",
      image: Figure,
      background: Figure,
      url: "https://proto1-2.vercel.app/",
      description: `"Proto" was my capstone project, created under a tight deadline and technical constraints. The concept emerged during wireframing; I envisioned my portfolio not just as a site, but as a character.
This led me to develop a persona named "Proto" to serve as my voice. With a focus on simplicity, I poured my energy into crafting a unique mood through typography and a deliberate color palette, giving the project its own identity.`,
      backstory: `"Proto" was my capstone project, created under a tight deadline and technical constraints. The concept emerged during wireframing; I envisioned my portfolio not just as a site, but as a character.
This led me to develop a persona named "Proto" to serve as my voice. With a focus on simplicity, I poured my energy into crafting a unique mood through typography and a deliberate color palette, giving the project its own identity.`,
    },
    {
      id: "proto22Dialog",
      title: "Proto2.2",
      url: "https://proto2-2.vercel.app/",
      image: proto2,
      background: Figure,
      description: `Proto 2.2 is a complete rebuild and reimagining of my original capstone project. The goal was to modernize the "Proto" concept by porting it from a static HTML/Bootstrap site into a full-fledged SvelteKit application.`,
      backstory: `Proto 2.2 is a complete rebuild and reimagining of my original capstone project. The goal was to modernize the "Proto" concept by porting it from a static HTML/Bootstrap site into a full-fledged SvelteKit application.`,
    },
    {
      id: "proto22Dialossg",
      title: "Proto2.2",
      url: "https://proto2-2.vercel.app/",
      image: proto2,
      background: Figure,
      description: `Proto 2.2 is a complete rebuild and reimagining of my original capstone project. The goal was to modernize the "Proto" concept by porting it from a static HTML/Bootstrap site into a full-fledged SvelteKit application.`,
      backstory: `Proto 2.2 is a complete rebuild and reimagining of my original capstone project. The goal was to modernize the "Proto" concept by porting it from a static HTML/Bootstrap site into a full-fledged SvelteKit application.`,
    },
  ];

  let currentDialogId: string | null = null;
  // Function to open the dialog
  const openDialog = (dialogId: string, background: string) => {
    const dialogElement = document.getElementById(
      dialogId,
    ) as HTMLDialogElement;
    if (dialogElement) {
      document.documentElement.style.setProperty(
        "--backdrop-image",
        `url(${background})`,
      );
      dialogElement.showModal();
    }
  };

  // Function to close the dialog
  const closeDialog = (dialogId: string) => {
    const dialogElement = document.getElementById(
      dialogId,
    ) as HTMLDialogElement;
    if (dialogElement) {
      dialogElement.close();
      document.documentElement.style.removeProperty("--backdrop-image");
    }
  };

  const redirectTo = (url: string): void => {
    window.location.href = url;
  };

  let dialogs: Record<string, Dialog> = {};
</script>

<!--
*********************************
          MARK: HTML
*********************************

#NOTE

- Structure:
div.projects
        ├── div.projects-header
        │     ├── div.tape-effect
        │     ├── h2
        │     └── div.tape-effect
        └── div.projects-grid
              └── div.project-card
                    ├── div.containerPreview
                    ├── button.cardheading
                    └── div.cardDescription

-->

<div id="projects" class="projects">
  <div class="projects-header">
    <div class="tape-effect" />
    <h2>Projects</h2>
    <div class="tape-effect" />
  </div>

  <div class="projects-grid">
    {#each projects as project (project.id)}
      <div class="project-card workinprogress">
        <div
          class="containerPreview"
          style="background-image:url({project.image})"
        />
        <button
          class="cardheading"
          data-dialog-id={project.id}
          on:click={() => openDialog(project.id, project.background)}
          aria-controls={project.id}
        >
          {project.title}
        </button>

        <div class="cardDescription">
          {project.description}
        </div>
      </div>
    {/each}
  </div>
</div>

{#each projects as project (project.id)}
  <Dialog
    bind:this={dialogs[project.id]}
    id={project.id}
    title={project.title}
    image={project.image}
    url={project.url}
    background={project.background}
    backstory={project.backstory}
  />
{/each}

<!--
*********************************
          MARK: STLYE
*********************************
-->

<style lang="scss">
  @include font-face("Neucha", "Neucha/Neucha-Regular");

  .projects {
    @include doodleElement(1, 1);
    & {
      width: 100%;
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    }
  }

  .projects-header {
    @import "../styles/base/tapeSection";
    @include doodleElement(1, 3);
    @import "../styles/base/foldpaper";
    & {
      position: relative;
      padding-block: 1rem;
      text-align: center;
    } //!header &
  } //!header

  .projects-grid {
    @include doodleElement(1, 3);
    container-type: inline-size;
    // min-height: max-content;
    margin-block-start: 3rem;
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows:
      [start]400px
      [image-end title-start]auto
      [title-end description-start]auto
      [end];
    gap: 1rem;
    // @include doodleBorder(1);

    /////////////////
    // region ::project-card
    /////////////////
    .project-card {
      // outline: auto
      @include doodleElement(1);
      display: grid;
      grid-column: auto;
      grid-row: span 4;
      grid-template-rows: subgrid;
      padding: 2rem;
      @media (width > $spacing-responsive-lg) {
        // outline: 1px red solid;
        display: block;
      }

    } //!project-thumbnail

    button {
      @include doodleElement(1, 1);
      & {
        // width: 100%;
        // grid-row: title-start/title-end;
        // grid-column: 1/-1;
        // text-align: center;
        font-size: $font-size-xl;
      } //!&
    } //!h2

    .containerPreview {
      @include doodleElement(2);
      & {
        transition:
          background-size 0.5s ease-in-out,
          filter 0.5s ease-in-out;
        margin-inline: auto;
        min-width: calc($spacing-responsive-lg * 5);
        aspect-ratio: 1;
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
      }
    } //!&
    .cardheading {
      width: 100%;
      background-color: $backgroundPrimary;
    }
    .cardDescription {
      // grid-row: description-start/end;
      // grid-column: 1/-1;
      font-family: "Neucha";
      font-size: $font-size-md;
      // grid-row: 3 / 4; // Stays below the title
    } //!cardDescription
  } //!card

  ::backdrop {
    background-image: var(--backdrop-image);
    background-blend-mode: overlay;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    backdrop-filter: blur(20px);
    opacity: .9;
  }

  .workinprogress {
    position: relative;
    &::after {
      outline: 3px solid #00000023;
      transform-origin: center;
      content: "Work in Progress";
      position: absolute;
      z-index: 11;
      text-align: center;
      font-size: clamp(1.5rem, 2.5vw, 4rem);
      color: #000;
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 50%;
      border: 5px gray solid;
      filter: drop-shadow(2px 2px 4px rgb(39, 39, 39));
      aspect-ratio: 1/1;
      transform: rotate(340deg);
      inset: 1rem;
      margin: auto;
      display: flex;
      align-items: center;
      // justify-content: center;
      pointer-events: none;
    }
  }
</style>
