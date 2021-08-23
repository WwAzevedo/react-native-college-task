import React from 'react';
import HomeView from '../View/HomeView';
import HomeModel from '../Model/HomeModel';

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

    render = () => {
      return <HomeView 
      count={this.count}
      search={this.state.search}
      onSearchUpdate={this.onSearchUpdate}
      />;
    }
}

export default HomeController;