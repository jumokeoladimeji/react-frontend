import { Report } from "./report.interface";
import { CompanyActionTypes } from "../constants/company";

export interface Company {
    _id: string;
    name: string;
    address: string;
    email: string;
    description: string;
    reports: Array<Report>;
}


export interface Companies {
    [id: string]: Company;
}

//get company
export interface GetCompaniesStart {
    type: CompanyActionTypes.GET_COMPANIES_START;
}

export interface GetCompaniesSuccess {
    type: CompanyActionTypes.GET_COMPANIES_SUCCESS;
    companies: Companies
}

export interface GetCompaniesFailure {
    type: CompanyActionTypes.GET_COMPANIES_FAILURE;
}


// read company
export interface ReadCompanyStart {
    type: CompanyActionTypes.READ_COMPANY_START;
}

export interface ReadCompanySuccess {
    type: CompanyActionTypes.READ_COMPANY_SUCCESS;
    company: Company
}

export interface ReadCompanyFailure {
    type: CompanyActionTypes.READ_COMPANY_FAILURE;
}
