<script lang="ts">
	import type { CategoryPostCount } from '$lib/common/categories'
	import { BASE_URL, DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_LOGO, SITE_NAME } from '$lib/constants'
	import { getAbsoluteUrl } from '$lib/utils'
	import Hero from './Hero.svelte'
	import Blog from './Blog.svelte'
	import About from './About.svelte'
	import Contact from './Contact.svelte'
	import Services from './Services.svelte'

	interface Props {
		data: {
			postPreviews: PostPreview[]
			postCount: number
			categoryPostCounts: CategoryPostCount[]
			announcements: Announcement[]
			hero: Content.Hero
			about: Content.About
			staff: Content.Staff[]
			branches: Content.Branch[]
		}
	}

	let { data }: Props = $props()

	const pageUrl = BASE_URL
	const ogImage = getAbsoluteUrl(DEFAULT_OG_IMAGE)
	const primaryBranch = data.branches[0]

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${BASE_URL}/#website`,
				url: BASE_URL,
				name: SITE_NAME,
				description: SITE_DESCRIPTION,
				publisher: { '@id': `${BASE_URL}/#organization` },
				inLanguage: 'tr'
			},
			{
				'@type': 'AccountingService',
				'@id': `${BASE_URL}/#organization`,
				name: SITE_NAME,
				url: BASE_URL,
				description: SITE_DESCRIPTION,
				logo: getAbsoluteUrl(SITE_LOGO),
				...(primaryBranch && {
					telephone: primaryBranch.phones[0],
					email: primaryBranch.email,
					address: {
						'@type': 'PostalAddress',
						streetAddress: primaryBranch.address,
						addressLocality: 'Kayseri',
						addressCountry: 'TR'
					}
				})
			}
		]
	}
</script>

<svelte:head>
	<title>{SITE_NAME}</title>
	<meta name="description" content={SITE_DESCRIPTION} />
	<meta name="robots" content="max-image-preview:large" />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:type" content="website" />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:title" content={SITE_NAME} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<Hero content={data.hero} />
<Services content={data.hero} />

{#if data.postPreviews}
	<Blog
		postPreviews={data.postPreviews}
		postCount={data.postCount}
		categoryPostCounts={data.categoryPostCounts}
		announcements={data.announcements}
	/>
{/if}
<About content={data.about} />
<!-- <Staff staff={data.staff} /> -->
<Contact branches={data.branches} />
