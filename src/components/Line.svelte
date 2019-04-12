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

		<!-- TODO Bloc if si le who est un whozItem alors <td class={plusminus}>{amount}</td> sinon <td></td> -->

	{/each}

	<td>{total}</td>
</tr>