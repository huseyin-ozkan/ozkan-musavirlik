<script lang="ts">
	import accountingIcon from '$lib/assets/accounting-svgrepo-com 1.svelte'
	import consultingIcon from '$lib/assets/men-and-women-to-consult-senior-svgrepo-com.svelte'
	import realEstateIcon from '$lib/assets/villa.svelte'

	export let content: Content.Hero

	type Service = {
		title: string // min 10 max 25
		description: string
		icon: string
	}

	const services: Service[] = [
		{
			title: 'Mali Müşavirlik',
			description: content.services.accountancy,
			icon: './assets/icons/accountancy-icon.png'
		},
		{
			title: 'Gayrimenkul Değerleme',
			description: content.services.realEstateAppraisal,
			icon: './assets/icons/real-estate-appraisal-icon.png'
		},
		{
			title: 'Destek Danışmanlığı',
			description: content.services.incentiveConsultancy,
			icon: './assets/icons/consultancy-icon.png'
		}
	]
</script>

<section>
	{#each services as service}
		<figure class="service">
			<div class="icon">
				<img src={service.icon} alt={service.title} />
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

		--title-color: var(--color-neutral);
		--description-color: var(--color-neutral-pale);

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
		position: relative;
		width: var(--icon-width);
		margin-right: calc(var(--icon-width) * 0.2);
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
