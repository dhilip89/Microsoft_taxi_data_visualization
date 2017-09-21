import * as actions from './actions';
import Constant from './constant';

let initState = {
    pageName: Constant.homepage
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
        case actions.SWITCH_PAGE:
            return Object.assign({}, state, {pageName: action.pageName});
            break;
        default:
            return {...state};
            break;
    }
}

export default reducer;