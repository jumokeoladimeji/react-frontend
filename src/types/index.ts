import { Report } from "./report.interface";
import { Company } from "./company.interface";

export interface CompnaqlStore {
    fetching: boolean;
    companies?: Company[];
    reports?: Report[];
    company?: Company;
    report?: Report;
}