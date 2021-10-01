import {INIT_MAP, SET_ALL_VISIBLE, SET_INVISIBLE} from "./types";

let initialState = {
    lat: 55.004505,
    lng: 82.930597,
    zoom: 12,
    objects: []
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_MAP: {
            return {
                ...state, objects: action.payload.map(o => {
                    o.visible = true
                    return o
                })
            }
        }
        case SET_ALL_VISIBLE: {
            return {
                ...state, objects: state.objects.map(o => {
                    o.visible = true
                    return o
                })
            }
        }
        case SET_INVISIBLE: {
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
export const initialMapAction = (payload) => ({type: INIT_MAP, payload})
export const setAllVisibleAction = () => ({type: SET_ALL_VISIBLE})
export const setInvisibleAction = (payload) => ({type: SET_INVISIBLE, payload})


export default mapReducer