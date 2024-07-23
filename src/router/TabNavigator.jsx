import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CART, FAVORITES, HOME, PROFILE} from '../constants/routes';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';
import TabIcon from '../components/navigation/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'white',
      })}>
      <Tab.Screen options={{headerShown: false}} name={HOME} component={Home} />
      <Tab.Screen name={CART} component={Cart} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
