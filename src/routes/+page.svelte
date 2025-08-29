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
    padding: 10px;
    @include highlightTags('html', 0,);
    }
    .fakeBodyContainer {
    @include highlightTags('body', 1,);
    }

</style>
<div class='fakeHtmlContainer'>
    <div class='fakeBodyContainer'>
        <Nav/>
        <Hero/>
        <AboutHim/>
        <Skills/>
        <Projects/>
        <Footer/>
    </div>
</div>