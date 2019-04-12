<script>
	// TODO On importe {coins, total} du store
	import { coins, total } from "../stores.js";

	// TODO Remplacer ___ par la variable qui va bien :)
	const keys = Object.keys(___).sort((a, b) => +a < +b);
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
		<!-- TODO Ajouter le bind:value sur coins avec la clé key -->
		<td class="control">
			<input
				class="input"
				id="{key}"
				type="number"
			/>
		</td>
	</tr>
	{/each}
</table>

<!-- TODO Afficher la valeur du total -->
<p>Total: {___}</p>
