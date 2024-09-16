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
  const projects: Project[] = [
    {
      id: "pitikCatsDialog",
      title: "PitikCats",
      image: "./src/assets/images/pitikElliot.svg",
      background: "./src/assets/images/pitikElliot.svg",
      url: "google.com",
      description:
        '"PitikCats" is a personal webpage where I share photos of cats and dogs I encounter during my daily walks. Each photo captures unique moments in their everyday lives, highlighting the beauty in the ordinary.',
      backstory: `
      <div class="test">
      <h1>PitikCats</h1>
      <p>was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life. PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life.PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life. PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life.PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life. PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life.PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life. PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life.PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life. PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life.PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life. PitikCats was created as a personal project to document and share the beauty of everyday moments with animals. It was inspired by my love for photography and my interest in capturing the ordinary details of life.</p>
      </div>`,
    },

    {
      id: "gawarangDialog",
      title: "Gawarang",
      image: "./src/assets/images/gawarang.svg",
      background: "./src/assets/images/gawarangbg.jpg",
      url: "google.com",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facere debitis minima. Vel laudantium modi earum. Voluptatibus eaque autem expedita cum eveniet mollitia consectetur tempora facilis exercitationem ipsa! Ipsum, maxime. Sequi voluptatem debitis qui laboriosam, labore tempora tenetur unde laborum deleniti rem commodi quam eveniet, temporibus, quisquam quod officiis doloribus quidem vitae cum dolor. Harum atque qui assumenda incidunt perspiciatis!",
      backstory:
        "Gawarang was developed as part of a collaborative project with a team of designers and developers. It focuses on showcasing innovative designs and interactive features, pushing the boundaries of web development.",
    },
    {
      id: "proto10Dialog",
      title: "Proto1.0",
      image: "./src/assets/images/figure.svg",
      background: "./src/assets/images/proto1bg.png",
      url: "google.com",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facere debitis minima. Vel laudantium modi earum. Voluptatibus eaque autem expedita cum eveniet mollitia consectetur tempora facilis exercitationem ipsa! Ipsum, maxime. Sequi voluptatem debitis qui laboriosam, labore tempora tenetur unde laborum deleniti rem commodi quam eveniet, temporibus, quisquam quod officiis doloribus quidem vitae cum dolor. Harum atque qui assumenda incidunt perspiciatis!",
      backstory:
        "Proto1.0 was my first major portfolio project developed during a coding bootcamp. It was designed to showcase my skills and was awarded the certificate for the best capstone project, marking a significant milestone in my career.",
    },
    {
      id: "proto22Dialog",
      title: "Proto2.2",
      url: "google.com",
      image: "./src/assets/images/proto2.2.svg",
      background: "./src/assets/images/pitikElliot.svg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat facere debitis minima. Vel laudantium modi earum. Voluptatibus eaque autem expedita cum eveniet mollitia consectetur tempora facilis exercitationem ipsa! Ipsum, maxime. Sequi voluptatem debitis qui laboriosam, labore tempora tenetur unde laborum deleniti rem commodi quam eveniet, temporibus, quisquam quod officiis doloribus quidem vitae cum dolor. Harum atque qui assumenda incidunt perspiciatis!",
      backstory:
        "Proto2.2 is an evolution of my initial portfolio, incorporating advanced features and a more refined design based on feedback from users and peers. It represents my growth and ongoing commitment to improving my craft.",
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
</script>

<div class="containerProjects">
  <section id="projects" class="projects">
    <div class="ProjectsHeadingWrapper">
      <div class="tape-section" />
      <h2>Projects</h2>
      <div class="tape-section" />
    </div>

    <div class="cards">
      {#each projects as project (project.id)}
        <div class="card">
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

        <!-- Project Dialog -->
        <dialog id={project.id}>
          <div class="dialogHeading">
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
        </div>
          <div class="description">
            {@html project.backstory}
          </div>
          <div class="dialogButtonscontainer">
            <button on:click={() => redirectTo(project.url)}
              >Open Project
            </button>
            <button on:click={() => closeDialog(project.id)}>
              Close
            </button>
          </div>
        </dialog>
      {/each}
    </div>
    <!--cards-->
    <!--cards-->
  </section>
</div>

<style lang="scss">
  @include font-face("Neucha", "Neucha/Neucha-Regular");
  .containerProjects {
    @include highlightTags("section", 2);
  }
  section {
    @include doodleBorder(1);
    & {
      margin-inline: calc($indent * 3);
      display: flex;
      flex-direction: column;
      filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.2));
    }
  }
  // .projects{
  //   // align-self: center;
  //   // align-content: center;
  //   // align-items: center;

  //   display: flex;
  //   flex-direction: column;
  // }

  .ProjectsHeadingWrapper {
    @import "../styles/base/tapeSection";
    @include doodleBorder(2);
    @import "../styles/base/foldpaper";
    & {
      position: relative;
      padding-block: 1rem;
      text-align: center;
    } //!ProjectsHeadingWrapper &
  } //!ProjectsHeadingWrapper
  .card {
    width: 100%;
    display: grid;
    grid-row: span 4;
    grid-template-rows: subgrid;
    &:hover .containerPreview {
      //animation for "Hovered Card"
      filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5));
      // transform: translateY(-4px);
      background-size: 115%;
    } //!:hover .containerPreview
  } //!containerPreview
  .cards {
    min-height: max-content;
    margin-block-start: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows:
      [start]400px
      [image-end title-start]auto
      [title-end description-start]auto
      [end];
    // @include doodleBorder(1);
    gap: 1rem;

    button {
      @include doodleButton(1);
      & {
        // width: 100%;
        // grid-row: title-start/title-end;
        // grid-column: 1/-1;
        // text-align: center;
        font-size: $font-size-xl;
      } //!&
    } //!h2

    .containerPreview {
      grid-row: start/image-end;
      grid-column: 1/-1;
      $basePath: "./src/assets/images/";
      transition:
        background-size 0.5s ease-in-out,
        filter 0.5s ease-in-out;
      width: 100%;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50px;
      border: 5px solid #444;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
    } //!&
    .cardheading {
      background-color: $backgroundPrimary;
    }
    .cardDescription {
      grid-row: description-start/end;
      grid-column: 1/-1;
      font-family: "Neucha";
      font-size: $font-size-md;
      // grid-row: 3 / 4; // Stays below the title
    } //!cardDescription
  } //!card

  dialog[open] {
    position:fixed;
    background-color: rgba(211, 211, 211, 0.9);
    backdrop-filter: blur(20px);
    // background-blend-mode:overlay;
    @media (min-width: 768px) {
    width: 90vw;
    // height: 80vh;
  }
  
.dialogHeading{
  float: left;
  display: inline;
      img {
        @include doodleBorder(2);
        &{
          aspect-ratio: 1/1;
          width: 12rem;
          // height: 100%;
          // width: 100%;
          // object-fit: cover;
          // display: flex;
        }
      }
  
      h2 {
        font-size: $font-size-xxl;
      }
}

    .description {
      font-size: $font-size-md;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      padding-bottom: 5rem;
    }
    
    .dialogButtonscontainer {

      position: absolute;
      // position: relative;
      right: 0;
      bottom: 0;
      float:inline-end;
      // display: flex;
    // justify-content: flex-end;
    // align-self: end; 
    padding: 2rem;
    }
  }
  ::backdrop {
    background-image: var(--backdrop-image);
    background-blend-mode:overlay;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    backdrop-filter: blur(20px);
    // opacity: .9;
  }
</style>
