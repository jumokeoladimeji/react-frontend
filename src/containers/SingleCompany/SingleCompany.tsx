import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { MDBTable, MDBTableHead } from 'mdbreact';
import { Card } from 'react-bootstrap';

import { readCompany } from '../../actions/company';
import { Company } from '../../types/company.interface';
import { StoreObj } from '../../types/store.interface';
import { Report } from '../../types/report.interface';
import ReportItem  from  '../../components/Reports/ReportItem'

interface SingleCompanyProps extends RouteComponentProps<OwnPropsParams> {
    company: Company;
    readCompany: (id: string) => void;
    fetching: boolean;
    errorMessage: string;
    store: StoreObj
}


class SingleCompany extends Component<SingleCompanyProps> {
    componentDidMount(): void {
        this.props.readCompany(String(this.props.match.params.id));
    }

    renderReports(): JSX.Element[] | null {
        const { reports } = this.props.company;
        return reports.map((report: Report) => {
            return <ReportItem report={report} key={report._id} />;   
        });
    }

    render() {
        const { company } = this.props;

        if (!this.props.company) {
            return null;
        }
        return (
            <div className="container">
                <div className="ui card">
                    <div className="content">
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
                    </div>
                </div>
                <div className="ui card">
                    <div className="content">
                        <Card>
                            <Card.Header as="h5"> <b><h1>Reports</h1></b></Card.Header>
                        </Card>
                    </div>
                </div>
                <MDBTable striped>
                <MDBTableHead>
                    <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Period</th>
                    <th>Year</th>
                    <th>Assignee</th>
                    <th>Deadline</th>
                    <th>submitted</th>
                    <th>URL</th>
                    </tr>
                </MDBTableHead>
                {this.renderReports()}
                </MDBTable>
            </div>
        );
    }
}

interface OwnPropsParams {
    id: string;
}

function mapStateToProps(
    state: SingleCompanyProps,
    ownProps: RouteComponentProps<OwnPropsParams>
) {
    return {
        company: state.store.company,
        fetching: state.store.fetching,
        errorMessage: state.store.errorMessage
    }
}

export default connect(
    mapStateToProps,
    { readCompany }
)(SingleCompany);