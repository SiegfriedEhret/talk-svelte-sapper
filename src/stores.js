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

// TODO Créer un store `total` derived depuis coin: Object.entries($coins).reduce((acc, [key, value]) => acc + key * value, 0)