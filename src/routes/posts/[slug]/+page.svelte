<script lang="ts">
	import dayjs from 'dayjs'
	import Markdown from '$lib/components/Markdown.svelte'

	export let data: {
		post: Post
	}

	const { title, body, mainImage, createdAt } = data.post

	// use the main image if there is one, otherwise use the default
	const poster = mainImage || `/assets/books-and-notebook.png`
	console.log(body)
</script>

<div class="post-container">
	<img src={poster} alt="Poster" />

	<section class="post">
		<h1>{title.toLocaleLowerCase('tr')}</h1>

		<article class="post-details">
			<time datetime={dayjs(createdAt).format('D MMMM YYYY')}
				>{dayjs(createdAt).format('D MMMM YYYY - dddd')}</time
			>
		</article>

		<article class="post-body">
			<Markdown content={body} />
		</article>
	</section>
</div>

<style lang="scss">
	.post-container {
		--main-heading-font-size: clamp(1.5rem, 5vw, 3rem);
		--post-max-width: 100em;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		display: block;
		width: 100%;
		height: 25vh;
		margin-bottom: 5vw;

		// default image
		background-image: url('/assets/books-and-notebook.png');
		background-size: cover;
		background-position: center;
	}

	section {
		@include section;

		max-width: var(--post-max-width);

		h1 {
			font-size: var(--main-heading-font-size);
			font-family: Ubuntu;
			font-weight: 500;
			text-align: center;
			text-transform: capitalize;
			margin-bottom: 1em;
		}

		.post-details {
			time {
				color: var(--color-primary);
			}
		}

		.post-body {
			margin-top: $page-padding;
			margin-bottom: $page-padding;
		}
	}
</style>
