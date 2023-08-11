<script lang="ts">
	export let data: {
		post: Post
	}

	const { title, body } = data.post

	console.log(body)
</script>

<h1>{title}</h1>

{@html body}
