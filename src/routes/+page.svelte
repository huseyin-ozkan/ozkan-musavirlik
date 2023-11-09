<script lang="ts">
	import Hero from './Hero.svelte'
	import Blog from './Blog.svelte'
	import About from './About.svelte'
	import Staff from './Staff.svelte'
	import Contact from './Contact.svelte'
	import Services from './Services.svelte'

	export let data: {
		posts: Post[]
		hero: Content.Hero
		about: Content.About
		staff: Content.Staff[]
		branches: Content.Branch[]
	}
</script>

<Hero content={data.hero} />
<Services content={data.hero} />

{#if data.posts}
	<Blog posts={data.posts} />
{/if}
<About content={data.about} />
<Staff staff={data.staff} />
<Contact branches={data.branches} />
