import keyPair from './../config/keyPair';
import nodeConfig from './../config/nodeConfig';

const initState = {
    ...keyPair,
    ...nodeConfig,
    aeppUrl: 'http://localhost:8080',
    runningInFrame: false,
    client: null,
    balance: null,
    height: null,
}

const rootReducer = (state = initState, action) => {

    if(action.type === 'SET_HEIGHT') {
        return {
            ...state,
            height: action.height
        }
    } else if(action.type === 'SET_BALANCE') {
        return {
            ...state,
            balance: action.balance
        }
    } 

    return state;
}

export default rootReducer;