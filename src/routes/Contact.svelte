<script lang="ts">
	import Icon from '@iconify/svelte'
	import officePhone from '$lib/assets/office-phone.webp'

	interface Props {
		branches: Content.Branch[] // mock data
	}

	let { branches }: Props = $props()

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

						<div class="numbers">
							{#each branch.phones as phone, i (i)}
								<a href="tel:{phone}" title="Ara">{phone}</a>
							{/each}
						</div>
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
		<div class="watermark"></div>
		<img src={officePhone} alt="İletişim" loading="lazy" decoding="async" />
	</div>
</section>

<style lang="scss">
	#contact {
		--color-section-bg: var(--color-base-100);

		--color-branch-bg: var(--color-base-100);

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

	.content > h1 {
		@include title-1;

		margin-bottom: 0.5em;
	}

	.content > p {
		@include paragraph-1;

		color: var(--color-neutral-pale);
		margin-bottom: 70px;
	}

	// branch list
	ul {
		--icon-size: 24px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 64px;

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
		gap: 24px;

		max-width: 20rem;
	}

	li > .name {
		@include title-3;

		width: 100%;
		padding-bottom: 0.6em;
		border-bottom: 1.5px solid var(--color-base-400);
	}

	li > span {
		@include paragraph-2;
		color: var(--color-neutral-pale);

		display: flex;
		align-items: start;
		justify-content: center;
		gap: 1rem;

		// icon
		:global(svg) {
			color: var(--color-neutral-pale);

			width: var(--icon-size);
			height: var(--icon-size);
			flex-shrink: 0;
		}
	}

	.phone .numbers {
		display: flex;
		flex-direction: column;
		gap: 2px;

		a {
			@include paragraph-2;
			white-space: nowrap;
			color: var(--color-neutral-pale);
		}
	}

	.email a {
		text-decoration: underline;
		color: var(--color-neutral-pale);
	}

	.image {
		--image-size: clamp(220px, 30vw, 400px);
		--watermark-radius: clamp(50px, calc(var(--image-size) * 0.25), 100px);

		width: var(--image-size);
		align-self: end;

		right: 0;
		z-index: 0;

		position: relative;

		.watermark {
			position: absolute;
			inset: 20% -10% -10% -20%;

			z-index: -1;

			background: linear-gradient(to bottom, var(--color-accent), transparent 85%);
			border-radius: var(--watermark-radius);
			rotate: 15deg;
		}

		@include md {
			align-self: unset;
		}
	}
</style>
