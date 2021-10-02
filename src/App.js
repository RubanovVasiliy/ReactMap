import React from 'react';
import './App.css';
import MapComponent from "./components/Map";
import {useDispatch, useSelector} from "react-redux";
import {setAllVisibleAction, setInvisibleAction} from "./redux/map-reducer";
import {removeObjectAction, resetExportAction} from "./redux/export-reducer";
import ExportPanel from "./components/ExportPanel";

function App() {
    const dispatch = useDispatch()
    const exportStore = useSelector(state => state.export)

    let exportList = exportStore.objects.map(o =>
        <div onClick={() => {
            dispatch(removeObjectAction(o.id))
        }} key={o.id}>
            {o.object_number}
        </div>
    )

    return (
        <div className="App">
            <MapComponent/>
            <button className="reset btn btn-danger" onClick={() => {
                dispatch(setAllVisibleAction())
                dispatch(resetExportAction())
            }}>Reset
            </button>
            {exportStore.visible && <ExportPanel/>}
        </div>
    );
}

export default App;
