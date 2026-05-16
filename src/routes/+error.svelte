<script lang="ts">
	import { page } from '$app/state'
	import { SITE_NAME } from '$lib/constants'
</script>

<svelte:head>
	<title>Hata | {SITE_NAME}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="error">
	<h1>{page.status}</h1>
	<p>Aradığınız sayfa bulunamadı.</p>
	<a class="btn-primary-sm" href="/">Ana Sayfa</a>
	<!-- TODO fetch the normal size button component from figma and use it here -->
</section>

<style lang="scss">
	.error {
		--error-code-size: clamp(4rem, 30vw, 20rem);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		padding: 2rem;
		text-align: center;

		h1 {
			@include title-1;
			font-size: var(--error-code-size);
			margin-bottom: 0.25em;
		}

		p {
			@include title-2;
			color: var(--color-neutral-pale);
			max-width: 32rem;
			margin-bottom: 1em;
		}
	}
</style>
