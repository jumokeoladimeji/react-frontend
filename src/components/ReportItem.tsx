import React from 'react';

import '../App.css';
import { Report } from '../types/report.interface';


interface ReportProps {
    report: Report;
}

const ReportItem = ({ report }: ReportProps) => {
    return (
        <tbody>
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
        </tbody>     
    );
} 

export default ReportItem;
