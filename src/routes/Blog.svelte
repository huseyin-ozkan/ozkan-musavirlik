<script lang="ts">
	import Announcements from '$lib/components/Announcements.svelte'
	import PostPreview from '$lib/components/PostPreview.svelte'

	interface Props {
		posts: Post[]
		announcements: Announcement[]
	}

	let data: Props = $props()

	let posts = $derived(
		[...data.posts]
			.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
			.slice(0, 4)
	)
</script>

<section id="blog">
	<div class="blog-header">
		<h1>Blog</h1>
		<p>
			Yönetmelik değişiklikleri, yeni yasalar gibi konularla alaklı yazılarımızı inceleyebilirsiniz
		</p>
	</div>

	<div class="content">
		<div class="posts">
			{#each posts as post}
				<PostPreview {post} />
			{/each}

			{#if data.posts.length > 4}
				<a href="/blog" class="see-all-link" title="Blog yazılarının hepsine göz at">Hepsini gör</a>
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
		@include xl {
			width: 20vw;
			max-width: 300px;
		}

		h1 {
			@include title-1;
		}
		p {
			@include paragraph-1;
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
