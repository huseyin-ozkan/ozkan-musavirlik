<script lang="ts">
	import { ROUTES, NAV_ROUTES } from '$lib/config/routes'

	const notice =
		'Sitemizdeki bilgiler ziyaretçilere yol göstermek ve genel bilgi vermek amacını taşımaktadır. Tarafımızdan yazılı görüş alınmadan sitede yer alan bilgilerden ya da yayınlanan açıklamalarda yer alan görüşlerden hareketle yapılan uygulamalardan şirketimiz sorumluluk kabul etmez.'
</script>

<footer>
	<div class="content">
		<a href={'/'} title={'Ana Sayfa'} class="logo">
			<img src="/logo.svg" alt="Özkan Mali Müşavirlik" />
		</a>

		<nav>
			<ul>
				{#each NAV_ROUTES as route (route.path)}
					<li>
						<a href={route.path} title={route.title}>
							{route.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	{#if notice}
		<div class="notice">
			<p>{notice}</p>
		</div>
	{/if}
</footer>

<style lang="scss">
	@mixin breakpoint() {
		@include lg() {
			@content;
		}
	}

	footer {
		--logo-size: 80px;
		--nav-item-size: 1rem;

		--gap: 1.5rem;

		background-color: var(--color-base-300);

		display: flex;
		flex-direction: column;
		padding: clamp(20px, 10vh, 48px) 0;
		gap: 32px;
	}

	footer > .content {
		@include section;

		--pv: 12px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		flex-wrap: nowrap;
		gap: var(--gap);

		padding-top: var(--pv);
		padding-bottom: var(--pv);

		color: var(--color-neutral);

		@include breakpoint() {
			flex-direction: row;
		}
	}

	.logo > img {
		height: var(--logo-size);
		width: auto;
	}

	// nav

	nav {
		display: none;
		justify-content: flex-end;
		align-items: center;

		@include breakpoint() {
			display: flex;
		}
	}

	nav > ul {
		display: flex;
		align-items: stretch;
		justify-content: center;
	}

	nav > ul > li > a {
		font-weight: 600;
		color: var(--color-neutral-pale);
		font-size: var(--nav-item-size);

		padding: 0.25em 2em;

		white-space: nowrap;

		padding: 0.25em 0.75em;
	}

	footer > .notice {
		@include section;

		--pv: 10px;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: var(--notice-bg-color);
		padding-top: var(--pv);
		padding-bottom: var(--pv);

		p {
			@include subtitle-2;
			text-align: center;
			color: var(--notice-text-color);

			max-width: 1000px;
		}
	}
</style>
