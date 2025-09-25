<!-- /routes/+page.svelte -->
<script>


    import Nav from '../components/Nav.svelte';
    import AboutHim from '../components/AboutHim.svelte';
    import Hero from '../components/Hero.svelte';
    import Skills from '../components/Skills.svelte';
    import Projects from '../components/Projects.svelte';
    import Footer from '../components/Footer.svelte';

</script>

<style lang="scss"> 
    
    .fakeHtmlContainer {
    @include highlightTags('html', 0,);
    }
    .fakeBodyContainer {
    @include highlightTags('body', 1,);
    }
    .nav, .hero, .about, .skills, .projects{
        place-items: center;
        // outline: auto;
    }
    .nav {
        @include highlightTags('nav', 3);
    }
    .hero{
        @include highlightTags("hero", 2);
    }
    .about{
        @include highlightTags("about", 2);
    }
    .skills{
        @include highlightTags("skills", 2);
    }
    .projects{
        @include highlightTags("about", 2);
    }
    .footer{
        @include highlightTags('footer', 2);
    }
    

</style>
<div class='fakeHtmlContainer'>
    <div class='fakeBodyContainer'>
        <div class="nav"><Nav/></div>
        <div class="hero"><Hero/></div>
        <div class="about"><AboutHim/></div>
        <div class="skills"><Skills/></div>
        <div class="projects"><Projects/></div>
        <div class="footer"><Footer/></div>
    </div>
</div>