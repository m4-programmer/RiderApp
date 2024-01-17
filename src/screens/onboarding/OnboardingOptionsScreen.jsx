import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackButtonHeader, CustomText, Margin, generalStyle } from '../../components'

const OnboardingOptionsScreen = () => {
  return (
    <SafeAreaView style={generalStyle.body}>
        <BackButtonHeader />
        <Margin vertical={10} />
        <ScrollView className='px-4' bounces={false}>
            <CustomText text={"Onboarding"} />
            <Margin vertical={5} />
            <CustomText text={"Please select the necessary documents for you to get onboarded."} size={14} weight={400}  />
        </ScrollView>
    </SafeAreaView>
  )
}

export default OnboardingOptionsScreen

const styles = StyleSheet.create({})