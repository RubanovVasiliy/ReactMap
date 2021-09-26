import React from "react";
import {Map, TileLayer, Polygon, Popup} from "react-leaflet";
import './Map.modules.css';

function MapComponent() {
    const state = {
        lat: 55.030006,
        lng: 82.920474,
        zoom: 14
    };

    const redOptions = { color: 'red' }
    const polygon = [
        [55.027699226608924, 82.89660746004719],[55.0276324341566, 82.89620214019104],[55.02752353318053, 82.8962908039096],[55.02708066616247, 82.89655426181614],[55.027148911562826, 82.89694691542681],[55.027699226608924, 82.89660746004719]
    ]

    const center = [state.lat, state.lng];

    return (
        <Map zoom={state.zoom} center={center}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polygon pathOptions={redOptions} positions={polygon} popup={"asd"} >
                <Popup positions={polygon} >A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Polygon>
        </Map>
    );
};

export default MapComponent;