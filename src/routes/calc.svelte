<script>
	import { coins, total } from "../stores.js";

	const keys = Object.keys($coins).sort((a, b) => +a < +b);
</script>

<h2 class="title is-2">Calculette</h2>

<table>
	<tr>
		<th>Valeur</th>
		<th>Pièces</th>
	</tr>

	{#each keys as key, i}
	<tr class="field">
		<td>
			<label class="label" for="{key}">{key}</label>
		</td>
		<td class="control">
			<input
				class="input"
				id="{key}"
				type="number"
				bind:value={$coins[key]}
			/>
		</td>
	</tr>
	{/each}
</table>

<p>Total: {$total}</p>
