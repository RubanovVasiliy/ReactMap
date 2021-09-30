import React from 'react';
import './App.css';
import MapComponent from "./components/Map";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <MapComponent/>
            </div>
        </Provider>
    );
}

export default  App;
