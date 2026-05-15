<script lang="ts">
	import { page } from '$app/state'
	import { findCategoryTitle, isCategory, type CategoryPostCount } from '$lib/common/categories'

	const activeCategory = $derived.by(() => {
		const value = page.url.searchParams.get('category')
		return value && isCategory(value) ? value : null
	})

	interface Props {
		categoryPostCounts: CategoryPostCount[]
	}
	let { categoryPostCounts }: Props = $props()

	function chipHref(blogCategory: Category): string {
		const path = page.url.pathname
		const params = new URLSearchParams(page.url.searchParams)

		if (activeCategory === blogCategory) {
			params.delete('category')
		} else {
			params.set('category', blogCategory)
		}

		const query = params.toString()
		return query ? `${path}?${query}` : path
	}
</script>

<ul class="filter">
	{#each categoryPostCounts as item (item.id)}
		{@const isActive = activeCategory === item.id}
		{@const isDisabled = item.count === 0}
		<li>
			{#if isDisabled}
				<span class="chip disabled" aria-disabled="true">
					<span class="label">{findCategoryTitle(item.id)?.title}</span>
					<span class="count">{item.count}</span>
				</span>
			{:else}
				<a
					class="chip"
					class:active={isActive}
					href={chipHref(item.id)}
					aria-current={isActive ? 'true' : undefined}
					data-sveltekit-noscroll={true}
				>
					<span class="label">{findCategoryTitle(item.id)?.title}</span>
					<span class="count">{item.count}</span>
				</a>
			{/if}
		</li>
	{/each}
</ul>

<style lang="scss">
	.filter {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 20px;
		padding: 12px 20px;
		border-radius: 270px;
		background-color: var(--color-base-300);
		text-decoration: none;
		transition: background-color 0.15s ease;

		&:hover:not(.active) {
			background-color: var(--color-base-400);
		}

		&.active {
			background-color: var(--color-neutral-pale);

			.label {
				color: var(--color-base-400);
			}

			.count {
				color: var(--color-base-100);
				opacity: 0.5;
			}
		}

		&.disabled {
			opacity: 0.45;
			cursor: not-allowed;
			pointer-events: none;
		}
	}

	.label {
		@include label();
		white-space: nowrap;
	}

	.count {
		@include label-2();
		white-space: nowrap;
	}
</style>
