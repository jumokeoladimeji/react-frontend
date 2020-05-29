import React from 'react';
import { MDBTableBody } from 'mdbreact';

import '../../App.css';
import { Report } from '../../types/report.interface';


interface ReportProps {
    report: Report;
}

const ReportItem = ({ report }: ReportProps) => {
    return (
            <MDBTableBody>
            {/* <Link to={`/reports/${report._id}`}> */}
                <tr>
                <td>{report.name}</td>
                <td>{report.type}</td>
                <td>{report.period}</td>
                <td>{report.year}</td>
                <td>{report.assignee}</td>
                <td>{report.deadline}</td>
                <td>{report.submitted}</td>
                <td>{report.url}</td>
                </tr>
            {/* </Link> */}
        </MDBTableBody>
    );
} 

export default ReportItem;
