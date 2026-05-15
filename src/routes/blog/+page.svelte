<script lang="ts">
	import Announcements from '$lib/components/Announcements.svelte'
	import PostPreviewCard from '$lib/components/PostPreview.svelte'
	import Contact from '../Contact.svelte'

	interface Props {
		data: {
			postPreviews: PostPreview[]
			branches: Content.Branch[]
			announcements: Announcement[]
		}
	}

	let { data }: Props = $props()

	let sortedPostPreviews = $derived(
		[...data.postPreviews].sort(
			(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)
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

	<div class="content">
		<div class="posts">
			{#each sortedPostPreviews as post}
				<PostPreviewCard {post} />
			{/each}
		</div>

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
		@include xl {
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
	}
</style>
