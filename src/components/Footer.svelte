<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
	import resume from '$data/resume.json';
	import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
	import networkTypes from '$data/networkTypes.js';
</script>

<footer
	class="print:hidden main shadow-2xl py-32 z-50 bg-gray-50 dark:bg-gray-700 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
>
	<ul data-aos="fade-down" class="flex item-center justify-center gap-6 mb-8">
		{#each resume.basics.profiles as profile}
			<li class="m-0">
				<a
					title={profile.meta.buttonLabel}
					aria-label={profile.meta.buttonLabel}
					href={profile.url}
					target="_blank"
					class="nav-text p-1"
					rel="me"
				>
					<FontAwesomeIcon icon={networkTypes[profile.network]} size="lg" /></a
				>
			</li>
		{/each}
		<li class="m-0">
			<a
				id="email"
				title={resume.basics.meta.email.text}
				aria-label={resume.basics.meta.email.text}
				href={resume.basics.meta.email.link}
				target="_blank"
				class="nav-text p-1"
				rel="me"
			>
				<FontAwesomeIcon icon={faEnvelope} size="lg" /></a
			>
		</li>
	</ul>

	<div class="text-center dark:text-white">
		&copy; <time>2024</time> Sydney Panesar
	</div>
</footer>
