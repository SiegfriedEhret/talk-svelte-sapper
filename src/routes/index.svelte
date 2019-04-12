<script>
	import Table from '../components/Table.svelte';

	async function getData() {
		const response = await fetch('/data.json');
		const data = await response.json();
		console.log(data);
		return data;
	}
</script>

<style>

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#await getData()}
	<p>...waiting</p>
{:then data}
	<Table {data}/>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}