<!-- /routes/+page.svelte -->


<script>

    import Nav from '../components/Nav.svelte';
    import AboutHim from '../components/AboutHim.svelte';
    import Hero from '../components/Hero.svelte';
    import Skills from '../components/Skills.svelte';
    import Projects from '../components/Projects.svelte';
    import Footer from '../components/Footer.svelte';
    // Style
    // import '../styles/main.scss'
    // import '../styles/components/proto2.1/proto2.1.scss'
    // import '../styles/base/_mixins.scss';
</script>

<style lang="scss"> 
    
    // @import 'base/scrollBar';
    // @import 'base/typography';
    // @import 'base/variables';
    // @import 'base/mixins';
    .fakeHtmlContainer {
    padding: 10px;
    // @include highlightTags('html', 0,);
    }
    .fakeBodyContainer {
    // @include highlightTags('body', 1,);
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