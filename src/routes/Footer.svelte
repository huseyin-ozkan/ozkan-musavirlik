<script lang="ts">
	import { ROUTES, NAV_ROUTES } from '$lib/config/routes'

	const notice =
		'Sitemizdeki bilgiler kullanıcılara yol gösterici nitelikte ve genel bilgi vermek amacını taşımaktadır. Tarafımızdan yazılı görüş alınmadan sitede yer alan bilgilerden ya da yayınlanan mali açıklamalarda yer alan görüşlerden hareketle yapılan uygulamalardan şirketimiz sorumluluk kabul etmez.'
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
		--footer-bg-color: var(--color-primary);
		--notice-bg-color: var(--color-bg-dark);
		--notice-text-color: #7080b2;

		--notice-font-size: 0.85rem;
		--logo-font-size: clamp(1rem, 1.5vw, 1.2rem);
		--nav-item-size: 1rem;

		--gap: 1.5rem;

		background-color: var(--footer-bg-color);
	}

	footer > .notice {
		@include section;

		--pv: calc(var(--notice-font-size) * 1.3);

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
			max-width: 70em;
		}
	}

	footer > .content {
		@include section;

		--pv: 20px;

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: column;
		flex-wrap: nowrap;
		gap: var(--gap);

		padding-top: var(--pv);
		padding-bottom: var(--pv);

		color: var(--color-text-white);

		@include breakpoint() {
			flex-direction: row;
		}
	}

	.logo {
		color: var(--color-text-white);
		font-size: var(--logo-font-size);
		font-weight: 500;
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

		font-weight: 700;
		color: var(--color-text-black);
		font-size: var(--nav-item-size);

		padding: 0.25em 2em;

		color: var(--color-text-white);
		white-space: nowrap;

		padding: 0.25em 0.75em;
	}
</style>
