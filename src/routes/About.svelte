<script lang="ts">
	import accountingCalculator from '$lib/assets/accounting-calculator.webp'
	export let content: Content.About

	// Mock data
	// const paragraph =
	// 		'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktayız.'

	// 	const mission =
	// 		'Globalleşen dünya üzerinde kurumumuz ve müşterilerimizi bilgi düzeyi açısından en üst düzeye taşıyarak ekonomik açıdan kuvvetli, sistemli ve uzun ömürlü oluşumlar meydana getirmek; muhasebe ve mali müşavirlik hizmetleri açısından Türkiye’de lider kuruluşlardan biri olmaktır.'

	// 	const vision =
	// 		'Doğruluk, dürüstlük, tarafsızlık ve gizlilik ilkeleriyle, uluslararası mesleki standartlar çerçevesinde, muhasebeyi mükelleflerimiz için katma değer yaratacak aynı zamanda kamu faydasını da gözetecek bir anlayışla ekonomik açıdan kuvvetli, sistemli ve uzun ömürlü kurumlar meydana getirmek; muhasebe ve mali müşavirlik hizmetleri açısından ekibimizle Dünya’da lider kuruluşlardan biri olmaktır.'
</script>

<section id="about">
	<section class="section-hero">
		<h1 class="section-title">Hakkımızda</h1>
		<p class="main-paragraph">{content.paragraph}</p>
	</section>

	<section class="mission-vision">
		<article class="mission">
			<h2>Misyonumuz</h2>
			<p>{content.mission}</p>
		</article>

		<article class="vision">
			<h2>Vizyonumuz</h2>
			<p>{content.vision}</p>
		</article>
	</section>

	<div class="image">
		<div class="watermark" />
		<img src={accountingCalculator} alt="" aria-hidden="true" />
	</div>
</section>

<style lang="scss">
	#about {
		--section-pt: clamp(75px, 10vw, 250px);
		--section-pb: clamp(75px, 7vw, 150px);

		--heading-font-size: clamp(1.7rem, 5vw, 4rem);
		--paragraph-font-size: clamp(1rem, 2vw, 1.3rem);

		padding-top: var(--section-pt);
		padding-bottom: var(--section-pb);

		display: grid;
		align-items: start;

		grid-template-areas:
			'her her'
			'... img'
			'mvs mvs';
		grid-template-columns: repeat(2, auto);
		grid-template-rows: repeat(3, auto);

		@include md {
			grid-template-areas:
				'her img'
				'mvs mvs';
			grid-template-columns: auto 15vw;
			grid-template-rows: repeat(2, auto);
			column-gap: 15vw;
		}

		@include xl {
			grid-template-areas:
				'her img'
				'mvs img';
			grid-template-columns: auto 15vw;
			grid-template-rows: repeat(2, auto);
		}
	}

	.section-hero {
		grid-area: her;

		.section-title {
			@include section-title;
		}

		.main-paragraph {
			@include paragraph-1;
			margin-bottom: 4em;
		}
	}

	.mission-vision {
		grid-area: mvs;
		--title-font-size: clamp(1.3rem, 1.5vw, 1.5rem);
		--text-size: clamp(0.95rem, calc(var(--title-font-size) * 0.6), 1.1rem);
		--gap: calc(var(--title-font-size) * 3);

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: var(--gap);

		margin-bottom: 2em;

		@include md {
			flex-direction: row;
		}

		article {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: start;
			justify-content: start;

			h2 {
				font-size: var(--title-font-size);
				font-weight: 700;
				font-family: 'Zilla Slab';
				margin-bottom: 0.8em;
			}

			p {
				@include paragraph-2;
			}
		}
	}

	.image {
		grid-area: img;
		justify-self: end;
		position: relative;
		z-index: 1;
		// width: 45%;
		max-width: 300px;
		flex-grow: 1;
		flex-shrink: 0;

		.watermark {
			position: absolute;
			inset: 20% -70% -10% -60%;

			z-index: -1;

			background: linear-gradient(to bottom, var(--color-accent), transparent);
			border-radius: 150px;
			rotate: 15deg;
		}

		img {
			width: 100%;
		}
	}
</style>
