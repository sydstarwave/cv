<script>
	import { onMount } from 'svelte';
	import { slide, fade, blur } from 'svelte/transition';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import { derived } from 'svelte/store';
	import { theme, toggleTheme, light } from '$stores/theme';

	let open = false;

	const scrollThreshold = 10;
	const themeIcon = derived(theme, (t) => (t.toString() !== light ? faMoon : faSun));

	onMount(() => {
		/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
		let prevScrollPos = window.pageYOffset;
		const navbar = document.getElementById('navbar');

		window.onscroll = () => {
			const currentScrollPos = window.pageYOffset;
			if (prevScrollPos > currentScrollPos) {
				navbar.style.transform = 'translateY(0)';
			} else {
				navbar.style.transform = `translateY(-${navbar.offsetHeight}px)`;
			}

			prevScrollPos = currentScrollPos;
		};

		// show navbar when hover over
		onmousemove = (e) => {
			if (e.clientY < navbar.offsetHeight) {
				navbar.style.transform = 'translateY(0)';
			}
		};
	});
</script>

<nav
	id="navbar"
	class="print:hidden flex items-center gap-4 px-6 lg:px-10 py-4 top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed w-full z-50"
>
	<a
		aria-label="Logo"
		href="/#home"
		data-aos="flip-up"
		data-aos-duration="700"
		class="overflow-hidden bg-gradient-to-br from-purple-400 to-red-400 w-6 h-6 relative"
	>
		<p class="logo-type text-white dark:text-gray-900 text-3xl font-black absolute bottom-0">SP</p>
	</a>
	<a href="/#home" data-aos="flip-up" class="nav-text-home">Sydney Panesar</a>

	<div class="hidden lg:flex gap-9 items-center ml-auto">
		<a
			href="/#about"
			data-aos="zoom-in"
			data-aos-delay="100"
			data-aos-duration="700"
			class="ml-auto nav-text">About</a
		>
		<a
			href="/#experience"
			data-aos="zoom-in"
			data-aos-delay="200"
			data-aos-duration="700"
			class="nav-text">Experience</a
		>
		<a
			href="/#projects"
			data-aos="zoom-in"
			data-aos-delay="300"
			data-aos-duration="700"
			class="nav-text">Projects</a
		>
		<!--
    <a
      href="/#game-development"
      data-aos="zoom-in"
      data-aos-delay="400"
      data-aos-duration="700"
      class="nav-text"
      >Game dev</a
    >
    <a
      href="/#graphic-design"
      data-aos="zoom-in"
      data-aos-delay="500"
      data-aos-duration="700"
      class="nav-text"
      >Design</a
    >
-->
		<a
			href="/#contact"
			data-aos="zoom-in"
			data-aos-delay="600"
			data-aos-duration="700"
			class="nav-text">Contact</a
		>

		<a
			href="/resume"
			data-aos="zoom-in"
			data-aos-delay="700"
			class="nav-text"
			data-aos-duration="700">Resume</a
		>
		<button
			title="toggle theme"
			aria-label="toggle theme"
			data-aos="flip-up"
			data-aos-delay="800"
			data-aos-duration="700"
			on:click={toggleTheme}
			class="text-sm font-semibold border-gray-500 border-2 hover:bg-gray-200 dark:hover:bg-gray-700 py-1.5 px-3 dark:text-gray-50 rounded-md transition-colors"
		>
			{#if $theme.toString() !== light}
				<FontAwesomeIcon icon={faMoon} class="mr-2" /> Dark
			{:else}
				<FontAwesomeIcon icon={faSun} class="mr-2" /> Light
			{/if}
		</button>
	</div>

	<button
		title="Navigation Menu"
		aria-label="Navigation Menu"
		on:click={() => (open = !open)}
		class="lg:hidden text-lg ml-auto dark:text-white"><FontAwesomeIcon icon={faBars} /></button
	>
</nav>

{#if open}
	<div
		on:click={() => (open = false)}
		on:keyup={() => (open = false)}
		transition:fade={{ duration: 500 }}
		role="button"
		class="backdrop-blur-md fixed z-50 inset-0"
		tabindex="0"
	/>
	<dialog
		open
		transition:slide={{ duration: 500 }}
		class="fixed top-0 left-0 right-0 z-50 p-0 py-4 shadow-2xl w-full bg-white dark:bg-gray-900"
	>
		<div class="text-right py-2 px-2">
			<button
				title="Close navigation menu"
				aria-label="Close navigation menu"
				on:click={() => (open = false)}
				class="text-right text-lg text-gray-800 dark:text-gray-50 bg-gray-50 dark:bg-gray-800 px-3 py-1"
				><FontAwesomeIcon icon={faTimes} size="sm" /></button
			>
		</div>
		<nav class="mb-3 text-center font-mono text-gray-800 dark:text-gray-50 space-y-2">
			<a
				on:click={() => (open = false)}
				data-aos="slide-left"
				data-aos-delay="200"
				class="block bg-gray-50 dark:bg-gray-800 p-5"
				href="/#about"
			>
				About Me
			</a>
			<a
				on:click={() => (open = false)}
				data-aos="slide-right"
				data-aos-delay="200"
				class="block bg-gray-50 dark:bg-gray-800 p-5"
				href="/#experience"
			>
				Job Related Experience
			</a>
			<a
				on:click={() => (open = false)}
				data-aos="slide-left"
				data-aos-delay="200"
				class="block bg-gray-50 dark:bg-gray-800 p-5"
				href="/#projects"
			>
				Projects in Practice
			</a>

			<a
				on:click={() => (open = false)}
				data-aos="slide-right"
				data-aos-delay="200"
				class="block bg-gray-50 dark:bg-gray-800 p-5"
				href="/#contact"
			>
				Contact Me
			</a>

			<a
				on:click={() => (open = false)}
				data-aos="slide-left"
				data-aos-delay="200"
				class="block bg-gray-50 dark:bg-gray-800 p-5"
				href="/resume"
			>
				Resume / CV
			</a>
		</nav>
		<div class="text-center">
			<button
				title="Close navigation menu"
				aria-label="toggle theme"
				data-aos="flip-up"
				data-aos-delay="400"
				on:click={toggleTheme}
				class="border-gray-500 border-2 py-2 px-4 dark:text-gray-50 rounded-md"
				transition:fade={{ delay: 250, duration: 300 }}
			>
				{#if $theme.toString() !== light}
					<FontAwesomeIcon icon={faMoon} class="mr-2" /> Dark
				{:else}
					<FontAwesomeIcon icon={faSun} class="mr-2" /> Light
				{/if}
			</button>
		</div>
	</dialog>
{/if}

<style>
	#navbar {
		transition: transform 0.3s; /* Transition effect when sliding down (and up) */
	}
	.logo-type {
		bottom: -0.7rem;
		left: -0.46rem;
		font-size: 2rem;
	}
</style>
