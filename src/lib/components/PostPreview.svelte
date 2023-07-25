<script lang="ts">
	export let post: Post
</script>

<a href="/posts/{post.slug}" title="Devamını oku">
	<article>
		<!-- TODO format to Turkish locale DD MMMM YYYY -->
		<span class="date">
			{post.createdAt}
		</span>
		<h1>{post.title}</h1>
		<p>
			{post.body.substring(0, 320)}...
		</p>
	</article>
</a>

<style lang="scss">
	article {
		--color-date: #6a93ff;
		--color-p: #7988bb;

		--h1-font-size: clamp(1.2rem, 1.5vw, 1.4rem);
		--date-font-size: clamp(0.7rem, 1vw, 0.9rem);
		--p-font-size: clamp(0.85rem, 1.2vw, 1rem);

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

		width: 100%;
		height: 100%;
	}

	a {
		text-decoration: none;
	}

	// underline on hover
	a:hover {
		text-decoration: underline;
	}

	.date {
		font-size: var(--date-font-size);
		font-weight: 700;
		color: var(--color-date);
		margin-bottom: 0.5em;
	}

	h1 {
		font-size: var(--h1-font-size);
		font-weight: 600;
		font-family: Ubuntu, Mulish, sans-serif;
		margin-bottom: 1em;
	}

	p {
		font-size: var(--p-font-size);
		font-weight: 400;
		color: var(--color-p);
		font-family: Ubuntu, Mulish, sans-serif;
	}
</style>
