<script lang="ts">
	import { SITE_NAME } from '$lib/constants'
</script>

<svelte:head>
	<title>Yazı Bulunamadı | {SITE_NAME}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="error">
	<h1>404</h1>
	<h2>Yazı Bulunamadı</h2>
	<p>
		Aradığınız blog yazısı bulunamadı. Yazı silinmiş veya taşınmış olabilir.
	</p>
	<div class="actions">
		<a class="btn-primary-sm" href="/posts">Tüm Yazılar</a>
		<a class="btn-shadow-sm" href="/">Ana Sayfa</a>
	</div>
</section>

<style lang="scss">
	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		padding: 2rem;
		text-align: center;
		gap: 1rem;

		h1 {
			font-size: clamp(3rem, 10vw, 5rem);
			font-weight: 700;
			line-height: 1;
		}

		h2 {
			@include title-2;
		}

		p {
			@include paragraph-2;
			color: var(--color-neutral-pale);
			max-width: 32rem;
			margin-bottom: 0.5rem;
		}

		.actions {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
			justify-content: center;
		}
	}
</style>
