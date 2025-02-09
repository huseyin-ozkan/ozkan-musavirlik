<script lang="ts">
	import Icon from '@iconify/svelte'
	import { ROUTES, NAV_ROUTES } from '$lib/config/routes'

	let mobileNavOpen = false
	let scroll: number
	$: scrolled = scroll > 50

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen
	}
</script>

<svelte:window bind:scrollY={scroll} />

<header class:scrolled>
	<a href={ROUTES.home.path} title={ROUTES.home.title} class="logo">
		<img src="/favicon.png" alt="" aria-hidden />
		<span>Özkan Mali Müşavirlik</span></a
	>

	<button
		class="mobile-nav-toggle"
		on:click={toggleMobileNav}
		on:keyup={toggleMobileNav}
		name="Navigasyon Menüsü"
		title="Navigasyon Menüsü"
	>
		<Icon icon="eva:menu-2-fill" />
	</button>

	<nav
		on:click|self={toggleMobileNav}
		on:keyup|self={toggleMobileNav}
		class:mobile-nav-open={mobileNavOpen}
	>
		<ul>
			{#each NAV_ROUTES as route (route.path)}
				<li>
					<a href={route.path} title={route.title} on:click={toggleMobileNav}>
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
		--bg-color: var(--color-base-100);
		--logo-color: var(--color-neutral);
		--nav-item-color: var(--color-neutral);

		--logo-size: clamp(1.05rem, 3vw, 1.7rem);
		--nav-toggle-size: clamp(1.2rem, calc(var(--logo-size) * 1.5), 1.8rem);
		--nav-item-size: clamp(1rem, calc(var(--logo-size) * 0.7), 1.5rem);

		@include section();

		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;

		position: sticky;
		inset: 0 0 auto 0;
		z-index: 999;

		background-color: var(--bg-color);

		width: 100%;

		transition: box-shadow 500ms;
	}

	header.scrolled {
		box-shadow: 0 0 48px rgba(#2b4499, 0.4);
		border-bottom: #e1e1e1 1px solid;
	}

	.logo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.logo > img {
		width: calc(var(--logo-size) * 1.2);
		margin-right: calc(var(--logo-size) * 0.5);
		border-radius: 3px;
	}

	.logo > span {
		display: block;

		font-weight: 800;
		color: var(--logo-color);
		font-size: var(--logo-size);
		font-family: 'Zilla Slab';
		white-space: nowrap;

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
		right: -20%;
		top: 0;
		bottom: 0;

		padding-top: 10vh;

		background-color: var(--color-base-300);

		transition: inherit;

		@include breakpoint() {
			flex-direction: row;
			position: static;
			right: unset;
			top: auto;
			bottom: auto;
			padding-top: 0;
			background-color: transparent;
		}
	}
	nav.mobile-nav-open > ul {
		right: 0;
	}

	nav > ul > li > a {
		@include hover();
		display: block;

		font-weight: 700;
		color: var(--nav-item-color);
		font-size: var(--nav-item-size);
		font-family: 'Zilla Slab';

		white-space: nowrap;

		padding: 0.25em 2em;

		text-align: end;

		transition: inherit;

		@include breakpoint() {
			padding: 0.25em 0.75em;
		}
	}
</style>
