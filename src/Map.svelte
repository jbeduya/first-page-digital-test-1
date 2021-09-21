<script>
    import { onMount } from 'svelte';
    import { features } from './store'
    let map;

    function initMap() {
        if (typeof google === 'undefined') return;
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 1.3521, lng: 103.8198 },
            zoom: 4,
        });
        $features.forEach(addMarker);
    }

    const addMarker = (feature) => {
        let coords = feature.geometry.coordinates;
        let props = feature.properties;

        const marker = new google.maps.Marker({
            position: {
                lat: coords[1], lng: coords[0]
            },
            title: props.title,
            map
        })


        const content = 
            '<div class="content">' + 
            '<h3>' + props.title + '</h3>' +
            '<span>' + new Date(props.time) + '</span>' + 
            '<p><a target="_blank" href="' + props.url + '">Click for more details</a></p>' +
            '</div>';

  
        // the following codes will prevent from having multiple InfoWindows
        // there will only be one instance of InfoWindow
        if (!window.infoWindow) {
            window.infoWindow = new google.maps.InfoWindow();
        }
        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.close();
            infoWindow.setContent(content);
            infoWindow.open(map, marker)
        });

        return marker;
    }

    $: $features.forEach(addMarker)

    onMount(initMap);
    window.onload = initMap;
</script>

<div id="map"></div>


<style>

    #map {
        height: 100%;
        width: 100%;
    }

</style>