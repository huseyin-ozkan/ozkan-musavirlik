<script lang="ts">
	import heroImage from '$lib/assets/hero-image.webp'

	export let content: Content.Hero
</script>

<section>
	<div class="content">
		<h1>{content.heading}</h1>
		<p>
			{content.subheading}
		</p>
	</div>

	<div class="image-container">
		<img src={heroImage} alt="Accountant writing on the paper with pen." />
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
		--heading-size: clamp(2rem, 3vw, 4rem);
		--subheading-size: clamp(1.1rem, 0.5vw, 2rem);

		--gap: calc(var(--heading-size) * 2);

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

	.content {
		margin: 1em 0;
	}

	.content > h1 {
		font-family: Zilla Slab, Mulish, sans-serif;
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: 0.02ch;
		font-size: var(--heading-size);
		color: var(--heading-color);
		text-align: left;

		margin-bottom: 0.5em;
	}

	.content > p {
		@include paragraph-1();
		font-size: var(--subheading-size);
		max-width: 35em;
	}

	.image-container {
		display: flex;

		position: relative;
		width: 100%;
		height: 100%;

		@include breakpoint() {
			max-width: 50%;
		}
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
