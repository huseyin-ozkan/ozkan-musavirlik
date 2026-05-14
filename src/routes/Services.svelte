<script lang="ts">
	import accountingImg from '$lib/assets/services/accountancy.webp'
	import consultingImg from '$lib/assets/services/consultancy.webp'
	import realEstateImg from '$lib/assets/services/real-estate.webp'

	interface Props {
		content: Content.Hero
	}

	let { content }: Props = $props()

	type Service = {
		title: string // min 10 max 25
		description: string
		image: string
	}

	const services: Service[] = $derived([
		{
			title: 'Mali Müşavirlik',
			description: content.services.accountancy,
			image: accountingImg
		},
		{
			title: 'Gayrimenkul Değerleme',
			description: content.services.realEstateAppraisal,
			image: realEstateImg
		},
		{
			title: 'Destek Danışmanlığı',
			description: content.services.incentiveConsultancy,
			image: consultingImg
		}
	])
</script>

<section>
	{#each services as service}
		<figure class="service">
			<div class="img-wrapper">
				<img src={service.image} alt={service.title} />
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

		--service-width: calc(var(--title-font-size) * 10);
		--img-width: clamp(80px, 8vw, 100px);
		--img-aspect-ratio: 100/75;

		--title-color: var(--color-neutral);
		--description-color: var(--color-neutral-pale);

		display: flex;
		flex-direction: column;

		padding-top: $page-padding;
		padding-bottom: $page-padding;

		row-gap: 2rem;
		column-gap: 2rem;

		@include breakpoint() {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			row-gap: 3rem;
		}
	}

	.service {
		flex: 1;
		display: flex;
		align-items: center;
		// border: crimson 1px dashed;

		width: 100%;

		@include breakpoint {
			max-width: 400px;
		}
		@include xl {
			flex-grow: 1;
		}
	}

	.img-wrapper {
		flex-shrink: 0;

		position: relative;

		margin-right: calc(var(--img-width) * 0.2);
		aspect-ratio: var(--img-aspect-ratio);
		width: var(--img-width);

		img {
			border-radius: var(--radius-card);
		}

		margin-left: calc(var(--img-width) * 0.25);

		@include before() {
			width: 115%;
			height: 125%;
			border-radius: 64px;
			rotate: 10deg;
			left: -25%;
			top: -18%;

			background: linear-gradient(109deg, var(--color-accent), transparent);
		}
	}

	.service h1 {
		@include title-4();

		white-space: nowrap;
		color: var(--title-color);
		margin-bottom: 0.5em;
	}

	.service p {
		@include subtitle();
		color: var(--description-color);
	}
</style>
