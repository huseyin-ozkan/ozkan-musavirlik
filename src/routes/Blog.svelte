<script lang="ts">
	import PostPreview from '$lib/components/PostPreview.svelte'

	interface Props {
		posts: Post[]
	}

	let data: Props = $props()

	let posts = $derived(
		data.posts
			.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
			.slice(0, 4)
	)
</script>

<section id="blog">
	<div class="blog-header">
		<div class="title">
			<h1>Blog</h1>
			<p>
				Yönetmelik değişiklikleri, yeni yasalar gibi konularla alaklı yazılarımızı
				inceleyebilirsiniz
			</p>
		</div>

		<div class="categories">
			<!-- TODO -->
		</div>
	</div>

	<div class="posts">
		{#each posts as post}
			<PostPreview {post} />
		{/each}

		{#if data.posts.length > 4}
			<a href="/blog" class="see-all-link" title="Blog yazılarının hepsine göz at">Hepsini gör</a>
		{/if}
	</div>
</section>

<!-- TODO fix responsive post listing issue on middle size screen -->
<style lang="scss">
	@mixin breakpoint() {
		@include md {
			@content;
		}
	}

	section {
		--section-bg: var(--color-base-100);
		--section-pv: clamp(20px, 5vw, 100px);

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

		gap: 3em;

		padding-top: var(--section-pv);
		padding-bottom: var(--section-pv); // other half is coming from posts gap

		background-color: var(--section-bg);
		border-top: var(--color-base-200) 1px solid;
		border-bottom: var(--color-base-200) 1px solid;

		@include lg {
			flex-direction: row;
			gap: 5vw;
		}
	}

	.blog-header {
		@include lg {
			width: 20vw;
			max-width: 300px;
		}

		.title > h1 {
			@include title-1;
		}
		.title > p {
			@include paragraph-1;
		}
	}

	// Pagination on desktop
	.posts {
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
