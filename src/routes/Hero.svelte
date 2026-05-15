<script lang="ts">
	// import heroImage from '$lib/assets/hero-image.webp'
	// import heroImageMobile from '$lib/assets/hero-image-mobile.webp'

	interface Props {
		content: Content.Hero
	}

	let { content }: Props = $props()
</script>

<section>
	<div class="content">
		<h1>{content.heading}</h1>
		<p>
			{content.subheading}
		</p>
	</div>
</section>

<style lang="scss">
	@mixin breakpoint() {
		@include md() {
			@content;
		}
	}

	section {
		--heading-color: var(--color-neutral);
		--heading-size: clamp(56px, 7vw, 120px);
		--subheading-size: 20px;

		--gap: calc(var(--heading-size) * 2);
		--padding-t: clamp(80px, 10vw, 250px);

		--image-cover-color: var(--color-base-100);

		display: flex;
		flex-direction: column;
		background-image: url('$lib/assets/hero-image-mobile.webp');
		background-size: contain;
		background-repeat: no-repeat;
		padding-top: var(--padding-t);

		@include breakpoint() {
			background-image: url('$lib/assets/hero-image.webp');
			flex-direction: row;
			align-items: center;
			gap: var(--gap);
			padding-right: 0;
		}
	}

	.content {
		margin: 1em 0;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.content > h1 {
		font-family: var(--font-display);
		font-weight: 500;
		line-height: 95%;
		letter-spacing: 0;
		font-size: var(--heading-size);
		color: transparent;

		background: linear-gradient(45deg, var(--color-neutral), var(--color-neutral-vivid));
		background-clip: text;

		padding-bottom: 0.1em;
		margin-bottom: 0.5em;

		@include enter-in(0ms);
	}

	.content > p {
		@include paragraph-1();
		font-size: var(--subheading-size);
		line-height: 1.4;
		max-width: 40em;

		@include enter-in($enter-delay-subheading);
	}

	.image-container {
		display: flex;

		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		aspect-ratio: 410/150;

		@include breakpoint() {
			aspect-ratio: 1728/250;
		}
	}

	.image-container img {
		position: relative;
		height: 100%;
		width: 100%;
	}

	// .image-cover {
	// 	--gradient-radial: radial-gradient(
	// 		ellipse at center,
	// 		transparent 50%,
	// 		var(--image-cover-color) 90%
	// 	);

	// 	--gradient-left: linear-gradient(to right, var(--image-cover-color) 0%, transparent 20%);

	// 	--gradient-right: linear-gradient(to right, transparent 80%, var(--image-cover-color) 100%);

	// 	--gradient-vertical: linear-gradient(
	// 		to bottom,
	// 		var(--image-cover-color) 0%,
	// 		transparent 20%,
	// 		transparent 80%,
	// 		var(--image-cover-color) 100%
	// 	);

	// 	position: absolute;
	// 	inset: 0;

	// 	background:
	// 		var(--gradient-radial), var(--gradient-left), var(--gradient-right), var(--gradient-vertical);

	// 	// @include breakpoint() {
	// 	// 	background: var(--gradient-radial), var(--gradient-left);
	// 	// }
	// }
</style>
