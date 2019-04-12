<script>
	import Table from '../components/Table.svelte';
	// TODO On importe history du store
	import { history } from '../stores';

	async function getData() {
		const response = await fetch('/data.json');
		const data = await response.json();
		console.log(data);
		// TODO Appeler history.update(data) si res.ok
		return data;
	}

	// TODO Appeler getData !
</script>

<style>

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#await getData()}
	<p>...waiting</p>
{:then data}
	<!-- Plus besoin de data ici, on va passer par le store -->
	<Table {data}/>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}