import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BackButtonHeader, CustomButton, CustomDropdownInput, CustomText, Margin, generalStyle } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

const OnboardingChoiceScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);
  const data1 = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];
  
  return (
    <SafeAreaView className='flex-1' style={generalStyle.body}>
      <BackButtonHeader />
      <Margin vertical={10} />

      <View className='px-4'>
        <CustomText text={"Onboarding"} />
        {/* create a dropdown input in react native for me  */}
        <Margin vertical={30} />
        <CustomDropdownInput value={value} setValue={setValue} data={data1} fieldLabel={"label"} fieldValue={"value"} text={"Do you own a car?"} />
        <Margin vertical={5} />
        <CustomDropdownInput value={value} setValue={setValue} data={data1} fieldLabel={"label"} fieldValue={"value"} text={"Will you drive with your car?"} />

        <Margin vertical={widthPercentageToDP(35)} />
        {/* button */}
        <CustomButton text={"Continue"} onPressed={() => {navigation.navigate('OnboardingOptions')}} />
      </View>

    </SafeAreaView>
  )
}

export default OnboardingChoiceScreen

const styles = StyleSheet.create({})
