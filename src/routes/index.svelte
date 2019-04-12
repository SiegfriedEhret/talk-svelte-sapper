<script>
	// TODO On importe Result.svelte
	import Result from '../components/Result.svelte';
	import Table from '../components/Table.svelte';
	// TODO On importe isValid des stores
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

<!-- TODO Si c'est valide, mettre un bord vers au body, sinon rouge -->
<style>

</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#await getData()}
	<p>...waiting</p>
{:then data}
	<Table />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
