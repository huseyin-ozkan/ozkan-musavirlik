<script lang="ts">
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
	<h1 class="section-title">Hakkımızda</h1>
	<p>{content.paragraph}</p>

	<section class="mission-vision">
		<article>
			<h2>Misyonumuz</h2>
			<p>{content.mission}</p>
		</article>

		<article>
			<h2>Vizyonumuz</h2>
			<p>{content.vision}</p>
		</article>
	</section>
</section>

<style lang="scss">
	#about {
		--color-paragraph: #5b6c98;
		--color-mission-vision-bg: var(--color-bg-medium);
		--color-mission-vision-text: #7a88ba;

		--section-pt: clamp(75px, 10vw, 250px);
		--section-pb: clamp(75px, 7vw, 150px);
		--paragraph-max-width: 1000px;

		--heading-font-size: clamp(1.7rem, 5vw, 4rem);
		--paragraph-font-size: clamp(1rem, 2vw, 1.3rem);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding-top: var(--section-pt);
		padding-bottom: var(--section-pb);
	}

	#about > h1 {
		font-size: var(--heading-font-size);
		font-weight: bold;

		margin-bottom: 1.2em;
	}

	#about > p {
		font-size: var(--paragraph-font-size);
		font-weight: 500;
		line-height: 116%;
		text-align: center;
		color: var(--color-paragraph);

		max-width: var(--paragraph-max-width);
		margin-bottom: 4em;
	}

	// Mission & Vision
	.mission-vision {
		--title-font-size: clamp(1.25rem, 2.5vw, 2rem);
		--text-size: clamp(0.95rem, calc(var(--title-font-size) * 0.6), 1.1rem);
		--gap: calc(var(--title-font-size) * 1.4);

		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: var(--gap);

		@include md {
			flex-direction: row;
		}

		margin-bottom: 2em;
		max-width: var(--paragraph-max-width);
	}

	.mission-vision > article {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: start;

		background-color: var(--color-mission-vision-bg);
		border-radius: 30px;
		padding: var(--gap);
	}

	.mission-vision > article > h2 {
		font-size: var(--title-font-size);
		font-weight: 700;
		margin-bottom: 0.8em;
	}

	.mission-vision > article > p {
		font-size: var(--text-size);
		font-weight: 400;
		line-height: 130%;
		text-align: center;
		color: var(--color-mission-vision-text);
	}
</style>
