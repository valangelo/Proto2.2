<script>
    
    import Nav from '$lib/components/Nav.svelte';
    import AboutHim from '$lib/components/AboutHim.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import Skills from '$lib/components/Skills.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<style lang="scss">
    	$section-width:80dvw;

    .fakeHtmlContainer {
        @include highlightTags('html', 0);
    }
    
    .fakeBodyContainer {
        @include highlightTags('body', 1);
    }
    
    .nav, .hero, .about, .skills, .projects,.footer {
        place-items: center;
        max-width: $section-width;
        margin-inline: auto;
    //  outline: auto;
    }
    .nav {
        
        @include highlightTags('nav', 0);
    }
    
    .hero {
        @include highlightTags("hero", 0);
    }
    
    .about {
        @include highlightTags("about", 0);
    }
    
    .skills {
        @include highlightTags("skills", 0);
    }
    
    .projects {
        @include highlightTags("projects", 0);
    }
    .footer {
        @include highlightTags('footer', 0);
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