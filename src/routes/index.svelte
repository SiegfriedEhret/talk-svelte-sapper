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

<style>
	.app {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 20rem 1fr;
		margin: 1rem;
	}

	aside {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
	}
</style>

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
    <div class="app">
    	<aside>
    		<h2 class="title is-2">Résultat</h2>

    		<Result/>

    		<h2 class="title is-2">Répartition</h2>

    		<Graph />
    	</aside>

    	<section class="history">
    		<h2 class="title is-2">Historique</h2>

    		<Table />
    	</section>
    </div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
