export async function load({ params, fetch }) {
	const data = await fetch('./api/posts').then((res) => res.json())

	const posts: Post[] = data.posts
	console.log('load page: ', posts)

	if (data)
		return {
			posts
		}

	return {
		status: 500,
		body: new Error('Internal Server Error')
	}
}
