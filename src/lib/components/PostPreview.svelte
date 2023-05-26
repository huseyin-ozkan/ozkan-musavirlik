<script lang="ts">
	type Post = {
		id: number
		createdAt: Date
		updatedAt: Date

		title: string
		content: string
	}

	// <!-- TODO remove mock
	export const post: Post = {
		id: 1,
		createdAt: new Date(),
		updatedAt: new Date(),
		title: '509 Sıra No.lu Vergi Usul Kanunu Genel Tebliği’nde Değişiklik',
		content: `Elektronik belge uygulamalarının yaygınlaştırılması, mükelleflerin vergiye uyum maliyetlerinin
			azaltılması ve kayıt dışı ekonomi ile mücadeledeki etkinliğin artırılması amacıyla, 19/10/2019
			tarihli ve 30923 sayılı Resmî Gazete’de yayımlanan509 Sıra No.lu Vergi Usul Kanunu Genel
			Tebliğinde değişiklik yapılmak suretiyle`
	}
</script>

<a href="/posts/{post.id}" title="Devamını oku">
	<article>
		<!-- TODO format to Turkish locale DD MMMM YYYY -->
		<span class="date"> {post.createdAt.toLocaleDateString()} </span>
		<h1>{post.title}</h1>
		<p>
			{post.content}...
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
