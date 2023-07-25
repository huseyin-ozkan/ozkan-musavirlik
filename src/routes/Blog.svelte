<script lang="ts">
	import 'swiper/css'
	import 'swiper/css/autoplay'
	import 'swiper/css/pagination'
	import { Swiper, SwiperSlide } from 'swiper/svelte'
	import { Pagination, Autoplay } from 'swiper'

	import PostPreview from '$lib/components/PostPreview.svelte'

	export let posts: Post[]

	$: postPages = posts.reduce((prev, cur) => {
		// paginate to 6 posts per page
		if (prev.length === 0 || prev[prev.length - 1].length === 6) prev.push([])

		prev[prev.length - 1].push(cur)

		return prev
	}, [] as any[][])
</script>

<section id="blog">
	<div class="pagination">
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
	<div class="mobile-view">
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
		--section-bg: var(--color-bg-medium);
		--pagination-bullet: #9db8ff;

		--section-pv: clamp(20px, 5vw, 100px);
		--section-border-radius: var(--section-pv);
		--column-gap: clamp(20px, 4vw, 65px);
		--row-gap: calc(var(--column-gap) * 0.7);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding-top: var(--section-pv);
		padding-bottom: calc(var(--section-pv) / 2); // other half is coming from pagination gap
		border-radius: var(--section-border-radius) 0 var(--section-border-radius) 0;

		background-color: var(--section-bg);
	}

	// Mobile view
	.mobile-view {
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
	.pagination {
		width: 100%;
		display: none;

		@include breakpoint() {
			display: block;
		}
	}

	// Swiper slide
	.pagination :global(.swiper-slide) {
		margin-bottom: calc(var(--section-pv) / 2 + 30px);
		width: 100%;
		height: 100%;
	}

	.page {
		--grid-columns: 1;
		--grid-rows: 6;

		@include md {
			--grid-columns: 2;
			--grid-rows: 3;
		}
		@include xl {
			--grid-columns: 3;
			--grid-rows: 2;
		}

		display: grid;
		grid-template-columns: repeat(var(--grid-columns), 1fr);
		grid-template-rows: repeat(var(--grid-rows), 1fr);
		column-gap: var(--column-gap);
		row-gap: var(--row-gap);
	}

	// Pagination bullets
	.pagination :global(.swiper-pagination-bullet) {
		width: 1rem;
		height: 1rem;
		background-color: var(--pagination-bullet);
		opacity: 0.3;
	}
	.pagination :global(.swiper-pagination-bullet-active) {
		opacity: 1;
	}
</style>
