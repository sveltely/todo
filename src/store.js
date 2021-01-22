import {writable} from 'svelte/store';

export const repairs = writable(JSON.parse(localStorage.getItem('repairs')) || []);
