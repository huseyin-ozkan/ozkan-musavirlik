<script lang="ts">
	import Icon from '@iconify/svelte'

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
	<h1>İletişim</h1>
	<p>Aşağıdaki iletişim bilgilerini kullanarak bize ulaşabilirsiniz.</p>

	<ul class="branch-list">
		{#each branches as branch, i (i)}
			<li class="branch">
				<h2 class="name">{branch.name}</h2>

				<span class="address">
					<Icon icon="material-symbols:location-on" aria-hidden />
					<p>
						{branch.address}
					</p>
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
</section>

<style lang="scss">
	#contact {
		--color-section-bg: var(--color-bg-medium);
		--color-subheading: #5b6c98;

		--color-branch-bg: var(--color-bg-light);
		--color-address: #5264a4;
		--color-phone: #99a4c0;
		--color-email: #233571;
		--color-icon: #97a4cd;

		--section-pv: clamp(75px, 7vw, 150px);
		--heading-font-size: clamp(1.7rem, 5vw, 4rem);
		--subheading-font-size: clamp(0.85rem, 1.5vw, 1.3rem);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--color-section-bg);
		padding-top: var(--section-pv);
		padding-bottom: var(--section-pv);
	}

	#contact > h1 {
		font-size: var(--heading-font-size);
		font-family: Mulish, Ubuntu, sans-serif;
		font-weight: bold;

		margin-bottom: 0.3em;
	}

	#contact > p {
		font-size: var(--subheading-font-size);
		font-family: Mulish, Ubuntu, sans-serif;
		font-weight: 500;
		line-height: 116%;
		text-align: center;
		color: var(--color-subheading);

		margin-bottom: 4em;
	}

	// branch list
	ul {
		--name-font-size: clamp(1.25rem, 2.5vw, 1.8rem);
		--icon-size: calc(var(--name-font-size) * 1);
		--font-size: clamp(0.9rem, 1.5vw, 1.1rem);

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
			justify-content: space-evenly;
		}
	}

	// branch
	li {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

		background-color: var(--color-branch-bg);
		border-radius: 25px;
		padding: var(--padding);
	}

	li > .name {
		font-size: var(--name-font-size);
		font-family: Mulish, Ubuntu, sans-serif;
		font-weight: 800;

		margin-bottom: 1.1em;
		margin-left: calc(var(--icon-size) + 0.3em);
	}

	li > span {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;

		margin-bottom: 1em;

		font-size: var(--font-size);

		// icon
		:global(svg) {
			// <!-- TODO fix svg color not working -->
			color: var(--color-icon);
			opacity: 0.2;
			font-size: var(--icon-size);
			width: var(--icon-size);
			height: var(--icon-size);
			flex-shrink: 0;
		}

		// text
		p,
		a {
			max-width: 18em;
			font-size: inherit;
			font-weight: 500;
		}

		&.address > p {
			color: var(--color-address);
			font-weight: 400;
		}

		&.phone > a {
			color: var(--color-phone);
		}

		&.email > a {
			color: var(--color-email);
		}
	}
</style>
