<script>
	import '$root/app.css';
	import Navbar from '$components/Navbar.svelte';
	import Footer from '$components/Footer.svelte';
	import { theme, light } from '$stores/theme.js';

	import { onMount } from 'svelte';
	import Aos from 'aos';

	onMount(() => {
		Aos.init({
			offset: 0
			// duration: 700,
		});
	});
</script>

<div class="flex flex-col" class:dark={$theme.toString() !== light}>
	<Navbar />
	<slot />
	<Footer />
</div>
