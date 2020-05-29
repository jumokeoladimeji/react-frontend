import React from 'react';
import { Card } from 'react-bootstrap';

import '../App.css';
import Loader from './Loader';
import { Company } from '../types/company.interface';
import Alert from './Alert';



interface CompanyProps {
    company: Company;
	fetching: boolean;
	errorMessage: string;
}
const CompanyListItemPage = ({ company, fetching,  errorMessage }: CompanyProps) => {
    if (fetching || !company) return <Loader />;
    return (
		<div>
			<Alert errorMessage={errorMessage} />
			<Card style={{ width: '50rem' }}>
				<Card.Header as="h2"> <b>Name: {company.name}</b></Card.Header>
				<Card.Body>
					<Card.Title as="h3">Special Title Treatment</Card.Title>
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
					<Card.Link href={`/companies/${company._id}`}>Click here to see more >>></Card.Link>
				</Card.Body>
			</Card>
	</div>);
} 

export default CompanyListItemPage;
