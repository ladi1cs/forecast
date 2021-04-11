import {actionTypes} from '../constants/actionTypes';
import {Locations} from '../constants/common';

export interface IRootState {
    data: string[];
    current: string;
    endDate: Date;
}

const initialState = {
    data: [],
    current: Object.getOwnPropertyNames(Locations)[0],
    endDate: new Date()
}

export default (
    state: IRootState = initialState, 
    action: any
    ) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {...state, 
                data: action.payload};
        case actionTypes.SET_CURRENT:
            return {...state, 
                current: action.payload};        
        case actionTypes.SET_END_DATE:
            return {...state, 
                endDate: action.payload};
        default:
            return state;
    }

}