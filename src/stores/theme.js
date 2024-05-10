import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const dark = 'dark';
export const light = 'light';

const defVal =
	browser && !window.matchMedia('(prefers-color-scheme: light)').matches ? dark : light;
const initVal = browser ? window.localStorage.theme || defVal : defVal;

export const theme = writable(initVal);

export function toggleTheme() {
	theme.update((val) => (val.toString() !== light ? dark : light));
}

theme.subscribe((v) => {
	if (!browser) {
		return;
	}

	const documentClass = document.documentElement.classList;
	window.localStorage.theme = v.toString() !== light ? dark : light;

	// default dark mode
	if (v.toString() !== light) {
		documentClass.remove(light);
		documentClass.add(dark);
		return;
	}

	documentClass.remove(dark);
	documentClass.add(light);
});

export default theme;
