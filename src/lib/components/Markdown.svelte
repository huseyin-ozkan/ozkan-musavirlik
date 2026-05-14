<script lang="ts">
	interface Props {
		content: string;
	}

	let { content }: Props = $props();
</script>

<!-- @component 
  Display given markdown HTML content with styles
-->

<div class="markdown">
	{@html content}
</div>
