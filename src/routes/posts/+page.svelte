<script lang="ts">
	import { page } from '$app/state'
	import { isCategory, type CategoryPostCount } from '$lib/common/categories'
	import { BASE_URL, DEFAULT_OG_IMAGE, SITE_NAME } from '$lib/constants'
	import { getAbsoluteUrl } from '$lib/utils'
	import Announcements from '$lib/components/Announcements.svelte'
	import PostCategoryFilter from '$lib/components/PostCategoryFilter.svelte'
	import PostPreviewCard from '$lib/components/PostPreview.svelte'
	import Contact from '../Contact.svelte'

	interface Props {
		data: {
			postPreviews: PostPreview[]
			categoryPostCounts: CategoryPostCount[]
			branches: Content.Branch[]
			announcements: Announcement[]
		}
	}

	let { data }: Props = $props()

	const blogDescription =
		'Yönetmelik değişiklikleri, yeni yasalar gibi konularla alaklı yazılarımızı inceleyebilirsiniz.'
	const pageTitle = `Blog | ${SITE_NAME}`
	const ogImage = getAbsoluteUrl(DEFAULT_OG_IMAGE)

	const canonicalUrl = $derived.by(() => {
		const url = new URL(`${BASE_URL}/posts`)
		const category = page.url.searchParams.get('category')
		if (category && isCategory(category)) {
			url.searchParams.set('category', category)
		}
		return url.toString()
	})

	let sortedPostPreviews = $derived(
		[...data.postPreviews].sort(
			(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)
	)
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={blogDescription} />
	<meta name="robots" content="max-image-preview:large" />
	<link rel="canonical" href={canonicalUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={blogDescription} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<section id="blog">
	<div class="blog-header">
		<div class="title">
			<h1>Blog</h1>
			<p>
				Yönetmelik değişiklikleri, yeni yasalar gibi konularla alaklı yazılarımızı
				inceleyebilirsiniz
			</p>
		</div>

		<PostCategoryFilter categoryPostCounts={data.categoryPostCounts} />
	</div>

	<div class="content">
		<ul class="posts">
			{#each sortedPostPreviews as post (post.id)}
				<li>
					<PostPreviewCard {post} />
				</li>
			{/each}
		</ul>

		<Announcements announcements={data.announcements} />
	</div>
</section>

<Contact branches={data.branches} />

<!-- TODO fix responsive post listing issue on middle size screen -->
<style lang="scss">
	section {
		--section-bg: var(--color-base-100);
		--section-pv: clamp(60px, 15vh, 200px);

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		min-height: 100svh;

		gap: 3em;

		padding-top: var(--section-pv);
		padding-bottom: var(--section-pv);

		background-color: var(--section-bg);
		border-top: var(--color-base-200) 1px solid;
		border-bottom: var(--color-base-200) 1px solid;

		@include xl {
			flex-direction: row;
			gap: 5vw;
		}
	}

	.blog-header {
		display: flex;
		flex-direction: column;

		@include xl {
			width: 20vw;
			max-width: 300px;
		}

		h1 {
			@include title-1;
			margin-bottom: 0.35em;
		}
		p {
			@include paragraph-2;
			color: var(--color-neutral-pale);
			margin-bottom: 3em;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 48px;
		width: 100%;

		@include md {
			flex-direction: row;
			align-items: start;
		}
	}

	.posts {
		flex: 1 1 300px;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		width: 100%;
		max-width: 800px;
		margin: 0;
		padding: 0;
		list-style: none;

		li {
			min-width: 0;
		}
	}
</style>
