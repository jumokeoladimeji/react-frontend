import { Reducer } from 'redux';

import { CompanyActionTypes } from '../constants/company';
import { CompaniesAction } from '../actions/company'
import { CompnaqlStore } from '../types';


// Initial State
export const DEFAULT_STATE: CompnaqlStore = { 
    companies: [], fetching: false, reports: []
};


export const companyReducer: Reducer<CompnaqlStore, CompaniesAction> = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CompanyActionTypes.GET_COMPANIES_START:
        return Object.assign({}, state, { fetching: true });


    case CompanyActionTypes.GET_COMPANIES_SUCCESS:
        return Object.assign({}, state, { fetching: false, companies: action.companies });
    
    case CompanyActionTypes.GET_COMPANIES_FAILURE:
        return Object.assign({}, state, { fetching: false });
    
    case CompanyActionTypes.READ_COMPANY_START:
        return Object.assign({}, state, { fetching: true });
    
    case CompanyActionTypes.READ_COMPANY_SUCCESS:
        return Object.assign({}, state, { fetching: false, company: action.company });
    
    case CompanyActionTypes.READ_COMPANY_FAILURE:
        return Object.assign({}, state, { fetching: false });

    /// neede to check
    case CompanyActionTypes.POST_COMPANY_START:
        return Object.assign({}, state, { fetching: true});
    
    case CompanyActionTypes.POST_COMPANY_SUCCESS:
        return Object.assign({}, state, { fetching: false, company: action.company });
    
    case CompanyActionTypes.POST_COMPANY_FAILURE:
        return Object.assign({}, state, { fetching: false });

    default:
      return state
  }
}