import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../App.css';
import Loader from '../Loader';
import { Company } from '../../types/company.interface';
import Alert from '../Alert';



interface CompanyProps {
    company: Company;
	fetching: boolean;
	errorMessage: string;
}
const CompanyListItemPage = ({ company, fetching,  errorMessage }: CompanyProps) => {
    if (fetching || !company) return <Loader />;
    return (
		<div className="container">
		<Alert errorMessage={errorMessage} />
		<div className="row">
		<Card>
			<Card.Header as="h5"> <b><h1>Name: {company.name}</h1></b></Card.Header>
			<Card.Body>
				<Card.Title>Special title treatment</Card.Title>
				<Card.Text>
				<b>Address:</b> {company.address}
				</Card.Text>
				<Card.Text>
				<b>Email:</b> {company.email}
				</Card.Text>
				<Card.Text>
				<b>Description:</b> {company.description}
				</Card.Text>
				<Card.Text>
				<b>Number of Reports:</b> {company.reports.length}
				</Card.Text>
			</Card.Body>
		</Card>
		<Link to={`/companies/${company._id}`}>
		<h1>Details</h1>
		</Link>
		</div>
	</div>);
} 

export default CompanyListItemPage;
