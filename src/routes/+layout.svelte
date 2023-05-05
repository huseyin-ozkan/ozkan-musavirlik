<script lang="ts">
	import '$lib/styles/main.css';

	// SECTIONS
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style lang="scss" global>
	main > :global(section) {
		@include section;
	}
</style>
