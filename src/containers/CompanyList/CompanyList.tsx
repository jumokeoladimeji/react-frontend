import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardGroup } from 'react-bootstrap';
import { Company } from '../../types/company.interface';
import Alert from '../../components/Alert';
import { getCompanies } from '../../actions/company';
import CompanyListItemPage from '../../components/ListItem';
import Loader from '../../components/Loader';
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

    renderCompanies(): JSX.Element | null {
        const { companies, errorMessage, fetching } = this.props;
        return (
            <CardGroup>
                {companies.map((company: Company) => {
                    return <CompanyListItemPage key={company._id} company={company}  fetching={fetching}  errorMessage={errorMessage} />
                })}
            </CardGroup>
        );
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