<script>
	import GraphBar from './GraphBar.svelte';
	import {history} from '../stores';

	const process = (data = [], who = '') => data
			.filter(x => x.who === who && x.amount < 0)
			.map(x => x.amount)
			.reduce((acc, el) => acc + el, 0);

	const getValues = data => {
		const dataPerPerson = {
			both: process(data, "both"),
			aya: process(data, "aya"),
			sieg: process(data, "sieg"),
		}
		const total = Object.values(dataPerPerson).reduce((acc, current) => acc + current, 0);

		const getPercentage = x => (x * 100) / total;
		const values = ["both", "aya", "sieg"].map(x => ({
			name: x,
			value: getPercentage(dataPerPerson[x])
		}));

		return values;
	}

</script>

<svg
	class="chart"
	width="100%"
	height="100"
	aria-labelledby="title desc"
	role="img"
>
	{#each getValues($history) as item, i (item.name)}
		<!-- TODO On peut spread un objet pour faire des props -->
		<GraphBar {...item} {i} />
	{/each}
</svg>