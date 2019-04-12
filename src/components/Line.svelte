<script context="module">
	const whoz = ['both', 'aya', 'sieg']
</script>

<script>
	export let item;

	const { amount, plusminus, total, what, when, who } = item;
</script>

<style>
	.plus {
		background: green;
	}
	.minus {
		background: red;
	}
</style>

<tr>
	<td>
		{when}
	</td>
	<td>
		{what}
	</td>

	{#each whoz as whozItem}
		{#if who === whozItem}
			<td class={plusminus}>
				{amount}
			</td>
		{:else}
			<td></td>
		{/if}
	{/each}

	<td>{total}</td>
</tr>