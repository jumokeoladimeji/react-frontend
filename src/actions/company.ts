import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootActions } from '../actions';
import { RootState } from '../store';
import CompanyService from '../services/company';
import { CompanyActionTypes } from '../constants/company';
import { Company, Companies, GetCompaniesStart, GetCompaniesSuccess, GetCompaniesFailure , ReadCompanyStart, ReadCompanySuccess, ReadCompanyFailure } from '../types/company.interface';
import { alertErrorMessage } from './alert';
import history from './createhistory';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootActions>;



export const getCompaniesStart = (dispatch: Dispatch<GetCompaniesStart>) => {
    dispatch({ type: CompanyActionTypes.GET_COMPANIES_START });
};

export const getCompaniesSuccess = (
    dispatch: Dispatch<GetCompaniesSuccess>,
    response: Companies
) => {
    dispatch({
        type: CompanyActionTypes.GET_COMPANIES_SUCCESS,
        companies: response
    });
};


export const getCompaniesFailure = (dispatch: Dispatch<GetCompaniesFailure>) => {
    dispatch({
        type: CompanyActionTypes.GET_COMPANIES_FAILURE
    });
};

export const getCompanies = ():  ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    getCompaniesStart(dispatch);
    try {
        const res = await CompanyService.list();
        getCompaniesSuccess(dispatch, res.data)
    } catch(e) {
        dispatch(alertErrorMessage('Error loading Companies'));
        getCompaniesFailure(dispatch);
    }
}

export const readCompanyStart = (dispatch: Dispatch<ReadCompanyStart>) => {
    dispatch({ type: CompanyActionTypes.READ_COMPANY_START });
};


export const readCompanySuccess = (
    dispatch: Dispatch<ReadCompanySuccess>,
    response: Company
) => {
    dispatch({
        type: CompanyActionTypes.READ_COMPANY_SUCCESS,
        company: response
    });
};


export const readCompanyFailure = (dispatch: Dispatch<ReadCompanyFailure>) => {
    dispatch({
        type: CompanyActionTypes.READ_COMPANY_FAILURE
    });
};

export const readCompany = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    readCompanyStart(dispatch);
    try {
        const res =  await CompanyService.read(id);
        readCompanySuccess(dispatch, res.data)
    } catch(e) {
        dispatch(alertErrorMessage('Error loading Company'));
        readCompanyFailure(dispatch);
    }
}


// POST COMPANY
interface PostCompanyStart {
    type: CompanyActionTypes.POST_COMPANY_START;
}

interface PostCompanySuccess {
    type: CompanyActionTypes.POST_COMPANY_SUCCESS;
    company: Company
}

interface PostCompanyFailure {
    type: CompanyActionTypes.POST_COMPANY_FAILURE;
}

export const postCompanyStart = (dispatch: Dispatch<PostCompanyStart>) => {
    dispatch({ type: CompanyActionTypes.POST_COMPANY_START });
};


export const postCompanySuccess = (
    dispatch: Dispatch<PostCompanySuccess>,
    response: Company
) => {
    dispatch({
        type: CompanyActionTypes.POST_COMPANY_SUCCESS,
        company: response
    });
    history.push('/');
};


export const postCompanyFailure = (dispatch: Dispatch<PostCompanyFailure>) => {
    dispatch({
        type: CompanyActionTypes.POST_COMPANY_FAILURE
    });
};

export const postCompany = (company: Company):  ThunkAction<void, RootState, unknown, Action<string>> => async dispatch => {
    postCompanyStart(dispatch);
    try {
        const res =  await CompanyService.post(company);
        postCompanySuccess(dispatch, res.data.data)
    } catch(e) {
        dispatch(alertErrorMessage('Error creating Company'));
        postCompanyFailure(dispatch);
    }
}


export type CompaniesAction =
    | GetCompaniesStart
    | GetCompaniesSuccess
    | GetCompaniesFailure
    | ReadCompanyStart
    | ReadCompanySuccess
    | ReadCompanyFailure
    | PostCompanyStart
    | PostCompanySuccess
    | PostCompanyFailure