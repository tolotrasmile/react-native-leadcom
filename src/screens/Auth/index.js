import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import SignIn from './SignIn';

const AuthNavigator = createStackNavigator({
  Login,
  SignIn
});

export default AuthNavigator;
