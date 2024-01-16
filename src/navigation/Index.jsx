import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import GetYouInScreen from '../screens/SignUp/GetYouInScreen'
import { LandingScreen, LoginScreen, OnboardingChoiceScreen, SignupScreen, UploadPictureScreen, VerifyAccount } from '../screens'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{gestureEnabled: false, gestureDirection: 'horizontal',}} />
        <Stack.Screen name="GetYouIn" component={GetYouInScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} screenOptions={{headerShown: false}}  />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen name="UploadPicture" component={UploadPictureScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="OnboardingChoice" component={OnboardingChoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation