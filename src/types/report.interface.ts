export interface Report {
    _id: string;
    name: string;
    type: string;
    period: string;
    year: number;
    assignee: string;
    deadline: Date;
    submitted: boolean;
    url: string;
}
