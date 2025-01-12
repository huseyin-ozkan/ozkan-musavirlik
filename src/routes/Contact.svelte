<script lang="ts">
	import Icon from '@iconify/svelte'
	import officePhone from '$lib/assets/office-phone.webp'

	export let branches: Content.Branch[]

	// mock data
	// const branches: Content.Branch[] = [
	// 	{
	// 		name: 'Kayseri',
	// 		address: 'Gülük Mah. Osman Kavuncu Bulv. No:7/206 Melikgazi Kayseri',
	// 		phones: ['0536 644 26 66', '0352 222 49 45'],
	// 		email: 'muhasebe@ozkanmusavirlik.com.tr'
	// 	},
	// 	{
	// 		name: 'Yahyalı',
	// 		address: 'Seydili Mahallesi Atatürk Bulvarı No:101/2 Yahyalı Kayseri',
	// 		phones: ['0531 897 12 36', '0352 611 25 44'],
	// 		email: 'haticebanu@ozkanmusavirlik.com'
	// 	}
	// ]
</script>

<section id="contact">
	<div class="content">
		<h1>İletişim</h1>
		<p>Aşağıdaki iletişim bilgilerini kullanarak bize ulaşabilirsiniz.</p>

		<ul class="branch-list">
			{#each branches as branch, i (i)}
				<li class="branch">
					<h2 class="name">{branch.name}</h2>

					<span class="address">
						<Icon icon="material-symbols:location-on" aria-hidden />
						{#if branch.mapLink}
							<a
								href={branch.mapLink}
								target="_blank"
								rel="noopener noreferrer"
								title="Haritada görüntüle"
							>
								{branch.address}
							</a>
						{:else}
							<p>
								{branch.address}
							</p>
						{/if}
					</span>

					<span class="phone">
						<Icon icon="ic:baseline-local-phone" aria-hidden />

						{#each branch.phones as phone, i (i)}
							{#if i > 0}
								<span aria-hidden>/</span>
							{/if}

							<a href="tel:{phone}" title="Ara">{phone}</a>
						{/each}
					</span>

					<span class="email">
						<Icon icon="ic:baseline-email" aria-hidden />
						<a href="mailto:{branch.email}" title="Email gönder">{branch.email}</a>
					</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="image">
		<div class="watermark" />
		<img src={officePhone} alt="İletişim" />
	</div>
</section>

<style lang="scss">
	#contact {
		--color-section-bg: #fff;

		--color-branch-bg: var(--color-base-100);
		--color-icon: var(--color-neutral-vivid);

		--section-pv: clamp(75px, 7vw, 150px);
		--heading-font-size: clamp(1.7rem, 5vw, 4rem);
		--subheading-font-size: clamp(0.85rem, 1.5vw, 1.3rem);

		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;

		background-color: var(--color-section-bg);
		padding-top: var(--section-pv);
		padding-bottom: var(--section-pv);
		padding-right: 0;

		border-top: 1px solid var(--color-base-200);

		@include md {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}

	.content {
	}

	.content > h1 {
		@include section-title;

		margin-bottom: 0.3em;
	}

	.content > p {
		@include paragraph-1;

		margin-bottom: 4em;
	}

	// branch list
	ul {
		--name-font-size: clamp(1.25rem, 2.5vw, 1.8rem);
		--icon-size: 28px;

		--padding: calc(var(--name-font-size) * 1.2);
		--gap: calc(var(--name-font-size) * 2);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--gap);

		@include md {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: start;
			align-items: start;
		}
	}

	// branch
	li {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

		max-width: 20rem;
	}

	li > .name {
		font-size: var(--name-font-size);
		font-weight: 700;
		font-family: 'Zilla Slab';

		width: 100%;
		margin-bottom: 1.1em;
		padding-bottom: 0.2em;
		border-bottom: 1px solid var(--color-base-200);
	}

	li > span {
		@include paragraph-2;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;

		margin-bottom: 1em;

		// icon
		:global(svg) {
			// <!-- TODO fix icon color not working -->
			color: var(--color-icon);
			// opacity: 0.5;
			width: var(--icon-size);
			height: var(--icon-size);
			flex-shrink: 0;
		}
	}

	.image {
		width: clamp(200px, 30vw, 400px);
		align-self: end;

		right: 0;
		z-index: 0;

		position: relative;

		.watermark {
			position: absolute;
			inset: 20% -10% -20% -20%;

			z-index: -1;

			background: linear-gradient(to bottom, var(--color-accent), transparent);
			border-radius: 100px;
			rotate: 15deg;
		}

		@include md {
			align-self: unset;
		}
	}
</style>
