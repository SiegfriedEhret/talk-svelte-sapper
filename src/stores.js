import { derived, writable } from "svelte/store";

export const coins = writable({
	"0.10": 0,
	"0.20": 0,
	"0.50": 0,
	"1": 0,
	"2": 0,
	"5": 0,
	"10": 0,
	"20": 0,
	"50": 0,
});

export const total = derived(coins, $coins =>
	Object.entries($coins).reduce((acc, [key, value]) => acc + key * value, 0)
);

function createHistory() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		update: data => {
			let sortedData = [...data];
			sortedData.sort((a, b) => a.when > b.when);

			sortedData = sortedData.reduce((acc, element, i) => {
				const previous = i > 0 ? acc[i - 1].total : 0;
				const total = previous + element.amount;
				const newElement = { ...element, total };

				return [...acc, newElement];
			}, []);

			sortedData.reverse();

			set(sortedData);
		}
	};
}

export const history = createHistory();

// TODO Rien à faire, mais on ajoute ça pour afficher le dernier `total`
export const historyTotal = derived(history, $history => {
	const [last = { total: 0 }] = $history;
	return last.total;
});

// TODO Ajouter un store isValid derived de total et historyTotal qui renvoie si les valeurs sont égales (value absolue FTW)
export const isValid = false;