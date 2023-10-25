import { client } from '$lib/config/sanity'

export const posts = {
	// TODO make these usable in the code and remove api endpoints

	getAllPreviews: async () => {
		const response: PostPreview &
			{
				body: string
				summary?: string
			}[] = await client.fetch(
			`// groq
    *[_type == "post"]{
    "id": _id,
    "slug": slug.current,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt,
    title,
    summary,
    body
  }`
		)

		const posts: PostPreview[] = response.map(
			(post): PostPreview =>
				({
					...post,
					body: undefined,
					// TODO remove markdown stuff and links when getting from body
					summary: post?.summary ?? post.body.slice(0, 400)
				} as unknown as PostPreview)
		)

		return posts
	},

	getOne: async (slug: string) => {
		const post: Post = await client.fetch(`// groq
      *[_type == "post" && slug.current == "${slug}"]{
      "id": _id,
      "slug": slug.current,
      "createdAt": _createdAt,
      "updatedAt": _updatedAt,
      title,
      summary,
      body, // TODO format markdown to html
      "mainImage": mainImage.asset->url,
  }`)

		return post
	}
}

export const getHero = async () => {
	const hero: Content.Hero[] = await client.fetch(`// groq 
  *[_type == "hero"]{
    heading,
    subheading,
    services
  }`)

	return hero[0]
}

export const getAbout = async () => {
	const about: Content.About[] = await client.fetch(`*[_type == "about"]`)

	return about[0]
}

export const getStaff = async () => {
	const staff: Content.Staff[] = await client.fetch(
		`*[_type == "staff"]{
      name,
      title,
      description,
      "image": image.asset->url
    }`
	)

	return staff
}

export const getBranches = async () => {
	const branches: Content.Branch[] = await client.fetch<Content.Branch[]>(`*[_type == "branch"]`)

	return branches
}
