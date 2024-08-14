<style lang="scss">
    
    .containerProjects{
    @include highlightTags('section', 2,);
  }
  section{
    display: flex;
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
  .projects{
    align-self: center;
    align-content: center;
    align-items: center;
    // width: 100%;
    display: flex;
    flex-direction: column;
  }
  .projectsHeader
  {
    // background-color: red;
    position: relative;
    width: 100%;
    height: 100%;    
    margin: 1rem;
  }
  .projectsHeader::before{
   
    $paper-color: hsla(30, 100%, 96%, 0.897);
    $paper-dark: hsla(0, 0%, 50%, 0.205);
    $shadow-size: 3px;
    $transparent: hsla(222, 74%, 91%, 0.116);
    position: absolute;
    height: 100%;
    width: 100%;
    // content: "";
    background: linear-gradient($transparent,50%,
                                      $paper-dark, 51%,
                                      $transparent),
                      linear-gradient(to right,$transparent, 50%,
                                      $paper-dark, 51%,
                                      $transparent);
    }
    .cards{
      width: 100%;
    }
  </style>
<div class="containerProjects">
<section id="projects" class="projects">
  <div class="projectsHeader">
    Projects
  </div>
  <div class="cards">
    asd
  </div>
  
</section>
</div>