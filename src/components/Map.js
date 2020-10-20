import React from "react";
import ReactMapboxGl, {Layer, Feature, Marker} from 'react-mapbox-gl';


const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoibmF2ZWVubnZyZ3VwIiwiYSI6ImNrZ2kxYW9oeTAyODczMm40dWs4MzkwM2cifQ.wlwkYJu5zSryrA5aSIig_A'
});

const MapScreen = () => {
    return <Map
        center={[77.341309, 11.107370]}
        zoom={[11]}
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
            height: '100vh',
            width: '100vw'
        }}
    >
        <Layer type="symbol" id="marker" layout={{'icon-image': 'marker-15'}}>
            <Feature coordinates={[77.2937723, 11.1085742]}/>
        </Layer>
    </Map>;
}

export default MapScreen;