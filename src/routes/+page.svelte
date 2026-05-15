<script lang="ts">
	import type { CategoryPostCount } from '$lib/common/categories'
	import Hero from './Hero.svelte'
	import Blog from './Blog.svelte'
	import About from './About.svelte'
	import Staff from './Staff.svelte'
	import Contact from './Contact.svelte'
	import Services from './Services.svelte'

	interface Props {
		data: {
			postPreviews: PostPreview[]
			postCount: number
			categoryPostCounts: CategoryPostCount[]
			announcements: Announcement[]
			hero: Content.Hero
			about: Content.About
			staff: Content.Staff[]
			branches: Content.Branch[]
		}
	}

	let { data }: Props = $props()

	$inspect(data)
</script>

<Hero content={data.hero} />
<Services content={data.hero} />

{#if data.postPreviews}
	<Blog
		postPreviews={data.postPreviews}
		postCount={data.postCount}
		categoryPostCounts={data.categoryPostCounts}
		announcements={data.announcements}
	/>
{/if}
<About content={data.about} />
<!-- <Staff staff={data.staff} /> -->
<Contact branches={data.branches} />
