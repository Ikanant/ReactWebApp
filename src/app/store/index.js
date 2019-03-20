import { createStore } from 'redux' // We are just going to import one function
import { defaultState } from '../../server/defaultState'

export const store = createStore(
    function reducer (state = defaultState, action) {
        //Always returns a state
        return state;
    }
);