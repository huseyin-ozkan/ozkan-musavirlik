<script lang="ts">
	import Hero from './Hero.svelte'
	import Blog from './Blog.svelte'
	import About from './About.svelte'
	import Staff from './Staff.svelte'
	import Contact from './Contact.svelte'

	export let data: {
		posts: Post[]
		hero: Content.Hero
		about: Content.About
		staff: Content.Staff[]
	}
</script>

<Hero content={data.hero} />

{#if data.posts}
	<Blog posts={data.posts} />
{/if}
<Contact />
<About content={data.about} />
<!-- <Staff staff={data.staff} /> -->
