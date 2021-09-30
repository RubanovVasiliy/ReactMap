import {INIT_MAP} from "./types";
import {mapAPI} from "../api/api";

let initialState = {
    lat: 55.030006,
    lng: 82.920474,
    zoom: 14,
    objects: []
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_MAP: {
            return {...state, objects: action.payload}
        }
        default:
            return state
    }
}

export const initialMap = (payload) => ({type: INIT_MAP, action: payload})

export const loadObjects = async () => {
    let response = await mapAPI.getObjects()
    //dispatch(initialMap(response))
}

export default mapReducer