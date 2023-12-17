<script lang="ts">
	export let content: Content.Hero
</script>

<section>
	<h1>{content.heading}</h1>
	<div class="image-container">
		<img src="/assets/hero-image.jpg" alt="" />
		<div class="image-cover" />
	</div>
</section>

<style lang="scss">
	@mixin breakpoint() {
		@include md() {
			@content;
		}
	}

	section {
		--heading-color: #32426d;
		--heading-size: clamp(2rem, 4vw, 4rem);

		--gap: var(--heading-size);

		--image-cover-color: var(--color-base-100);

		display: flex;
		flex-direction: column;

		@include breakpoint() {
			flex-direction: row;
			align-items: center;
			gap: var(--gap);
			padding-right: 0;
			height: 40vh;
		}
	}

	h1 {
		margin: 1em 0;

		font-family: Zilla Slab, Mulish, sans-serif;
		font-weight: 500;
		line-height: 1;
		font-size: var(--heading-size);
		color: var(--heading-color);
		text-align: left;

		@include breakpoint() {
			max-width: 50%;
		}
	}

	.image-container {
		display: flex;

		position: relative;
		width: 100%;
		height: 100%;
	}

	.image-container img {
		position: relative;
		height: 100%;
		width: 100%;
	}

	.image-cover {
		--gradient-radial: radial-gradient(
			ellipse at center,
			transparent 50%,
			var(--image-cover-color) 90%
		);

		--gradient-left: linear-gradient(to right, var(--image-cover-color) 0%, transparent 20%);

		--gradient-right: linear-gradient(to right, transparent 80%, var(--image-cover-color) 100%);

		--gradient-vertical: linear-gradient(
			to bottom,
			var(--image-cover-color) 0%,
			transparent 20%,
			transparent 80%,
			var(--image-cover-color) 100%
		);

		position: absolute;
		inset: 0;

		background: var(--gradient-radial), var(--gradient-left), var(--gradient-right),
			var(--gradient-vertical);

		// @include breakpoint() {
		// 	background: var(--gradient-radial), var(--gradient-left);
		// }
	}
</style>
