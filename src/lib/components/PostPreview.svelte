<script lang="ts">
	import dayjs from 'dayjs'

	interface Props {
		post: PostPreview
	}

	let { post }: Props = $props()
</script>

<a href="/posts/{post.slug}" title="Devamını oku">
	<article>
		<div class="content">
			<h1 title={post.title}>{post.title}</h1>

			<p>
				{post.summary}
			</p>
		</div>

		<footer>
			<span class="date">
				{dayjs(post.createdAt).format('D MMMM YYYY')}
			</span>
		</footer>
	</article>
</a>

<style lang="scss">
	@mixin breakpoint() {
		@include lg {
			@content;
		}
	}

	a {
		max-width: 100%;

		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

	article {
		--color-p: var(--color-neutral-pale);

		--h1-font-size: 1.15rem;
		--date-font-size: 0.8rem;
		--p-font-size: 0.9rem;

		display: flex;
		flex-direction: column-reverse;
		align-items: start;
		justify-content: start;

		gap: 0.5rem;

		max-width: 100%;

		@include breakpoint() {
			flex-direction: row;
			gap: 1rem;
		}
	}

	.content {
		flex: 1;
		width: 100%;
		min-width: 0;
	}

	h1 {
		@include title-5();
		margin-bottom: 0.65em;

		// cut the text after 2 lines
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	p {
		@include subtitle();
		color: var(--color-p);

		// cut the text after 3 lines
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	footer {
		width: 100%;
		flex-shrink: 0;
		display: flex;

		@include breakpoint {
			width: 7rem;
			flex-direction: column;
			align-items: end;
		}
	}

	footer .date {
		@include subtitle-2();
		color: var(--color-neutral-vivid);
		opacity: 0.7;
	}
</style>
