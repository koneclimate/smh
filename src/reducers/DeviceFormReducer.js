import {
    DEVICE_UPDATE,
    DEVICE_CREATE
} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    ssid: '',
    sspassword:'',
    dimmer:0,
    Id:'',

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case DEVICE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case DEVICE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};