import React from 'react';
import './App.css';
import MapComponent from "./components/Map";
import {useDispatch} from "react-redux";
import {setAllVisibleAction, setInvisibleAction} from "./redux/map-reducer";

function App() {
    const dispatch = useDispatch()

    return (
        <div className="App">
            <MapComponent/>
            <div>
                <button onClick={() => {
                    dispatch(setAllVisibleAction())
                }}>Reload
                </button>
                <button onClick={() => {
                    dispatch(setInvisibleAction(prompt()))
                }}>Invisible
                </button>
            </div>
        </div>
    );
}

export default App;
