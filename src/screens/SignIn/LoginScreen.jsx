import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { BackButtonHeader, CustomButton, CustomText, CustomTextInput, Margin, generalStyle } from '../../components'
import { COLORS } from '../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={[generalStyle.body,]}>
      {/* Back Button */}
      <BackButtonHeader />
      <ScrollView bounces={false} vertical className='px-2'>
        <CustomText text={"Welcome Back!"} />

        <Margin vertical={15} />
        {/* Input Form */}
        <CustomTextInput text={"Email"} inputType='email' value="" setValue="" />
        
        <CustomTextInput text={"Password"} inputType='text' secure={true} value="" setValue="" />
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

        <CustomButton text={"Login"} />
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