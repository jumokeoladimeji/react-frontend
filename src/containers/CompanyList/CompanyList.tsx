import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import CompanyListItemPage from '../../components/Companies/ListItem';
import { getCompanies } from '../../actions/company';
import { Company } from '../../types/company.interface';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert'
import { StoreObj } from '../../types/store.interface';;






export interface CompanyListProps {
    companies: Company[];
    fetching: boolean;
    getCompanies: () => any;
    errorMessage: string;
    store: StoreObj
    key: string;
}

class CompanyList extends Component<CompanyListProps> {
 
    componentDidMount(): void {
        this.props.getCompanies();
    }

    renderCompanies(): JSX.Element[] | null {
        const { companies, errorMessage, fetching } = this.props;
        return companies.map((company: Company) => {
            return <ListGroup.Item key={company._id}>
                <CompanyListItemPage company={company}  fetching={fetching}  errorMessage={errorMessage} /></ListGroup.Item>;
        });
    }

    render() {
        const { fetching, companies, errorMessage } = this.props;
        if (fetching || !companies) {
            return <Loader />;
        }

        if(errorMessage){
            return  <Alert errorMessage={this.props.errorMessage} />
        }
        return <div>
            {this.renderCompanies()}
         </div>;
    }
}

const mapStateToProps = (state: CompanyListProps) => {
    const newState = {
        companies: state.store.companies,
        fetching: state.store.fetching,
        errorMessage: state.store.errorMessage
    }
    return newState;
};
  

export default connect(
    mapStateToProps,
    { getCompanies }
)(CompanyList);