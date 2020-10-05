import React from 'react';
import Header from '../components/shared/Header/Header';
import HeaderLinks from '../components/shared/Header/HeaderLinks';
import AppBar from "@material-ui/core/AppBar";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchProviderByName from '../actions/searchByNameAction';
import * as getCountriesAction from '../actions/getUtilsAction';
import * as getBusinessTypesAction from '../actions/getBusinessTypesAction';
import * as financialServicesAction from '../actions/getFinancialServiceAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MobileHeader from '../components/shared/Header/PhoneHeader';


class HeaderContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }

    render() {
        return (
          <div >
          {this.state.matches && ( <Header
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />)}
          {!this.state.matches && ( 
          <MobileHeader/>)}
          </div>
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchByName: searchProviderByName.searchProviderByName,
        getCountriesList: getCountriesAction.getCountriesList,
        getBusinessTypes: getBusinessTypesAction.getBusinessTypes,
        getFinancialServices: financialServicesAction.getFinancialServiceList
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeaderContainer);