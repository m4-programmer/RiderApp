import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'
import { image } from '../../constants/Index'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
const WelcomeScreen = () => {
    const navigation = useNavigation();
    //navigate user to Onboarding screen after some seconds
    setTimeout(()=> navigation.navigate('Onboarding'), 2500)
  return (
    <SafeAreaView style={{backgroundColor: COLORS.darkMode}} className='flex-1' >
        <StatusBar style='light' />
        <View className='flex-1 justify-center items-center'>
            <Image 
                source={image.splash1}
                style={{width: wp(45), height: hp(45)}}
                resizeMode='contain'
            />
        </View>
        <View className='pb-4'>
            <ActivityIndicator 
                size={"large"}
            />
        </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen