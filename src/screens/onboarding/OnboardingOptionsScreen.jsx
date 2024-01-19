import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackButtonHeader, CustomBox, CustomText, Margin, generalStyle } from '../../components'
import { onboardingOptions } from '../../../constants/data'
import { useNavigation } from '@react-navigation/native'

const OnboardingOptionsScreen = () => {
    const navigation = useNavigation() ;

    const Action = (item, count) => {
        navigation.navigate("DynamicOnboarding", {item: item, count: count})
    }
  return (
    <SafeAreaView style={generalStyle.body}>
        <BackButtonHeader />
        <Margin vertical={10} />
        <ScrollView  bounces={false}>
            <View className='mx-4'>

                <CustomText text={"Onboarding"} />
                <Margin vertical={5} />
                <CustomText text={"Please select the necessary documents for you to get onboarded."} size={14} weight={400}  />
                <Margin vertical={20} />

                {onboardingOptions.map((item, index, array) => {
                    // const length = onboardingOptions.length
                    return <CustomBox key={index} title={item.title} subTitle={item.subTitle} Action={() => Action(item,array.length)} />    
                })}  
                
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default OnboardingOptionsScreen

const styles = StyleSheet.create({})