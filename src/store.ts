import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { companyReducer } from './reducers/company';
import { RootActions } from './actions';
import { Company } from './types/company.interface';

export interface CompaniesState {
    companies: [];
    fetching: false;
    errorMessage: null;
    reports: [];
    company: null
};

export interface RootState {
    readonly companies: [],
    readonly fetching: boolean,
    readonly errorMessage: {},
    readonly reports: [];
    readonly company: Company
}

const rootReducer = combineReducers({
    store: companyReducer,
    // report
});


export const store = createStore(
    rootReducer,
    /* preloadedState, */ 
    composeWithDevTools(
        applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
    )
); 