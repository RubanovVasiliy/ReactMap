import {MAP_INIT_MAP, MAP_SET_ALL_VISIBLE, MAP_SET_INVISIBLE} from "./types";

let initialState = {
    lat: 55.004505,
    lng: 82.930597,
    zoom: 12,
    objects: []
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAP_INIT_MAP: {
            return {
                ...state, objects: action.payload.map(o => {
                    o.visible = true
                    return o
                })
            }
        }
        case MAP_SET_ALL_VISIBLE: {
            return {
                ...state, objects: state.objects.map(o => {
                    o.visible = true
                    return o
                })
            }
        }
        case MAP_SET_INVISIBLE: {
            return {
                ...state, objects: state.objects.map(o => {
                    if (o.id.toString() === action.payload.toString()) {
                        o.visible = false
                        return o
                    }
                    return o
                })
            }
        }
        default:
            return state
    }
}

export const initialMapAction = (payload) => ({type: MAP_INIT_MAP, payload})
export const setAllVisibleAction = () => ({type: MAP_SET_ALL_VISIBLE})
export const setInvisibleAction = (payload) => ({type: MAP_SET_INVISIBLE, payload})


export default mapReducer