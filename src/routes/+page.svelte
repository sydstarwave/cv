<script>
    import Hero from "$components/index/Hero.svelte";
    import About from "$components/index/About.svelte";
    import Experience from "$components/index/Experience.svelte";
    import WebDev from "$components/index/Projects.svelte";
    import Contact from "$components/index/Contact.svelte";
</script>

<svelte:head>
    <title>Sydney Panesar - Software Developer</title>
</svelte:head>

<main class="snap-y">
    <Hero />
    <About />
    <Experience />
    <WebDev />
    <Contact />
</main>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>