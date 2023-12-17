<script lang="ts">
	import { ROUTES, NAV_ROUTES } from '$lib/config/routes'

	const notice =
		'Sitemizdeki bilgiler ziyaretçilere yol göstermek ve genel bilgi vermek amacını taşımaktadır. Tarafımızdan yazılı görüş alınmadan sitede yer alan bilgilerden ya da yayınlanan açıklamalarda yer alan görüşlerden hareketle yapılan uygulamalardan şirketimiz sorumluluk kabul etmez.'
</script>

<footer>
	{#if notice}
		<div class="notice">
			<p>{notice}</p>
		</div>
	{/if}

	<div class="content">
		<a href={ROUTES.home.path} title={ROUTES.home.title} class="logo">
			© 2023 Özkan Mali Müşavirlik
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
</footer>

<style lang="scss">
	@mixin breakpoint() {
		@include lg() {
			@content;
		}
	}

	footer {
		--footer-bg-color: var(--color-neutral);
		--notice-bg-color: var(--color-base-300);
		--notice-text-color: var(--color-neutral-pale);

		--notice-font-size: 12px;
		--logo-font-size: 1rem;
		--nav-item-size: 1rem;

		--gap: 1.5rem;

		background-color: var(--footer-bg-color);
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
			font-size: var(--notice-font-size);
			text-align: center;
			color: var(--notice-text-color);
			font-weight: 500;
			max-width: 1000px;
		}
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

		color: var(--color-base-100);

		@include breakpoint() {
			flex-direction: row;
		}
	}

	.logo {
		color: var(--color-base-100);
		font-size: var(--logo-font-size);
		font-weight: 500;
		font-family: 'Zilla Slab';
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
		@include hover();

		font-weight: 600;
		color: var(--color-neutral);
		font-size: var(--nav-item-size);
		font-family: 'Zilla Slab';

		padding: 0.25em 2em;

		color: var(--color-base-100);
		white-space: nowrap;

		padding: 0.25em 0.75em;
	}
</style>
