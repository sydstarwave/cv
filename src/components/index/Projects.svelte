<script>
	import Project from '$components/Project.svelte';
	import SectionNumber from '$components/SectionNumber.svelte';
	import SectionHeader from '$components/SectionHeader.svelte';
	import resume from '$data/resume.json';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

	$: visibleProjects = resume.projects.slice(0, expanded ? resume.projects.length : 4);
	let expanded = false;
</script>

<section
	id="projects"
	class="relative overflow-hidden snap-center bg-gray-100 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
	<SectionHeader />
	<SectionNumber number="011" />

	<section class="main max-w-7xl pb-40 pt-32 mx-auto">
		<div class="space-y-40">
			{#each visibleProjects as project, index}
				<Project {project} right={index % 2} />
			{/each}
		</div>

		{#if resume.projects.length > 4}
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
		{/if}
	</section>

	<div
		data-aos="slide-up"
		data-aos-offset="200"
		class="hidden lg:block absolute shadow-xl right-14 bottom-0 w-4 h-28 bg-gray-400 dark:bg-gray-300"
	/>
</section>
