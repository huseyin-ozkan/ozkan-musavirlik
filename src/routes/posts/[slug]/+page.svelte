<script lang="ts">
	import dayjs from 'dayjs'
	import Markdown from '$lib/components/Markdown.svelte'

	interface Props {
		data: {
			post: Post
		}
	}

	let { data }: Props = $props()

	const { title, body, createdAt } = data.post
</script>

<svelte:head>
	<title>{title} | Özkan Mali Müşavirlik</title>
</svelte:head>

<div class="post-container">
	<section class="post">
		<div class="post-column">
			<article class="post-details">
				<h1>{title}</h1>

				<time datetime={dayjs(createdAt).format('D MMMM YYYY')}
					>{dayjs(createdAt).format('D MMMM YYYY - dddd')}</time
				>
			</article>

			<article class="post-body">
				<Markdown content={body} />
			</article>
		</div>
	</section>

	<!-- TODO other posts section -->
</div>

<style lang="scss">
	@mixin breakpoint() {
		@include md() {
			@content;
		}
	}

	.post-container {
		--padding-t: clamp(80px, 12.5vw, 300px);

		display: flex;
		flex-direction: column;
		align-items: center;

		background-image: url('$lib/assets/blog-image-mobile.webp');
		background-size: contain;
		background-repeat: no-repeat;

		padding-top: var(--padding-t);

		@include breakpoint() {
			background-image: url('$lib/assets/blog-image.webp');
		}
	}

	section.post {
		@include section;

		padding-top: 80px;
		padding-bottom: 160px;
		width: 100%;

		h1 {
			@include title-1;
			text-align: start;
			text-transform: capitalize;
			line-height: 1.1;
			margin-bottom: 0.35em;
		}

		.post-details {
			border-bottom: 1px solid var(--color-base-400);
			padding-bottom: 1.25rem;

			time {
				display: block;
				margin-top: 0.5em;
				color: var(--color-neutral-pale);
				font-weight: 400;
				font-size: var(--type-subtitle-size);
				line-height: var(--type-subtitle-line-height);
				letter-spacing: var(--type-subtitle-tracking);
			}
		}

		.post-body {
			min-width: 0;
		}
	}

	/* Figma 320:410 — article column: 904px max width, 64px gap title block → body */
	.post-column {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 64px;
		width: 100%;
		max-width: 904px;
	}
</style>
