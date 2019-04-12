<script>
	import Graph from '../components/Graph.svelte';
	import Result from '../components/Result.svelte';
	import Table from '../components/Table.svelte';
	import { history, isValid } from '../stores';

	async function getData() {
		try {
			const res = await fetch("/data.json");
			const data = await res.json();

			if (res.ok) {
				history.update(data);
			} else {
				throw new Error(data);
			}
		} catch(e) {
			console.log('error', e)
		}
	}

	getData();
</script>

{#if $isValid}
<style>
	body {
		border: 5px solid green;
	}
</style>
{:else}
<style>
	body {
		border: 5px solid red;
	}
</style>
{/if}

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#await getData()}
	<p>...waiting</p>
{:then data}
    <Result />

    <Graph />

	<Table />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
