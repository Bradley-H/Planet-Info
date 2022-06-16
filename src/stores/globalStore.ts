import { writable } from 'svelte/store';


export let globalStore = writable({
    currentPlanet: "Earth",
    ModalActive: false,
})