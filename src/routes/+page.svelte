<script lang="ts">
	import Hero from './Hero.svelte'
	import Blog from './Blog.svelte'
	import About from './About.svelte'
	import Staff from './Staff.svelte'
	import Contact from './Contact.svelte'

	export let data: {
		posts: Post[]
	}
</script>

<Hero />

{#if data.posts}
	<Blog posts={data.posts} />
{/if}
<About />
<!-- <Staff /> -->
<Contact />
