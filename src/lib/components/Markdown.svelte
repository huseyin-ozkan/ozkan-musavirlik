<script lang="ts">
	export let content: string
</script>

<!-- @component 
  Display given markdown HTML content with styles
-->

<div class="markdown">
	{@html content}
</div>

<style lang="scss" global>
	:global(.markdown) {
		@import '../styles/markdown.scss';
	}
</style>
