<script>
	import Line from './Line.svelte';
	import {history} from '../stores';
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
	{#each $history as item (item.id)}
		<Line {item} />
	{/each}
</table>
