import * as actions from './actions';
import Constant from './constant';

let initState = {
};

function reducer(state = initState, action) {
    switch (action.type) {
        case actions.FETCH:
            return {...state};
            break;
        case actions.LOADING:
            return {...state};
            break;
        case actions.END:
            return {...state};
            break;
        default:
            return {...state};
            break;
    }
}

export default reducer;