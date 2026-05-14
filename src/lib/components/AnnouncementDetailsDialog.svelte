<script lang="ts">
	import { browser } from '$app/environment'
	import { goto } from '$app/navigation'
	import { page } from '$app/state'
	import { findCategoryTitle } from '$lib/common/categories'
	import dayjs from 'dayjs'

	interface Props {
		announcements: Announcement[]
	}

	let { announcements }: Props = $props()

	let dialogEl: HTMLDialogElement | undefined = $state()

	const selected = $derived.by(() => {
		const id = page.url.hash.slice(1)
		if (!id) return null
		return announcements.find((a) => a.id === id) ?? null
	})

	const handleDialogClose = () => {
		goto(page.url.pathname, { noScroll: true })
	}

	/** Backdrop clicks target `<dialog>`; clicks on the panel target descendants. */
	const handleDialogClick = (e: MouseEvent) => {
		if (e.target === e.currentTarget) dialogEl?.close()
	}

	$effect(() => {
		if (!browser || !dialogEl) return
		if (selected) {
			if (!dialogEl.open) dialogEl.showModal()
		} else {
			dialogEl.close()
		}
	})
</script>

<dialog
	bind:this={dialogEl}
	class="announcement-dialog"
	aria-labelledby="announcement-dialog-title"
	onclose={handleDialogClose}
	onclick={handleDialogClick}
>
	{#if selected}
		<div class="dialog-panel">
			{#key selected.id}
				<header class="dialog-head">
					<h2 class="dialog-title" id="announcement-dialog-title">{selected.title}</h2>
					<button
						type="button"
						class="dialog-close"
						onclick={() => dialogEl?.close()}
						aria-label="Kapat"
					>
						×
					</button>
				</header>

				<p class="dialog-meta">
					<span class="date">{dayjs(selected.createdAt).format('D MMMM YYYY')}</span>
					{#if selected.category}
						<span class="category">{findCategoryTitle(selected.category)?.title}</span>
					{/if}
				</p>

				<div class="dialog-body">
					{selected.body}
				</div>
			{/key}
		</div>
	{/if}
</dialog>

<style lang="scss">
	.announcement-dialog {
		--dialog-width: min(600px, calc(100vw - 2rem));
		--dialog-max-height: min(85vh, 720px);

		position: fixed;
		inset: 0;

		width: var(--dialog-width);
		max-height: var(--dialog-max-height);
		height: fit-content;

		margin: auto;
		padding: 0;

		overflow: visible;

		border-radius: var(--radius-card);
		background: var(--color-base-100);
		color: var(--color-neutral);
		box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

		&::backdrop {
			background: rgb(0 0 0 / 0.45);
		}

		&:focus-visible {
			outline: 2px solid var(--color-neutral-vivid);
			outline-offset: 2px;
		}

		.dialog-panel {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
			min-height: 0;
			max-height: var(--dialog-max-height);
			padding: 2rem;
		}

		.dialog-head {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			gap: 1rem;
		}

		.dialog-title {
			@include title-4;
			flex: 1;
			min-width: 0;
			margin: 0;
		}

		.dialog-close {
			flex-shrink: 0;
			width: 2.25rem;
			height: 2.25rem;
			border: none;
			border-radius: var(--radius-card);
			background: var(--color-base-300);
			color: var(--color-neutral);
			font-size: 1.5rem;
			line-height: 1;
			cursor: pointer;

			&:hover {
				background: var(--color-base-200);
			}
		}

		.dialog-meta {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem 1rem;
			margin: 0;

			.date {
				@include label-2;
				color: var(--color-neutral-pale);
				opacity: 0.85;
			}

			.category {
				@include label-2;
				color: var(--color-neutral-vivid);
				opacity: 0.75;
			}
		}

		.dialog-body {
			overflow-y: auto;
			min-height: 0;
			margin-top: 0.25rem;
		}
	}
</style>
