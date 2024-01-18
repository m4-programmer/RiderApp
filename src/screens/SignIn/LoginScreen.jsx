import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { BackButtonHeader, CustomButton, CustomText, CustomTextInput, Margin, generalStyle } from '../../components'
import { COLORS } from '../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
    const [user,setUser] = useState({
        email: null,
        password: null,
        rememberMe: false
    })
    const Login = () => {
        navigation.navigate('HomeScreen')
    }
  return (
    <SafeAreaView style={[generalStyle.body,]}>
      {/* Back Button */}
      <BackButtonHeader />
      <ScrollView bounces={false} vertical className='px-2'>
        <CustomText text={"Welcome Back!"} />

        <Margin vertical={15} />
        {/* Input Form */}
        <CustomTextInput text={"Email"} inputType='email' value={user.email} setValue={(e)=>{setUser({...user, email:e })}} />
        
        <CustomTextInput text={"Password"} inputType='text' secure={true} value={user.password} setValue={(e)=>{setUser({...user, password:e })}} />
        {/* Part for Showing Forgot password Link and Remember me button */}
        <View style={styles.flexBox} className='px-2'>
            <View>
                {/* To design togo box */}
                <Text className='text-white'>
                    Remember me
                </Text>
            </View>
            <CustomButton text={"Forgot Password?"} bgColor='transparent' textColor={"white"} width={'50%'} />

        </View>

        <CustomButton text={"Login"} onPressed={Login} />
        <Margin vertical={5} />
        <CustomText text="You don't have an account? " childIsLink={true} navigateChild={() => navigation.navigate('Signup')} weight="500" size={14} childrenColor={COLORS.primary}>
                 Signup
             </CustomText>
      </ScrollView>

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({  
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    }
})