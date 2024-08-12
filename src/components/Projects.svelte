<style lang="scss">
    // @import '../styles/main.scss';
    @import 'base/mixins';
    @import 'base/typography';
    @import 'base/variables';
    div{
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
  </style>
<div>
<section>
Skills
</section>
</div>