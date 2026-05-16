<script lang="ts">
	import dayjs from 'dayjs'
	import Markdown from '$lib/components/Markdown.svelte'
	import { BASE_URL, DEFAULT_OG_IMAGE, SITE_LOGO, SITE_NAME } from '$lib/constants'
	import { formatISODate, getAbsoluteUrl } from '$lib/utils'
	import { buildPostImageJsonLd, postDescription } from '$lib/utils/seo'

	interface Props {
		data: {
			post: Post
		}
	}

	let { data }: Props = $props()

	const { post } = data
	const { title, body, createdAt, updatedAt, slug, mainImage } = post

	const description = postDescription(post)
	const pageUrl = `${BASE_URL}/posts/${slug}`
	const ogImage = mainImage ? getAbsoluteUrl(mainImage) : getAbsoluteUrl(DEFAULT_OG_IMAGE)
	const publishedAt = formatISODate(createdAt)
	const modifiedAt = formatISODate(updatedAt)

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: title,
		description,
		datePublished: publishedAt,
		dateModified: modifiedAt,
		image: buildPostImageJsonLd(post),
		publisher: {
			'@type': 'Organization',
			name: SITE_NAME,
			logo: {
				'@type': 'ImageObject',
				url: getAbsoluteUrl(SITE_LOGO)
			}
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': pageUrl
		}
	}
</script>

<svelte:head>
	<title>{title} | {SITE_NAME}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="max-image-preview:large" />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:type" content="article" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={title} />
	{#if !mainImage}
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}

	<meta property="article:published_time" content={publishedAt} />
	<meta property="article:modified_time" content={modifiedAt} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<div class="post-container">
	<div class="post-column">
		<article class="post">
			<header class="post-header">
				<h1>{title}</h1>
				<time datetime={publishedAt}>{dayjs(createdAt).format('D MMMM YYYY - dddd')}</time>
			</header>

			{#if mainImage}
				<figure class="post-hero">
					<img src={mainImage} alt={title} />
				</figure>
			{/if}

			<div class="post-content">
				<Markdown content={body} />
			</div>
		</article>
	</div>

	<!-- TODO other posts section -->
</div>

<style lang="scss">
	@mixin breakpoint() {
		@include md() {
			@content;
		}
	}

	.post-container {
		@include section;
		--padding-t: clamp(80px, 12.5vw, 300px);

		display: flex;
		flex-direction: column;
		align-items: start;

		background-image: url('$lib/assets/blog-image-mobile.webp');
		background-size: contain;
		background-repeat: no-repeat;

		padding-top: var(--padding-t);

		@include breakpoint() {
			background-image: url('$lib/assets/blog-image.webp');
		}
	}

	article.post {
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

		.post-header {
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

		.post-hero {
			margin: 0;
			width: 100%;

			img {
				display: block;
				width: 100%;
				height: auto;
				border-radius: 8px;
			}
		}

		.post-content {
			min-width: 0;
		}
	}

	.post-column {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 64px;
		width: 100%;
		max-width: 904px;
	}
</style>
