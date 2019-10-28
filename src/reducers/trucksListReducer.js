const truckListReducer = ( state = {}, action ) => {
    console.log('/////////////////// TruckListReducer-START ///////////////////');
    if (action.type === 'REGISTER_NEW_TRACK') {
        console.log('REGISTER_NEW_TRACK in reducer, state (before): ', state);
        state = {
            ...state,
            trucks: action.trucks
        };
    }

    console.log('REGISTER_NEW_TRACK in reducer, state (after): ', state);
    console.log('/////////////////// TruckListReducer-END ///////////////////');
    return state;
};

export default truckListReducer;
