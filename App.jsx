import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
