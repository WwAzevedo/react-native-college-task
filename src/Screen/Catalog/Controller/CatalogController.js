import React from 'react';
import HomeView from '../View/CatalogView';
import HomeModel from '../Model/CatalogModel';

class HomeController extends React.Component{
    
  constructor() {
      super();
        let homeModel = new HomeModel();
        console.log(homeModel.returnText());

      this.state = {
        count: 0,
        isRunning: false,
        search: '',
      };

    }

    onSearchUpdate = (text) => {
      this.setState({
        search: text,
      })
    }

    goToProductInfo = () => {
      this.props.navigation.navigate['ProductInfo']
    }

    render = () => {
      return <HomeView 
      count={this.count}
      search={this.state.search}
      onSearchUpdate={this.onSearchUpdate}
      goToProductInfo={this.goToProductInfo}
      />;
    }
}

export default HomeController;