<script>
	import {format} from 'date-fns';

	let item = {
		amount: 10,
		plusminus: "minus",
		when: format(new Date(), "yyyy-MM-dd"),
		what: "Manger",
		who: "both"
	};

	$: isValid = Object.values(item).every(x => !!x);

	function handleSubmit() {
		fetch('/data.json', {
			method: 'POST',
			headers: {
	            "Content-Type": "application/json"
	        },
	        body: JSON.stringify({...item, amount: item.plusminus === 'minus' ? -item.amount : item.amount})
		})
	}
</script>

<h2 class="title is-2">Nouvelle valeur</h2>

<form on:submit|preventDefault={handleSubmit}>
	<div class="fields">	
		<div class="field">
			<label class="label" for="what">Quoi ?</label>
			<div class="control">
				<input class="input" type="text" name="what" id="what" bind:value={item.what}>
			</div>
		</div>

		<div class="field">
			<div class="label">Qui ?</div>
			<div class="control">
				<label class="radio">
					<input type="radio" name="who" value="both" bind:group={item.who}>Les deux
				</label>
				<label class="radio">
					<input type="radio" name="who" value="aya" bind:group={item.who}>Aya
				</label>
				<label class="radio">
					<input type="radio" name="who" value="sieg" bind:group={item.who}>Sieg
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label" for="amount">Combien ?</label>
			<div class="control">
				<input class="input" type="number" name="amount" id="amount" bind:value={item.amount}>
			</div>
		</div>

		<div class="field">
			<label class="label" for="when">Quand ?</label>
			<div class="control">
				<input class="input" type="date" name="when" id="when" bind:value={item.when}>
			</div>
		</div>
		
		<div class="field">
			<div class="label">Type ?</div>
			<div class="control">
				<label class="radio">
					<input type="radio" name="plusminus" value="minus" bind:group={item.plusminus}>Dépense
				</label>
				<label class="radio">
					<input type="radio" name="plusminus" value="plus" bind:group={item.plusminus}>Ajout
				</label>
			</div>
		</div>

		<div class="field">
			<div class="control">
				<button class="button is-primary" type="submit" disabled={!isValid}>OK</button>
			</div>
		</div>
	</div>
</form>	
