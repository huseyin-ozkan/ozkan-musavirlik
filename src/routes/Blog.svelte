<script lang="ts">
	import 'swiper/css'
	import 'swiper/css/autoplay'
	import 'swiper/css/pagination'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	import PostPreview from '$lib/components/PostPreview.svelte'

	export let posts: Post[]

	$: postPages = posts
		.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
		.reduce((prev, cur) => {
			// paginate to 6 posts per page
			if (prev.length === 0 || prev[prev.length - 1].length === 6) prev.push([])

			prev[prev.length - 1].push(cur)

			return prev
		}, [] as any[][])
</script>

<section id="blog">
	<div class="blog-header">
		<div class="title">
			<h1>Blog</h1>
			<p>
				Yönetmelik değişiklikleri, yeni yasalar gibi konularla alaklı yazılarımızı
				inceleyebilirsiniz
			</p>
		</div>

		<div class="categories">
			<!-- TODO -->
		</div>
	</div>

	<div class="posts">
		<Swiper
			spaceBetween={10}
			slidesPerView={1}
			modules={[Pagination, Autoplay]}
			pagination={{ clickable: true, type: 'bullets' }}
		>
			{#each postPages as page}
				<SwiperSlide>
					<div class="page">
						{#each page as post}
							<PostPreview {post} />
						{/each}
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	</div>

	<div class="mobile-posts">
		{#each postPages[0] as post}
			<PostPreview {post} />
		{/each}
	</div>
</section>

<style lang="scss">
	@mixin breakpoint() {
		@include md {
			@content;
		}
	}
	section {
		--section-bg: #fff;
		--posts-bullet: #9db8ff;

		--section-pv: clamp(20px, 5vw, 100px);
		--column-gap: 50px;
		--row-gap: 40px;

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;

		gap: 3em;

		padding-top: var(--section-pv);
		padding-bottom: calc(var(--section-pv) / 2); // other half is coming from posts gap

		background-color: var(--section-bg);
		border-top: var(--color-base-200) 1px solid;
		border-bottom: var(--color-base-200) 1px solid;

		@include lg {
			flex-direction: row;
			gap: 5vw;
		}
	}

	.blog-header {
		@include lg {
			width: 20vw;
			max-width: 300px;
		}

		.title > h1 {
			@include section-title;
		}
		.title > p {
			@include paragraph-1;
		}
	}

	// Mobile view
	.mobile-posts {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--row-gap);

		@include breakpoint() {
			display: none;
		}
	}

	// Pagination on desktop
	.posts {
		display: none;

		@include breakpoint() {
			display: block;
			width: 50vw;
			flex-grow: 1;
		}

		// Swiper slide
		:global(.swiper-slide) {
			margin-bottom: calc(var(--section-pv) / 2 + 30px);
			width: 100%;
			height: 100%;
		}

		.page {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

			column-gap: var(--column-gap);
			row-gap: var(--row-gap);
		}

		// Pagination bullets
		:global(.swiper-posts-bullet) {
			width: 1rem;
			height: 1rem;
			background-color: var(--posts-bullet);
			opacity: 0.3;
		}
		:global(.swiper-posts-bullet-active) {
			opacity: 1;
		}
	}
</style>
