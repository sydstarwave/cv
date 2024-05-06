<script>
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
    import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

    import GameDevProject from "$components/GameDevProject.svelte";
    import SectionNumber from "$components/SectionNumber.svelte";
    import SectionHeader from "$components/SectionHeader.svelte";
    import resume from "$data/resume.json"

    $: visibleProjects = resume.projects.slice(0, expanded ? resume.projects.length : 5);
    let expanded = false;

</script>

<section
        id="game-development"
        class="relative overflow-hidden from-gray-100 to-gray-200 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
    <SectionHeader
            wrapperClasses="moving-gradient-2"
            headingText="GAME DEVELOPMENT"
            subtitleText="Game development was what got me into coding in the first place, here are some featured projects."
    />
    <SectionNumber number="100" right />

    <section class="main pb-40 pt-32 max-w-7xl mx-auto">
        <div
                class="space-y-36 lg:space-y-0 lg:grid lg:grid-cols-8 gap-x-20 gap-y-36"
        >
            {#each visibleProjects as project}
                <GameDevProject {project} />
            {/each}
        </div>

        <button
                on:click={() => (expanded = !expanded)}
                class="mt-40 w-full flex items-center gap-2 group font-semibold text-gray-700 dark:text-gray-100"
        >
            <hr class="flex-1 mr-2 border-gray-400 dark:border-gray-500" />
            {#if expanded}
                <FontAwesomeIcon icon={faAngleUp} />
                <span class="group-hover:underline">Less Projects</span>
            {:else}
                <FontAwesomeIcon icon={faAngleDown} />
                <span class="group-hover:underline">More Projects</span>
            {/if}
            <hr class="flex-1 ml-2 border-gray-400 dark:border-gray-500" />
        </button>
    </section>
    <div
            data-aos="slide-up"
            data-aos-offset="200"
            class="hidden shadow-xl lg:block absolute left-14 bottom-0 z-10 w-4 h-28 dark:bg-gray-400 bg-gray-600"
    />
</section>
