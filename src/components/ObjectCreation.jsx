import React, {useState} from "react";
import { MapContainer, TileLayer, useMapEvents, GeoJSON } from "react-leaflet";

function DrawShapes() {
    const [geojson, setGeojson] = useState(null);
    useMapEvents({
        'draw:created' : (e) => {
            const layer = e.layer;
            geojson = layer.toGeoJSON();
            setGeojson(geojson);
        },
    });

    return (
        <>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {geojson &&<GeoJSON data={geojson} />}
        </>
    );

}

function ObjectCreation() {
    return (
        <MapContainer center={[54.727193, 55.960610]} zoom={13}>
            <DrawShapes />
        </MapContainer>
    )
}

export default ObjectCreation;
