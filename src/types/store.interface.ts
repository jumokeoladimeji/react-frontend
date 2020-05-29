import { Company } from "./company.interface";

export interface StoreObj {
    companies: Company[];
    fetching: boolean;
    errorMessage: string;
    company: Company
}