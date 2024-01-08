import { SafeAreaView, StyleSheet, Text, View , ScrollView} from 'react-native'
import React, { useState } from 'react'
import { BackButtonHeader, CustomButton, CustomText, CustomTextInput, Margin, generalStyle } from '../../components'
import { COLORS } from '../../../constants/theme'
import { useNavigation } from '@react-navigation/native'


const VerifyAccount = () => {
  const email = "test@test.com"
  const [code, setCode] = useState()
  const timer = "00:59"
  const navigation = useNavigation()
  const VerifyAccount = () =>{
    console.log(code);
    alert("Account Verified")
    navigation.navigate('UploadPicture')
  }
  return (
    <SafeAreaView style={[generalStyle.body]}>
      <BackButtonHeader />
      <ScrollView className='px-2'>
        <CustomText text={"Verify Account"} weight={"600"} />
        <Margin vertical={7} />
        <CustomText text={"Code has been sent to "} size={16} weight={500} childrenColor={COLORS.primary} lineHeight={30}>
            {email}
        </CustomText>
        <CustomText text={"Enter the code to verify your account "} size={14} weight={"500"} lineHeight={20} />
        <Margin vertical={30} />
        {/* Input */}
        <CustomTextInput text={"Enter Code"} value={code} setValue={setCode} placeholder={"4 digit code"} placeholderTextColor={COLORS.mildLight}  />

        <Margin vertical={20} />
        {/* Bottom text */}
        <CustomText text={"Didn't Receive Code? "} size={14} weight={500} childrenColor={COLORS.primary}  lineHeight={30}>
            Resend Code
        </CustomText>

        <CustomText text={`Resend code in ${timer}`} size={14} weight={"500"} lineHeight={20} />
        <Margin vertical={100} />

        <CustomButton text={"Verify Account"} onPressed={VerifyAccount} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default VerifyAccount

const styles = StyleSheet.create({})