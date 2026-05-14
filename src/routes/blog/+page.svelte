<script lang="ts">
	import PostPreview from '$lib/components/PostPreview.svelte'
	import Contact from '../Contact.svelte'

	interface Props {
		data: {
			posts: Post[]
			branches: Content.Branch[]
		}
	}

	let { data }: Props = $props()

	let posts = $derived(
		data.posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
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
	</div>
</section>

<Contact branches={data.branches} />

<!-- TODO fix responsive post listing issue on middle size screen -->
<style lang="scss">
	@mixin breakpoint() {
		@include md {
			@content;
		}
	}

	section {
		--section-bg: var(--color-base-100);
		--posts-bullet: var(--color-primary);

		--section-pv: clamp(60px, 15vh, 200px);
		--column-gap: 50px;
		--row-gap: 40px;

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
			@include section-title;
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
</style>
