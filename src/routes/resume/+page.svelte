<script>
    import copyToClipboard from "$lib/clipboard-helper.js";
    import resume from "$data/resume.json";
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
    import { faEnvelope, faAngleDown, faArrowLeft, faPrint, faGlobe, faPhone, faMapMarkerAlt, faFileDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';
    import { faLinkedinIn, faGithub, faJs } from '@fortawesome/free-brands-svg-icons';
    import networkTypes from '$data/networkTypes.js'
    import {onMount} from "svelte";

    onMount(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0.5 *1000)
    });

    $: work = resume.work;
    $: basics = resume.basics;
</script>

<svelte:head>
    <title>Sydney Panesar - the details</title>
</svelte:head>

<div class="m-auto">
    <div class="print:hidden mb-5">
        <a
                href="/"
                class="px-4 py-2 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
        >
            <p class="text-gray-700 font-bold font-mono">
                <FontAwesomeIcon icon={faArrowLeft} class="mr-3" />Go Back
            </p></a
        >
        <a
                class="px-4 py-2 inline-block leading-4 font-bold font-mono text-gray-700 border-red-400 border bg-red-200 hover:bg-red-300 rounded-none mr-3"
                href="/Sydney Panesar - the details.pdf"
                download="Sydney Panesar - the details.pdf"><FontAwesomeIcon icon={faFilePdf} class="mr-3" />PDF</a>
        <a
                class="px-4 py-2 inline-block leading-4 font-bold font-mono text-gray-700 border-yellow-400 border bg-yellow-200 hover:bg-yellow-300 rounded-none mr-3"
                href="/resume.json"
                download="resume.json"><FontAwesomeIcon icon={faJs} class="mr-3" />JSON</a>
        <button
                on:click={() => window.print()}
                class="px-4 py-1 font-bold font-mono text-gray-700 border-indigo-400 border bg-indigo-200 hover:bg-indigo-300 rounded-none"
        ><FontAwesomeIcon icon={faPrint} class="mr-3" />Print</button
        >
    </div>

    <main
            class="resume bg-white print:shadow-none shadow-xl flex flex-col justify-between overflow-auto fpx-8 fpy-9"
    >
        <section>
            <div class="flex">
                <div>
                    <h1 class="text-gray-700 text-3xl pb-0.5 font-extrabold">
                        {basics.name}
                    </h1>
                    <h3 class="text-gray-500 font-bold pb-3 pl-0.5">
                        {basics.label}
                    </h3>

                    <div class="flex items-start mt-1 content-text">
                        <ul class="text-gray-600 flex flex-wrap gap-x-4 gap-y-0.5">
                            <li>
                                <a
                                        class="flex gap-1.5 items-center"
                                        href={basics.url}
                                        target="_blank"
                                ><FontAwesomeIcon icon={faGlobe} />{basics.url}</a
                                >
                            </li>

                            <li>
                                <button
                                        class="flex gap-1.5 items-center"
                                        on:click={() => copyToClipboard(basics.email)}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    {basics.email}
                                </button>
                            </li>

                            {#each basics.profiles as profile}
                                {#if profile.meta.resumeDisplay}
                                    <li class="basis-1/6">
                                        <a
                                                class="flex gap-1.5 items-center"
                                                href={profile.url}
                                                target="_blank"
                                        ><FontAwesomeIcon icon={networkTypes[profile.network]} />{profile.meta.label}</a
                                        >
                                    </li>
                                {/if}
                            {/each}
                            <li>
                                <a class="flex gap-1.5 items-center" href="tel:{basics.phone}"
                                ><FontAwesomeIcon icon={faPhone} />{basics.phone}</a
                                >
                            </li>

                            <li>
                                <p class="flex gap-1.5 items-center">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />{basics.location.city}, {basics.location.region}, {basics.location.countryCode}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img class="headshot" src="/img/me_c.webp" alt="A headshot of {resume.basics.name}" />
                </div>
            </div>

        </section>

        <section class="pt-4">
            <h2
                    class="w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm"
            >
                Technical Skills
            </h2>

            <div
                    class="grid grid-cols-[auto_1fr] mt-2 items-baseline gap-x-2 text-xs content-text"
            >
                {#each resume.skills as skill}
                    <h3 class="text-gray-700 font-bold">{skill.name}</h3>
                    <p class="text-gray-500">
                        {skill.keywords.join(", ")}
                    </p>
                {/each}
            </div>
        </section>

        <section class="pt-4">
            <h2
                    class="w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm"
            >
                Work Experience
            </h2>

            <ul class="flex flex-col gap-2.5 mt-2">
                {#each work as experience}
                    <li>
                        <div class="flex items-baseline gap-2">
                            <h3 class="text-gray-700 font-bold title-text">
                                {experience.name}
                            </h3>
                            <em class="text-gray-500 title-text">
                                {experience.position}
                            </em>

                            <p class="text-gray-400 ml-auto right-text">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> {experience.meta.location}
                            </p>

                            <p class="text-gray-400 right-text ml-2">
                                {experience.startDate}{#if experience.endDate} - {experience.endDate}{/if}
                            </p>
                        </div>

                        <ul class="list-square text-gray-700 pl-5 mt-0.5 content-text">
                            {#if experience.highlights.length > 0}
                                {#each experience.highlights as point}
                                    <li>
                                        {point}
                                    </li>
                                {/each}
                            {:else}
                                <li>
                                    {experience.summary}
                                </li>
                            {/if}
                        </ul>
                    </li>
                {/each}
            </ul>
        </section>

        <section class="pt-4">
            <h2
                    class="w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm"
            >
                Education
            </h2>

            {#each resume.education as education}
                <div class="flex justify-between items-baseline mt-2">
                    <h3 class="text-gray-700 font-bold title-text">
                        {education.institution}
                    </h3>
                    <p class="text-gray-400 right-text">
                        {education.startDate}{#if education.endDate} - {education.endDate}{/if}
                    </p>
                </div>

                <div class="flex justify-between items-baseline mt-0.5">
                    <p class="text-gray-700 content-text">
                        <a href="{education.url}">{education.url}</a>
                    </p>
                    <p class="text-gray-500 font-semibold content-text">
                        {education.studyType} {#if education.area} of {education.area}{/if}
                    </p>
                </div>
            {/each}
        </section>

        <section class="pt-4">
            <h2
                    class="w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm"
            >
                Projects
            </h2>
            <ul class="flex flex-col gap-2.5 mt-2">
                {#each resume.projects as project}
                    <li>
                        <div class="flex justify-between items-baseline">
                            <h3
                                    class="text-gray-700 font-bold title-text flex items-baseline gap-1.5"
                            >
                                {project.name}
                                <!-- <i class="text-[10px] leading-3 fa fa-external-link-alt" /> -->
                            </h3>
                            <ul class="text-gray-400 flex right-text gap-4">
                                <li>
                                    <a
                                            class="flex gap-1 items-center"
                                            href={project.meta.github}
                                            target="_blank"
                                    ><FontAwesomeIcon icon={faGithub} class="print:hidden" /> {project.meta.github}</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <ul class="list-square text-gray-700 pl-5 content-text mt-0.5">
                            {#each project.highlights as point}
                                <li>
                                    {point}
                                </li>
                            {/each}
                        </ul>
                    </li>
                {/each}
            </ul>
        </section>
    </main>
</div>

<style>
    .resume {
        /* a4 size */
        width: 21cm;
        min-height: 29.7cm;

        box-sizing: border-box;
        padding: 1.27cm;
    }

    .content-text {
        /* @apply text-[11px] leading-snug; */
        font-size: 11px;
        line-height: 1.4;
    }

    .right-text {
        font-size: 11px;
        line-height: 1rem;
    }

    .title-text {
        font-size: 13px;
        line-height: 1.4;
    }

    .headshot {
        max-height: 10em;
    }

    @media print {
        .resume {
            width: 100% !important;
            position: absolute !important;
            z-index: 100000 !important;
            top: 0 !important;
            left: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            line-height: 18px;
            overflow: auto !important;
            -webkit-print-color-adjust: exact !important;
        }

        @page {
            size: A4;
            margin: 1.27cm;
        }
    }
</style>
