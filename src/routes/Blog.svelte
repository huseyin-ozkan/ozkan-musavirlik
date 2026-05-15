<script lang="ts">
	import { page } from '$app/state'
	import { isCategory, type CategoryPostCount } from '$lib/common/categories'
	import Announcements from '$lib/components/Announcements.svelte'
	import PostCategoryFilter from '$lib/components/PostCategoryFilter.svelte'
	import PostPreviewCard from '$lib/components/PostPreview.svelte'

	interface Props {
		postPreviews: PostPreview[]
		/** Total posts in CMS; used with limited `postPreviews` to show “see all”. */
		postCount: number
		categoryPostCounts: CategoryPostCount[]
		announcements: Announcement[]
	}

	let data: Props = $props()

	let displayPostPreviews = $derived(
		[...data.postPreviews].sort(
			(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)
	)

	let showSeeAllBlog = $derived(data.postCount > 4)

	const seeAllBlogHref = $derived.by(() => {
		const category = page.url.searchParams.get('category')
		return category && isCategory(category) ? `/blog?category=${category}` : '/blog'
	})
</script>

<section id="blog">
	<div class="blog-header">
		<h1>Blog</h1>
		<p>
			Yönetmelik değişiklikleri, yeni yasalar gibi konularla alaklı yazılarımızı inceleyebilirsiniz
		</p>

		<PostCategoryFilter categoryPostCounts={data.categoryPostCounts} />
	</div>

	<div class="content">
		<div class="posts">
			{#each displayPostPreviews as post}
				<PostPreviewCard {post} />
			{/each}

			{#if showSeeAllBlog}
				<a href={seeAllBlogHref} class="see-all-link" title="Blog yazılarının hepsine göz at">
					Hepsini gör ({data.postCount})
				</a>
			{/if}
		</div>

		<Announcements announcements={data.announcements} />
	</div>
</section>

<!-- TODO fix responsive post listing issue on middle size screen -->
<style lang="scss">
	section {
		--section-bg: var(--color-base-100);
		--section-pv: clamp(20px, 5vh, 100px);

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

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
		// background-color: red;

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
	}

	.see-all-link {
		@include subtitle-2();
		color: var(--color-neutral-vivid);
		&:hover {
			text-decoration: underline;
		}
	}
</style>
