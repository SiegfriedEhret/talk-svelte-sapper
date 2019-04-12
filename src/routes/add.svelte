<script type="text/javascript">
	import {format} from 'date-fns';

	let item = {
		amount: 10,
		plusminus: "minus",
		when: format(new Date(), "yyyy-MM-dd"),
		what: "Manger",
		who: "both"
	};

	// TODO isValid = Object.values(item).every(x => !!x);

	function handleSubmit() {
		// TODO
		console.log(item);
	}
</script>

<h2 class="title is-2">Nouvelle valeur</h2>	

<!-- TODO ajouter le onSubmit avec preventDefault -->
<form>
	<div class="fields">	
		<div class="field">
			<label class="label" for="what">Quoi ?</label>
			<!-- TODO ajouter le bind:value -->
			<div class="control">
				<input class="input" type="text" name="what" id="what" >
			</div>
		</div>

		<div class="field">
			<div class="label">Qui ?</div>
			<!-- TODO ajouter le bind:group -->
			<div class="control">
				<label class="radio">
					<input type="radio" name="who" value="both" >Les deux
				</label>
				<label class="radio">
					<input type="radio" name="who" value="aya" >Aya
				</label>
				<label class="radio">
					<input type="radio" name="who" value="sieg" >Sieg
				</label>
			</div>
		</div>

		<div class="field">
			<label class="label" for="amount">Combien ?</label>
			<!-- TODO ajouter le bind:value -->
			<div class="control">
				<input class="input" type="number" name="amount" id="amount" >
			</div>
		</div>

		<div class="field">
			<label class="label" for="when">Quand ?</label>
			<!-- TODO ajouter le bind:value -->
			<div class="control">
				<input class="input" type="date" name="when" id="when" >
			</div>
		</div>
		
		<div class="field">
			<div class="label">Type ?</div>
			<!-- TODO ajouter le bind:group -->
			<div class="control">
				<label class="radio">
					<input type="radio" name="plusminus" value="minus" >Dépense
				</label>
				<label class="radio">
					<input type="radio" name="plusminus" value="plus" >Ajout
				</label>
			</div>
		</div>

		<div class="field">
			<!-- TODO ajouter le disabled -->
			<div class="control">
				<button class="button is-primary" type="submit" >OK</button>
			</div>
		</div>
	</div>
</form>	