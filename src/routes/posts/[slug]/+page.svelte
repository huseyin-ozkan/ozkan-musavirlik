<script lang="ts">
	import dayjs from 'dayjs'
	import Markdown from '$lib/components/Markdown.svelte'
	import booksAndNotebookImg from '$lib/assets/books-and-notebook.webp'

	export let data: {
		post: Post
	}

	const { title, body, mainImage, createdAt } = data.post

	// use the main image if there is one, otherwise use the default
	const poster = mainImage || booksAndNotebookImg
	console.log(body)
</script>

<svelte:head>
	<title>{title} | Özkan Mali Müşavirlik</title>
</svelte:head>

<div class="post-container">
	<img src={poster} alt="Poster" />

	<section class="post">
		<article class="post-details">
			<h1>{title.toLocaleLowerCase('tr')}</h1>

			<time datetime={dayjs(createdAt).format('D MMMM YYYY')}
				>{dayjs(createdAt).format('D MMMM YYYY - dddd')}</time
			>
		</article>

		<article class="post-body">
			<Markdown content={body} />
		</article>
	</section>

	<!-- TODO other posts section -->
</div>

<style lang="scss">
	.post-container {
		--main-heading-font-size: clamp(1.8rem, 4vw, 2.5rem);
		--post-max-width: 70rem;

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
			font-weight: 800;
			text-align: start;
			text-transform: capitalize;
			margin-bottom: 1em;
		}

		.post-details {
			time {
				color: var(--color-neutral-pale);
				font-weight: 400;
				font-size: 1em;
			}

			border-bottom: 1px solid #ddd;
			padding-bottom: 1em;
			margin-bottom: 1em;
		}

		.post-body {
			margin-top: $page-padding;
			margin-bottom: $page-padding;
		}
	}
</style>
