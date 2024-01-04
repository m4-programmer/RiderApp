import { StyleSheet, Text, View,SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CustomButton, CustomText, CustomTextInput, Margin } from '../../components'
import { COLORS } from '../../../constants/theme';
import { appMode, icons } from '../../../constants/Index';

const GetYouInScreen = () => {
  const mode = 'dark'; //in the future this can come from state or asyn storage
  const statusBar = appMode.dark === mode ? 'light-content' : 'dark-content'
  const Login = () =>{

  }
  const SignUp = () => {

  }
  return (
    <SafeAreaView className='flex-1' style={styles.container}>
      <StatusBar barStyle={statusBar} />
      
      <Image
        source={icons.Board}
        resizeMode='contain'
       />
        <Margin vertical={30} />
       <CustomText text={"Let’s get you in"} />
       <Margin vertical={10} />
       <View style={{width:'90%', marginHorizontal: 300}}>
          <CustomText 
          size={14}
          weight={500}
          lineHeight={18}
            text={"The Uber luxury mobile app is a high-end, premium transportation service designed to cater to a client seeking the ultimate luxury and convenience in their experiences"}
            />
          <Margin vertical={20} />
            
          <CustomButton text={"Sign Up"} onPressed={SignUp}  />
          <CustomButton text={"Login"} bgColor='white' onPressed={Login} />
        </View>

    </SafeAreaView>
  )
}

export default GetYouInScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkMode,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  }
})
