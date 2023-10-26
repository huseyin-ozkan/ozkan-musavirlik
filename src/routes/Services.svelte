<script lang="ts">
	import type { ComponentType } from 'svelte/internal'

	import accountingIcon from '$lib/assets/accounting-svgrepo-com 1.svelte'
	import consultingIcon from '$lib/assets/men-and-women-to-consult-senior-svgrepo-com.svelte'
	import realEstateIcon from '$lib/assets/villa.svelte'

	export let content: Content.Hero

	type Service = {
		title: string // min 10 max 25
		description: string
		icon: ComponentType
	}

	const services: Service[] = [
		{
			title: 'Mali Müşavirlik',
			description: content.services.accountancy,
			icon: accountingIcon
		},
		{
			title: 'Gayrimenkul Değerleme',
			description: content.services.realEstateAppraisal,
			icon: realEstateIcon
		},
		{
			title: 'Destek Danışmanlığı',
			description: content.services.incentiveConsultancy,
			icon: consultingIcon
		}
	]
</script>

<section>
	{#each services as service}
		<figure class="service">
			<div class="icon">
				<div class="watermark" />
				<svelte:component this={service.icon} />
			</div>

			<figcaption>
				<h1>{service.title}</h1>
				<p>{service.description}</p>
			</figcaption>
		</figure>
	{/each}
</section>

<style lang="scss">
	@mixin breakpoint() {
		@include md() {
			@content;
		}
	}

	section {
		@include section();

		--title-font-size: clamp(1.1rem, 1.5vw, 1.6rem);
		--desc-font-size: 0.85rem;
		--desc-width: calc(var(--title-font-size) * 10);

		--service-width: calc(var(--title-font-size) * 10);
		--icon-width: clamp(50px, 5vw, 100px);

		--title-color: var(--color-text-1);
		--description-color: var(--color-text-2);

		display: flex;
		flex-direction: column;

		padding-top: $page-padding;
		padding-bottom: $page-padding;

		row-gap: 2rem;
		column-gap: 7rem;

		@include breakpoint() {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			row-gap: 3rem;
		}
	}

	.service {
		display: flex;
		align-items: center;
		// border: crimson 1px dashed;

		width: 100%;

		@include breakpoint {
			width: min-content;
		}
		@include xl {
			flex-grow: 1;
		}
	}

	.icon {
		--px: calc(var(--icon-width) * 0.2);
		--pt: calc(var(--px) * 0.5);
		position: relative;
		padding-left: var(--px);
		padding-right: var(--px);
		padding-top: var(--pt);
		z-index: 0;
	}

	.icon .watermark {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;

		width: 100%;
		aspect-ratio: 4/3;

		background: linear-gradient(to bottom right, var(--color-accent), transparent);
		border-radius: 125px;
		rotate: 15deg;
	}

	.icon > :global(svg) {
		width: var(--icon-width);
		height: auto;
		max-width: unset;
		min-width: unset;
	}

	.service > figcaption > h1 {
		font-size: var(--title-font-size);
		font-weight: 800;
		color: var(--title-color);
		white-space: nowrap;
		width: min-content;
	}

	.service > figcaption > p {
		font-size: var(--desc-font-size);
		color: var(--description-color);
		width: var(--desc-width);
	}
</style>
