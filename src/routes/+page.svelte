<script>
    
    import Nav from '$lib/components/Nav.svelte';
    import AboutHim from '$lib/components/AboutHim.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<style lang="scss">
    .fakeHtmlContainer {
        @include highlightTags('html', 0);
    }
    
    .fakeBodyContainer {
        @include highlightTags('body', 1);
    }
    
    .nav, .hero, .about, .skills, .projects {
        place-items: center;
    }
    
    .nav {
        @include highlightTags('nav', 3);
    }
    
    .hero {
        @include highlightTags("hero", 2);
    }
    
    .about {
        @include highlightTags("about", 2);
    }
    
    .skills {
        @include highlightTags("skills", 2);
    }
    
    .projects {
        @include highlightTags("projects", 2);
    }
    
    .footer {
        @include highlightTags('footer', 2);
    }
</style>

<div class='fakeHtmlContainer'>
    <div class='fakeBodyContainer'>
        <div class="nav"><Nav /></div>
        <div class="hero"><Hero /></div>
        <div class="about"><AboutHim /></div>
        <div class="skills"><Skills /></div>
        <div class="projects"><Projects /></div>
        <div class="footer"><Footer /></div>
    </div>
</div>