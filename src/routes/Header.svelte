<script lang="ts">
	import Icon from '@iconify/svelte'
	import { ROUTES, NAV_ROUTES } from '$lib/config/routes'

	let mobileNavOpen = $state(false)
	let scroll: number = $state(0)
	let scrolled = $derived(scroll > 50)

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen
	}
</script>

<svelte:window bind:scrollY={scroll} />

<header class:scrolled>
	<a href={'/'} title="Ana Sayfa" class="logo">
		<img src="/logo-with-icon.svg" alt="Özkan Mali Müşavirlik" />
	</a>

	<button
		class="mobile-nav-toggle"
		onclick={toggleMobileNav}
		onkeyup={toggleMobileNav}
		name="Navigasyon Menüsü"
		title="Navigasyon Menüsü"
	>
		<Icon icon="eva:menu-2-fill" />
	</button>

	<nav onclick={toggleMobileNav} onkeyup={toggleMobileNav} class:mobile-nav-open={mobileNavOpen}>
		<ul>
			{#each NAV_ROUTES as route (route.path)}
				<li>
					<a
						href={route.path}
						title={route.title}
						onclick={toggleMobileNav}
						class:btn-primary-sm={route.isPrimary}
						class={route.isPrimary ? 'btn-primary-sm' : 'btn-shadow-sm'}
					>
						{route.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="scss">
	@mixin breakpoint() {
		@include lg() {
			@content;
		}
	}

	header {
		--bg-color: var(--color-base-200);
		--nav-item-color: var(--color-neutral);

		--logo-size: clamp(48px, 5vw, 72px);
		--nav-toggle-size: clamp(1.2rem, calc(var(--logo-size) * 1.5), 1.8rem);
		--nav-item-size: 1rem;

		@include section();

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;

		position: fixed;
		inset: 0 0 auto 0;
		z-index: 999;

		width: 100%;

		&:before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			pointer-events: none;

			opacity: 0;
			transition: all 500ms;

			background-image: linear-gradient(
				to bottom,
				var(--bg-color),
				color-mix(in srgb, var(--bg-color), transparent 0%) 70%,
				color-mix(in srgb, var(--bg-color), transparent 20%) 90%,

				transparent
			);
		}
	}

	header.scrolled:before {
		opacity: 1;
	}

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.logo > img {
		height: var(--logo-size);
		width: auto;
		padding: 0.66em 0;
	}

	.mobile-nav-toggle {
		display: flex;
		background: transparent;
		border: none;

		z-index: 999;

		@include breakpoint() {
			display: none;
		}
	}

	.mobile-nav-toggle :global(svg) {
		width: var(--nav-toggle-size);
		height: 100%;
	}

	nav {
		position: fixed;
		inset: 0;

		display: flex;
		justify-content: flex-end;
		align-items: center;

		background-color: rgba($color: #000000, $alpha: 0.4);

		opacity: 0;
		pointer-events: none;
		transition: 0.5s;

		&.mobile-nav-open {
			opacity: 1;
			pointer-events: all;
		}

		@include breakpoint() {
			position: static;
			opacity: 1;
			pointer-events: all;
			background-color: transparent;
			transition: none;
		}
	}

	nav > ul {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;

		position: inherit;
		right: -25%;
		top: 0;
		bottom: 0;
		width: 200px;

		padding-top: 10vh;
		padding-left: 20px;
		padding-right: 20px;

		background-color: var(--color-base-300);
		gap: 0.5rem;

		transition: inherit;

		pointer-events: none;

		@include breakpoint() {
			pointer-events: auto;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			position: static;
			right: unset;
			top: auto;
			bottom: auto;
			width: auto;

			padding: 0;

			background-color: transparent;
		}
	}

	nav.mobile-nav-open > ul {
		pointer-events: auto;
		right: 0;
	}
</style>
