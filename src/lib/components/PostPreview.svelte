<script lang="ts">
	import dayjs from 'dayjs'

	export let post: Post

	// if there is no summary, get the body without html tags
	const summary = post?.summary || post.body.replace(/<[^>]*>?/gm, '')
</script>

<a href="/posts/{post.slug}" title="Devamını oku">
	<article>
		<span class="date">
			{dayjs(post.createdAt).format('D MMMM YYYY')}
		</span>
		<h1 title={post.title}>{post.title}</h1>
		<p>
			{summary}
		</p>
	</article>
</a>

<style lang="scss">
	article {
		--color-date: #6a93ff;
		--color-p: #7988bb;

		--h1-font-size: 1.15rem;
		--date-font-size: 0.8rem;
		--p-font-size: 0.9rem;

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

		width: 100%;
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
		font-weight: 800;
		line-height: 130%;
		margin-bottom: 0.2em;

		// cut the text after 2 lines
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	p {
		font-size: var(--p-font-size);
		font-weight: 400;
		color: var(--color-p);

		// cut the text after 6 lines
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
