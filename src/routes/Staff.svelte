<script lang="ts">
	export let staff: Content.Staff[]

	// // mock
	// const staff: Staff[] = [
	// 	{
	// 		name: 'Hüseyin Özkan',
	// 		title: 'Serbest Muhasebeci Mali Müşavir',
	// 		image: './assets/mock-huseyin-ozkan.png',
	// 		description:
	// 			'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktadır.'
	// 	},
	// 	{
	// 		name: 'Hatice Banu Özkan',
	// 		title: 'Serbest Muhasebeci Mali Müşavir',
	// 		image: './assets/mock-hatice-banu-ozkan.png',
	// 		description:
	// 			'2012 yılından itibaren Yahyalı ve Kayseri’de Serbest Muhasebeci Mali Müşavirlik faaliyeti yürütmekteyiz. SPK lisanslı Gayrimenkul Değerleme Uzmanı olan Hüseyin Özkan tarafından talep üzerine özel veya kamu otoritelerine verilmek üzere Gayrimenkul Ekspertiz Raporlama faaliyetinde bulunmaktadır.'
	// 	}
	// ]
</script>

<section id="staff">
	<ul>
		{#each staff as { name, title, image, description }}
			<li>
				<figure>
					<div class="image">
						<img src={image} alt={name} />
					</div>

					<figcaption>
						<span class="title">{title}</span>
						<h1 class="name">{name}</h1>
						<p class="desc">{description}</p>
					</figcaption>
				</figure>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
	#staff {
		--color-title: var(--color-neutral-vivid);

		--image-size: clamp(200px, 16vw, 350px);

		--name-font-size: clamp(1.3rem, 2vw, 2rem);
		--title-font-size: 1rem;
		--desc-font-size: 1rem;

		--gap: calc(var(--name-font-size) * 1.5);

		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 100px;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		gap: 2em;

		width: 100%;

		@include md {
			flex-direction: row;
			gap: 4em;
		}
	}

	// Staff member

	ul > li > figure {
		display: grid;
		align-items: center;
		justify-items: start;
		grid-template-rows: auto auto;
		gap: var(--gap);

		width: 100%;

		@include xl {
			grid-template-columns: auto auto;
			grid-template-rows: 1fr;
		}
	}

	ul > li > figure > .image {
		display: flex;
		align-items: stretch;
		justify-content: center;

		aspect-ratio: 1;
		padding-top: 1em;
		overflow: hidden;
		width: var(--image-size);
		border-radius: 150px;

		background: linear-gradient(to bottom, var(--color-accent), transparent);

		img {
			filter: drop-shadow(4px 0px 16px rgba(#000, 0.1));
		}
	}

	ul > li > figure > figcaption {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	ul > li > figure > figcaption > .title {
		font-size: var(--title-font-size);
		font-weight: 700;
		line-height: 116%;
		color: var(--color-title);

		margin-bottom: 0.1em;
	}

	ul > li > figure > figcaption > .name {
		font-size: var(--name-font-size);
		font-family: 'Zilla Slab';
		font-weight: 600;
		line-height: 116%;

		margin-bottom: 0.3em;
	}

	ul > li > figure > figcaption > .desc {
		@include paragraph-2;
	}

	// overrides to alternate staff member direction
	ul > li:nth-child(even) > figure {
		justify-items: end;

		figcaption {
			align-items: end;
			text-align: end;
		}

		@include xl {
			.image {
				grid-column: 2;
				grid-row: 1;
			}
			figcaption {
				grid-column: 1;
				grid-row: 1;
			}
		}
	}
</style>
