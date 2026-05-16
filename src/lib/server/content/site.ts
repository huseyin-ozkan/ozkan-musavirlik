import { sanityClient } from '$lib/server/sanity/client'
import type { HomeContent } from './types'

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

export async function getHomeContent(): Promise<HomeContent> {
	return sanityClient.fetch<HomeContent>(`{
		"hero": *[_type == "hero"][0]{
			heading,
			subheading,
			services
		},
		"about": *[_type == "about"][0],
		"staff": *[_type == "staff"]{
			name,
			title,
			description,
			"image": image.asset->url
		},
		"branches": *[_type == "branch"]
	}`)
}
