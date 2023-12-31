import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import OnboardingScreen from '../screens/OnboardingScreen'
import GetYouInScreen from '../screens/SignUp/GetYouInScreen'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{gestureEnabled: false, gestureDirection: 'horizontal'}} />
        <Stack.Screen name="GetYouIn" component={GetYouInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation