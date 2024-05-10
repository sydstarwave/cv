<script>
	import TextReveal from '$components/TextReveal.svelte';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
	import networkTypes from '$data/networkTypes.js';

	import { derived } from 'svelte/store';
	import { theme, light } from '$stores/theme.js';
	import resume from '$data/resume.json';

	const welcomeMessage = derived(theme, (t) =>
		t.toString() !== light ? 'fmt.Println("Hey!👋")' : 'fmt.Println("Hi!🙋‍♀️")'
	);
</script>

<section
	id="home"
	class="relative main bg-gray-100 h-screen flex bg-gradient-to-b dark:from-gray-700 dark:to-gray-900"
>
	<div
		data-aos="slide-down"
		data-aos-delay="700"
		data-aos-duration="700"
		class="absolute top-0 right-0 h-1/2 w-full md:w-1/3 md:h-full moving-gradient-1"
	/>

	<section data-aos="fade-in" data-aos-delay="600" class="m-auto pt-5 relative grow max-w-5xl">
		<div class="bg-white dark:bg-gray-900 px-5 py-10 lg:py-14 lg:px-10 shadow-2xl">
			<div
				data-aos="flip-up"
				data-aos-delay="600"
				data-aos-duration="700"
				class="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-6"
			/>
			<h1
				class="mb-3 md:mb-6 font-mono font-black text-2xl md:text-3xl lg:text-5xl text-gray-700 dark:text-white"
			>
				<TextReveal delay={800} once text={$welcomeMessage} />
			</h1>
			<p class="text-lg md:text-xl lg:text-xl mb-8 font-bold text-gray-500 dark:text-gray-400 ml-1">
				<TextReveal
					delay={1000}
					once
					text="I design and build turnkey solutions for businesses. Welcome to my website."
				/>
			</p>

			<div
				data-aos="fade-left"
				data-aos-delay="1200"
				data-aos-duration="700"
				class="text-sm text-gray-700 font-semibold font-mono"
			>
				<a
					href="/resume"
					data-aos="zoom-in"
					data-aos-delay="700"
					class="transition-colors px-4 py-1 mr-3 lg:ml-1 inline-block bg-green-200 shadow-green-300/20 shadow-lg border rounded-sm border-green-400 hover:bg-green-300"
					data-aos-duration="700">View Resume</a
				>
				<a
					href="#contact"
					class="transition-colors px-4 py-1 inline-block bg-blue-200 shadow-blue-300/20 shadow-lg hover:bg-blue-300 rounded-sm border border-blue-400"
					>Let's talk</a
				>
			</div>
		</div>
	</section>

	<div
		data-aos="slide-up"
		data-aos-delay="1500"
		data-aos-duration="700"
		class="hidden text-xl absolute lg:flex flex-col gap-4 items-center w-4 left-14 bottom-0 text-center text-gray-700 dark:text-gray-50"
	>
		{#each resume.basics.profiles as profile}
			<a
				title={profile.meta.buttonLabel}
				aria-label={profile.meta.buttonLabel}
				href={profile.url}
				target="_blank"
				class="block"
			>
				<FontAwesomeIcon icon={networkTypes[profile.network]} /></a
			>
		{/each}
		<a
			title={resume.basics.meta.email.text}
			aria-label={resume.basics.meta.email.text}
			href={resume.basics.meta.email.link}
			target="_blank"
			class="block"
		>
			<FontAwesomeIcon icon={faEnvelope} /></a
		>

		<div class="shadow-xl w-4 h-28 bg-gray-700 dark:bg-gray-50" />
	</div>

	<button
		title="Go to about me"
		aria-label="Go to about me"
		data-aos="fade-down"
		data-aos-delay="1500"
		data-aos-duration="700"
		on:click={() => document.getElementById('about').scrollIntoView()}
		class="group text-xl lg:text-3xl py-5 text-gray-700 dark:text-white absolute w-14 mx-auto text-center bottom-20 right-0 left-0"
	>
		<FontAwesomeIcon icon={faAngleDown} class="hover-vertical group-hover:pause" />
	</button>
</section>
