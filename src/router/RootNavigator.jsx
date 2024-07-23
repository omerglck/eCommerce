import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DETAILS, FILTER, TAB} from '../constants/routes';
import TabNavigator from './TabNavigator';
import Details from '../screens/details';

import {Text} from 'react-native';
import HeaderLeft from '../components/navigation/headerLeft';
import {AppColors} from '../theme/colors';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen
        options={({route}) => ({
          headerLeft: () => <HeaderLeft />,
          headerTitle: () => (
            <Text style={{color: 'white', fontSize: 18}}>
              {route.params?.item?.name || 'Details'}
            </Text>
          ),
          headerStyle: {backgroundColor: AppColors.BACKGROUND},
          headerBackVisible: false,
        })}
        name={DETAILS}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
