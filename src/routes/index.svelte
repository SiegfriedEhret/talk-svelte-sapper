<script>
	import Table from '../components/Table.svelte';

	// TODO Rien à faire ici, juste c'est là :)
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

<!-- TODO Bloc {#await} {:then} {:catch} -->
<!-- TODO Passer la data à <Table /> -->
<Table />