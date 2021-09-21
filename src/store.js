import { writable } from "svelte/store";

export const features = writable([])
export const isLoading = writable(false);

export function getData() {
    isLoading.set(true)
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
    .then(res => res.json())
    .then(res => {
        isLoading.set(false)
        features.set(res.features)
    })
}