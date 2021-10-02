import React, {useEffect} from "react";
import {Map, TileLayer, Polygon, Popup, Tooltip} from "react-leaflet";
import './Map.modules.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchObjects} from "../redux/thunk";
import DescriptionBlock from "./DescriptionBlock";
import {setInvisibleAction} from "../redux/map-reducer";
import {addToExportAction} from "../redux/export-reducer";


function MapComponent() {
    const dispatch = useDispatch()
    const mapStore = useSelector(state => state.map)

    useEffect(() => {
        dispatch(fetchObjects())
    }, [])

    let objects = mapStore.objects.filter(o => o.visible === true).map(o => {
        let positions = o.perimeter.split(new RegExp(/\B,/gm)).map(i => JSON.parse(i))
        return <Polygon key={o.id} positions={positions} onClick={(e) => {
            e.target.closeTooltip()
        }}>
            <Tooltip>
                <DescriptionBlock object_number={o.object_number} area={o.area} n_zone={o.n_zone}/>
            </Tooltip>
            <Popup positions={positions}>
                <DescriptionBlock object_number={o.object_number} area={o.area} n_zone={o.n_zone}/>
                <div className="button-block">
                    <button className="btn btn-primary button-popup" onClick={() => {
                        dispatch(addToExportAction(o))
                    }}>Оставить объект
                    </button>
                </div>
                <div>
                    <button className="btn btn-danger button-popup" onClick={() => {
                        dispatch(setInvisibleAction(o.id))
                    }}>Удалить объект
                    </button>
                </div>
            </Popup>
        </Polygon>
    })

    return (
        <Map zoom={mapStore.zoom} center={[mapStore.lat, mapStore.lng]}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {objects}
        </Map>
    )
}

export default MapComponent;