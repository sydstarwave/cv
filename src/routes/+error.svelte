<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Sydney Panesar - Software Developer</title>
	<meta http-equiv="refresh" content="3; URL=/" />
</svelte:head>

<main class="bg-gray-100 dark:bg-gray-700 pt-32 pb-20 overflow-auto flex">
	<div class="m-auto">
		<main class="snap-y bg-white shadow-xl flex flex-col justify-between overflow-auto fpx-8 fpy-9">
			<section class="m-auto text-gray-500">
				<h1 class="font-bold text-gray-700">You are bring redirected... please wait.</h1>
				<p>Status: {$page.status}</p>
				<p>Message: {$page.error.message}</p>
				<br />
				<br />
				<a href="/">Click here if you are not redirected</a>
			</section>
		</main>
	</div>
</main>

<style lang="postcss">
	a {
		color: #2a2460;
		text-decoration: underline;
	}
	a:hover {
		text-decoration: none;
	}
	.snap-y {
		/* a4 size */
		width: 21cm;
		min-height: 50vh;

		box-sizing: border-box;
		padding: 1.27cm;
	}
</style>
