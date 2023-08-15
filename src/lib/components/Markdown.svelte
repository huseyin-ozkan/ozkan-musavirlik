<script lang="ts">
	export let content: string
</script>

<!-- @component 
  Display given markdown HTML content with styles
-->

<div class="markdown">
	{@html content}
</div>

<style lang="scss">
	.markdown {
		:global {
			@import '../styles/markdown.scss';
		}
	}
</style>
