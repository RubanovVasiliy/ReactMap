import {
    EXPORT_ADD_OBJECT, EXPORT_REMOVE_OBJECT, EXPORT_RESET,
    EXPORT_SET_INVISIBLE,
    EXPORT_SET_VISIBLE
} from "./types";

let initialState = {
    visible: false,
    objects: []
}

const exportReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXPORT_ADD_OBJECT: {
            let equal = false
            state.objects.forEach(o => {
                if (o.id.toString() === action.payload.id.toString()) {
                    equal = true
                }
            })
            if(equal){
                return state
            }
            return {...state, objects: [...state.objects, action.payload], visible: true}
        }
        case EXPORT_RESET: {
            return {...state, objects: [], visible: false}
        }
        case EXPORT_REMOVE_OBJECT: {
            return { ...state, objects: state.objects.filter(o => o.id !== action.payload)}
        }
        case EXPORT_SET_INVISIBLE: {
            return {...state, visible: false}
        }
        default:
            return state
    }
}

export const addToExportAction = (payload) => ({type: EXPORT_ADD_OBJECT, payload})
export const setVisibleAction = (payload) => ({type: EXPORT_SET_VISIBLE, payload})
export const setInvisibleAction = () => ({type: EXPORT_SET_INVISIBLE})
export const resetExportAction = () => ({type: EXPORT_RESET})
export const removeObjectAction = (payload) => ({type: EXPORT_REMOVE_OBJECT, payload})


export default exportReducer