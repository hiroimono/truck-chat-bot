import truckListReducer from './trucksListReducer';

import { combineReducers } from 'redux';

const AllReducers = combineReducers({
    truckList: truckListReducer
});

export default AllReducers;
