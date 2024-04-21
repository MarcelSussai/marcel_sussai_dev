import { writable } from 'svelte/store'



export const is_open = writable(false)
export const hand_is_open_tog = () => is_open.update(v => !v)