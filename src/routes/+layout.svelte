<script lang="ts">
	import dayjs from 'dayjs'
	import 'dayjs/locale/tr'

	// <!-- TODO move this dayjs config to initialization
	dayjs.locale('tr')

	import '$lib/styles/main.css'

	// SECTIONS
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'
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
