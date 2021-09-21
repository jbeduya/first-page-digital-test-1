<script>
    import { features } from './store'

    $: data = $features.sort((a,b) => b.properties.mag - a.properties.mag)
</script>


{#each data as feature}
    <div class="earthquake-row">
        <div class="magnitude">{feature.properties.mag}</div>
        <div class="details">
            <div>{feature.properties.place}</div>
            <div>{new Date(feature.properties.time)}</div>
        </div>
        <div>
            <a href={feature.properties.url} target="_blank">Details</a>
        </div>
    </div>
{/each}

<style>
    .earthquake-row {
        display: grid;
        grid-template-columns: 50px auto 60px;
        padding: 1px 3px;
    }
    .magnitude {
        background-color: gray;
        text-align: center;
        padding: 5px;
        color: white;
        font-weight: bold;
    }
    .details { padding: 5px; font-size: 0.9rem;}

    .earthquake-row:nth-child(even) {
        background-color: #f7f7f7;
    }
</style>