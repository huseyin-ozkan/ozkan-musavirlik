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

