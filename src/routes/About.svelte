<script lang="ts">
	import accountingCalculator from '$lib/assets/accounting-calculator.webp'
	interface Props {
		content: Content.About // Mock data
	}

	let { content }: Props = $props()

	// const paragraph =
	// 		'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktayız.'

	// 	const mission =
	// 		'Globalleşen dünya üzerinde kurumumuz ve müşterilerimizi bilgi düzeyi açısından en üst düzeye taşıyarak ekonomik açıdan kuvvetli, sistemli ve uzun ömürlü oluşumlar meydana getirmek; muhasebe ve mali müşavirlik hizmetleri açısından Türkiye’de lider kuruluşlardan biri olmaktır.'

	// 	const vision =
	// 		'Doğruluk, dürüstlük, tarafsızlık ve gizlilik ilkeleriyle, uluslararası mesleki standartlar çerçevesinde, muhasebeyi mükelleflerimiz için katma değer yaratacak aynı zamanda kamu faydasını da gözetecek bir anlayışla ekonomik açıdan kuvvetli, sistemli ve uzun ömürlü kurumlar meydana getirmek; muhasebe ve mali müşavirlik hizmetleri açısından ekibimizle Dünya’da lider kuruluşlardan biri olmaktır.'
</script>

<section id="about">
	<div class="about-top">
		<article class="section-hero">
			<h1 class="section-title">Hakkımızda</h1>
			<p class="main-paragraph">{content.paragraph}</p>
		</article>

		<div class="image">
			<div class="watermark" aria-hidden="true"></div>
			<img src={accountingCalculator} alt="" aria-hidden="true" loading="lazy" decoding="async" />
		</div>
	</div>

	<div class="mission-vision">
		<article class="mission">
			<h2>Misyonumuz</h2>
			<p>{content.mission}</p>
		</article>

		<article class="vision">
			<h2>Vizyonumuz</h2>
			<p>{content.vision}</p>
		</article>
	</div>
</section>

<style lang="scss">
	#about {
		--section-py: clamp(75px, 10vw, 100px);
		--block-gap: clamp(48px, 10vh, 200px);
		--hero-content-gap: clamp(24px, 4vw, 40px);
		--card-gap: clamp(20px, 3vw, 32px);
		--mission-vision-gap: clamp(32px, min(10vw, 15vh), 200px);

		@include section;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: var(--block-gap);
		padding-top: var(--section-py);
		padding-bottom: var(--section-py);
		background-color: var(--color-base-200);
	}

	.about-top {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(48px, 8vw, 80px);
		width: 100%;

		@include md {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: clamp(32px, 5vw, 64px);
		}
	}

	.section-hero {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--hero-content-gap);
		width: 100%;
		max-width: 702px;

		.section-title {
			@include title-1;
			margin-bottom: 0;
		}

		.main-paragraph {
			@include paragraph-1;
			color: var(--color-neutral);
			margin-bottom: 0;
		}
	}

	.image {
		position: relative;
		z-index: 1;
		width: clamp(200px, max(25vh, 20vw), 350px);
		max-width: 350px;
		flex-grow: 1;
		flex-shrink: 0;
		align-self: end;
		margin-left: 15vw;

		.watermark {
			position: absolute;
			inset: 20% -30% 0% -35%;

			z-index: -1;

			background: linear-gradient(to bottom, var(--color-accent), transparent 90%);
			border-radius: 128px;
			rotate: 15deg;
		}

		img {
			width: 100%;
		}
	}

	.mission-vision {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: var(--mission-vision-gap);
		width: 100%;

		@include md {
			flex-direction: row;
			align-items: flex-start;
		}

		article {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--card-gap);
			min-width: 0;

			@include md {
				max-width: 543px;
			}

			h2 {
				@include title-2;
				margin-bottom: 0;
			}

			p {
				@include paragraph-2;
				margin-bottom: 0;
			}
		}
	}
</style>
