import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import FirstScreen from './Components/picturePages/FirstScreen';
import SecondScreen from './Components/picturePages/SecondScreen';
import ThirdScreen from './Components/picturePages/ThirdScreen';
import FourthScreen from './Components/picturePages/FourthScreen';
import WhelcomePage from './Components/RegistreationPage/WelcomePage'
import LoginPage from './Components/RegistreationPage/LoginPage';
import SignUp from './Components/RegistreationPage/SignUp';
import ForgetPassword from './Components/forgetPassword/ForgetPassword';
import DoneEmail from './Components/forgetPassword/DoneEmail';
import ChangePassword from './Components/forgetPassword/ChangePassword';
import UpdatePasswordDone from './Components/forgetPassword/UpdatePasswordDone';
import HomePage from './Components/HomePages/HomePage';

const Stack = createNativeStackNavigator();
const ScreenOptions = {
  headerShown: false,
}
export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={ScreenOptions}>
          <Stack.Screen name='FirstScreen' component={FirstScreen}/>
          <Stack.Screen name='SecondScreen' component={SecondScreen} />
          <Stack.Screen name='ThirdScreen' component={ThirdScreen}/>
          <Stack.Screen name='FourthScreen' component={FourthScreen}/>
          <Stack.Screen name='WhelcomePage' component={WhelcomePage}/>
          <Stack.Screen name='LoginPage' component={LoginPage}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
          <Stack.Screen name='ForgetPassword' component={ForgetPassword}/>
          <Stack.Screen name='DoneEmail' component={DoneEmail}/>
          <Stack.Screen name='ChangePassword' component={ChangePassword}/>
          <Stack.Screen name='UpdatePasswordDone' component={UpdatePasswordDone}/>
          <Stack.Screen name='HomePage' component={HomePage}/>
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: 600,
    height: 800,
    top: 15,
    left: 10
  }
});
