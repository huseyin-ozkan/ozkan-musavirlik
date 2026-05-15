<script lang="ts">
	interface Props {
		content: string
	}

	let { content }: Props = $props()

	let markdownEl: HTMLDivElement | undefined = $state()

	$effect(() => {
		content
		markdownEl?.querySelectorAll<HTMLImageElement>('img:not([loading])').forEach((img) => {
			img.loading = 'lazy'
			img.decoding = 'async'
		})
	})
</script>

<!-- @component 
  Display given markdown HTML content with styles
-->

<div class="markdown" bind:this={markdownEl}>
	{@html content}
</div>
