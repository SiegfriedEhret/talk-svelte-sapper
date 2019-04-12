<script>
	import Line from './Line.svelte';
	export let data = [
	  {
	    "amount": -10,
	    "plusminus": "minus",
	    "when": "2019-04-12",
	    "what": "Manger",
	    "who": "both",
	    "id": "71c7449a-39b6-4b0f-b4db-c5ac891f6d80",
	    "createdAt": 1555083480853,
	    "updatedAt": 1555083480853
	  }
	]
</script>

<table>
	<tr>
		<th>Quand</th>
		<th>Quoi</th>
		<th>Nous deux</th>
		<th>Ayako</th>
		<th>Siegfried</th>
		<th>Total</th>
	</tr>

	<!-- TODO Boucle avec {#each} sur les data pour les lignes -->
</table>