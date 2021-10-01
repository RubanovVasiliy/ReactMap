import React, {useEffect} from "react";
import {Map, TileLayer, Polygon, Popup, Tooltip} from "react-leaflet";
import './Map.modules.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchObjects} from "../redux/thunk";
import DescriptionBlock from "./DescriptionBlock";
import {setInvisibleAction} from "../redux/map-reducer";

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function MapComponent() {
    const dispatch = useDispatch()
    const mapObjects = useSelector(state => state.map)

    useEffect(() => {
        dispatch(fetchObjects())
    }, [])

    let objects = mapObjects.objects.filter(o => o.visible === true).map(o => {
        let positions = o.perimeter.split(new RegExp(/\B,/gm)).map(i => JSON.parse(i))
        return <Polygon positions={positions} onClick={(e) => {
            e.target.closeTooltip()
        }}>
            <Tooltip>
                <DescriptionBlock object_number={o.object_number} area={o.area} n_zone={o.n_zone}/>
            </Tooltip>
            <Popup positions={positions}>
                <DescriptionBlock object_number={o.object_number} area={o.area} n_zone={o.n_zone}/>
                <button onClick={() => {
                    download('123456,131,13,13', 'test', 'text/csv')
                }}>Оставить объект
                </button>
                <button onClick={() => {
                    dispatch(setInvisibleAction(o.id))
                }}>Удалить объект
                </button>
            </Popup>
        </Polygon>
    })

    return (
        <Map zoom={mapObjects.zoom} center={[mapObjects.lat, mapObjects.lng]}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {objects}
        </Map>
    )
}

export default MapComponent;