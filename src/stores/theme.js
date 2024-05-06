import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const dark = 'dark';
const light = 'light';

const defVal = browser && window.matchMedia('(prefers-color-scheme: dark)').matches ? dark : light;
const initVal = browser ? localStorage.theme : defVal;

const theme = writable(initVal);

theme.subscribe((val) => {
    if (browser)
    {
        localStorage.theme = val;
        if (val == dark)
        {
            document.documentElement.classList.remove(light);
            document.documentElement.classList.add(dark);
        }
        else
        {
            document.documentElement.classList.remove(dark);
            document.documentElement.classList.add(light);
        }
    }
});

export default theme;
