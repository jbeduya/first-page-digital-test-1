<script>
	import Router from 'svelte-spa-router'
	import Map from './Map.svelte';
	import Tabular from './Tabular.svelte';
	import { link } from 'svelte-spa-router';
	import { getData, isLoading } from './store'
	import { onMount } from 'svelte';

	const routes = {
		'/': Map,
		'/tabular': Tabular,
		'/map': Map
	}

	onMount(getData)
</script>

<div class="container">
	<nav>
		<h3>Earthquakes for the Last 24 Hours</h3>
		<div class="actions">
			<button on:click={getData}>
				{#if $isLoading}
					Loading...
				{:else}Refresh{/if}
			</button> | 
			<a href="/map" use:link>Map</a> | 
			<a href="/tabular" use:link>Tabular</a>
		</div>
	</nav>
	<main>
		<Router {routes}></Router>
	</main>
</div>


<style>
	main {
		overflow: scroll;
	}
	nav {
		display: flex;
		justify-content: space-between;
		padding: 0 16px;
		background-color: #995DB5;
		height: 50px;
	}
	.container {
		display: grid;
		grid-template-rows: 50px auto;
		height: 100%;
		width: 100%;
	}
	h3 {
		padding: 0; margin: 0;
		padding: 5px;
		color: orange;
	}
	.actions { 
		padding: 5px;
		color: orange;
	}

	@media only screen and (max-width: 720px) {
		nav {
			flex-direction: column;
			height: 100px;
		}
		.container {
			grid-template-rows: 100px auto;
		}
	}
</style>