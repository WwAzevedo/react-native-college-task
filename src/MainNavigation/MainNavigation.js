import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeController from '../Screen/Catalog/Controller/CatalogController';
import ProductInfoController from '../Screen/ProductInfo/Controller/ProductController';

const CatalogHome = createDrawerNavigator({
    Places: createStackNavigator({
        Home: HomeController,
        ProductInfo: ProductInfoController
        // Novas telas aqui
    })
})

const AppContainer = createAppContainer(CatalogHome);

export default class MainNavigation extends React.Component {
    render = () => {
        <AppContainer />
    };
}