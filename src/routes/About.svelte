<script lang="ts">
	// mock data <!-- TODO remove
	const paragraph =
		'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktayız.'

	const mission =
		'Doğruluk, dürüstlük, tarafsızlık ve gizlilik ilkeleriyle, uluslararası mesleki standartlar çerçevesinde, muhasebeyi mükelleflerimiz için katma değer yaratacak aynı zamanda kamu faydasını da gözetecek bir anlayışla ekonomik açıdan kuvvetli, sistemli ve uzun ömürlü kurumlar meydana getirmek; muhasebe ve mali müşavirlik hizmetleri açısından ekibimizle Dünya’da lider kuruluşlardan biri olmaktır.'

	const vision =
		'Globalleşen dünya üzerinde kurumumuz ve müşterilerimizi bilgi düzeyi açısından en üst düzeye taşıyarak ekonomik açıdan kuvvetli, sistemli ve uzun ömürlü oluşumlar meydana getirmek; muhasebe ve mali müşavirlik hizmetleri açısından Türkiye’de lider kuruluşlardan biri olmaktır.'

	type Staff = {
		name: string
		title: string
		image: string
		description: string
	}

	const staff: Staff[] = [
		{
			name: 'Hüseyin Özkan',
			title: 'Serbest Muhasebeci Mali Müşavir, Gayrimenkul Değerleme Uzmanı',
			image: './assets/huseyin-ozkan.png',
			description:
				'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktadır.'
		},
		{
			name: 'Hatice Banu Özkan',
			title: 'Serbest Muhasebeci Mali Müşavir',
			image: './assets/hatice-banu-ozkan.png',
			description:
				'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktadır.'
		}
	]
</script>

<section id="about">
	<h1 class="section-title">Hakkımızda</h1>
	<p>{paragraph}</p>

	<section class="mission-vision">
		<article>
			<h2>Misyonumuz</h2>
			<p>{mission}</p>
		</article>

		<article>
			<h2>Vizyonumuz</h2>
			<p>{vision}</p>
		</article>
	</section>

	<section class="staff">
		{#each staff as { name, title, image, description }}
			<figure>
				<img src={image} alt={name} />

				<figcaption>
					<span>{title}</span>
					<h3>{name}</h3>
					<p>{description}</p>
				</figcaption>
			</figure>
		{/each}
	</section>
</section>

<style lang="scss">
	#about {
		--color-paragraph: #5b6c98;
		--color-mission-vision-bg: var(--color-bg-medium);
		--color-mission-vision-text: #7a88ba;

		--section-pv: clamp(75px, 10vw, 250px);
		--paragraph-max-width: 1000px;

		--heading-font-size: clamp(1.7rem, 5vw, 4rem);
		--paragraph-font-size: clamp(1rem, 2vw, 1.3rem);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding-top: var(--section-pv);
		padding-bottom: var(--section-pv);
	}

	#about > h1 {
		font-size: var(--heading-font-size);
		font-family: Mulish, Ubuntu, sans-serif;
		font-weight: bold;

		margin-bottom: 1.2em;
	}

	#about > p {
		font-size: var(--paragraph-font-size);
		font-family: Mulish, Ubuntu, sans-serif;
		font-weight: 500;
		line-height: 116%;
		text-align: center;
		color: var(--color-paragraph);

		max-width: var(--paragraph-max-width);
		margin-bottom: 4em;
	}

	// Mission & Vision
	.mission-vision {
		--title-size: clamp(1.25rem, 2.5vw, 2rem);
		--text-size: clamp(0.95rem, calc(var(--title-size) * 0.6), 1.1rem);
		--gap: calc(var(--title-size) * 1.4);

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
		justify-content: center;

		background-color: var(--color-mission-vision-bg);
		border-radius: 30px;
		padding: var(--gap);
	}

	.mission-vision > article > h2 {
		font-size: var(--title-size);
		font-family: Mulish, Ubuntu, sans-serif;
		font-weight: 700;
		margin-bottom: 0.8em;
	}

	.mission-vision > article > p {
		font-size: var(--text-size);
		font-family: Ubuntu, sans-serif;
		font-weight: 400;
		line-height: 130%;
		text-align: center;
		color: var(--color-mission-vision-text);
	}
</style>
