<script lang="ts">
	import dayjs from 'dayjs'
	import 'dayjs/locale/tr'

	// <!-- TODO move this dayjs config to initialization
	dayjs.locale('tr')

	import '$lib/styles/main.css'
	import '$lib/styles/app.scss'

	// SECTIONS
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />
<main>
	{@render children?.()}
</main>
<Footer />

<style lang="scss" global>
	main > :global(section) {
		@include section;
	}
</style>
