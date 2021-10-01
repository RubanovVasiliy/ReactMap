import {initialMapAction} from "./map-reducer";


export const fetchObjects = () => {
    return dispatch => {
        fetch(`http://localhost:8080/api/getObjects`)
            .then(r => r.json())
            .then(json => dispatch(initialMapAction(json)))
    }
}
