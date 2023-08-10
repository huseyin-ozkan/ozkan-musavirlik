<script lang="ts">
	export let data: {
		post: Post
	}

	const { title, body } = data.post
</script>

<h1>{title}</h1>
{body}
