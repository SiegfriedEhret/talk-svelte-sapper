<script>
	import Line from './Line.svelte';
	// TODO On importe history des stores
	import { history } from '../stores';

	// TODO Plus besoin de ça !
	export let data = []
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
	<!-- Ça ne s'appelle plus data :) -->
	{#each data as item (item.id)}
		<Line {item} />
	{/each}
</table>