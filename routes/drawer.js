import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import GroceryStack from './learnStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:HomeStack
    },
    About:{
        screen:AboutStack
    },
    GroceryList:{
        screen:GroceryStack
    }
})

export default createAppContainer(RootDrawerNavigator)