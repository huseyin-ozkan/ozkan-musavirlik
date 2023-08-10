export async function load(event) {
	const { slug } = event.params

	const data = await event
		.fetch(`../api/posts/${slug}`)
		.then((res) => res.json().then((data) => data.data))

	return {
		post: data.post
	}
}
