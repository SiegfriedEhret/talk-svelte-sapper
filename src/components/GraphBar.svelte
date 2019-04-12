<svelte:options namespace="svg" />

<script>
	export let value = 0;
	export let name = '';
	export let i = 0;
</script>

<style>
	text {
		fill: #f39;
	}
</style>

<g>
	<rect width="{`${value || 0}%`}" height="19" y={20 * i}></rect>
	<text x="5" y={9.5 + 20 * i} dy=".35em">{`${name} ${(value || 0).toFixed(2)}%`}</text>
</g>