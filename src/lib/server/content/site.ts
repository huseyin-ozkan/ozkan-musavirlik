import { sanityClient } from '$lib/server/sanity/client'

export async function getHero(): Promise<Content.Hero> {
	const hero = await sanityClient.fetch<Content.Hero[]>(`// groq
  *[_type == "hero"]{
    heading,
    subheading,
    services
  }`)
	return hero[0]
}

export async function getAbout(): Promise<Content.About> {
	const about = await sanityClient.fetch<Content.About[]>(`*[_type == "about"]`)
	return about[0]
}

export async function getStaff(): Promise<Content.Staff[]> {
	return sanityClient.fetch<Content.Staff[]>(
		`*[_type == "staff"]{
      name,
      title,
      description,
      "image": image.asset->url
    }`
	)
}

export async function getBranches(): Promise<Content.Branch[]> {
	return sanityClient.fetch<Content.Branch[]>(`*[_type == "branch"]`)
}
