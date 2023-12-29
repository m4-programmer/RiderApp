import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeadingComponent from './HeadingComponent'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FooterComponent from './FooterComponent';
const SplashLayoutComponent = ({splashData}) => {
 const {id,title, subTitle, mode, bgColor, img} = splashData
 
  return (

    <View className='flex-1 ' style={{backgroundColor: bgColor}}>
        {
            ( id === 1 || id === 2 )  ? 
            <FirstDesign id={id} title={title} subTitle={subTitle} mode={mode} bgColor={bgColor} img={img}/> : 
            <SecondDesign id={id} title={title} subTitle={subTitle} mode={mode} bgColor={bgColor} img={img}/> 
        }
    </View>

  )


}
const FirstDesign = ({id,title, subTitle, mode, img}) => {
    return (
            <SafeAreaView  style={{ flex: 1,flexDirection: 'column', justifyContent: 'space-between', }}>
                   <View className='mx-5 '>
                        <StatusBar style={mode === 'dark' ? 'dark' : 'light'} />
                        <HeadingComponent title={title} subTitle={subTitle} mode={mode} paddingTop={hp(4.5)}/>
                   </View>
                   <View className='flex '>
                        <Image source={img} 
                        style={{ 
                            width: id === 1 ? '100%' : '92%', 
                            alignSelf: id === 1 ? 'flex-start' : 'flex-end', 
                            resizeMode: 'cover'
                             }}
                         />
                    </View>

                    <View className='mx-5' style={{ marginBottom: hp(2.0)}}>
                        <FooterComponent id={id} mode={mode} />
                    </View>
            </SafeAreaView>
    )
}

const SecondDesign = ({id,title, subTitle, mode, img}) => {
    return (
        <ImageBackground source={img} style={{ width: '100%', height: hp(100), resizeMode: 'contain' }}>
            <SafeAreaView className='mx-5' style={{ flex: 1, }}>
                    <StatusBar style={mode === 'dark' ? 'dark' : 'light'} />
                    <HeadingComponent title={title} subTitle={subTitle} mode={mode} paddingTop={hp(4.5)}/>

                    <View style={{position: 'absolute', bottom: 0, width: '100%', marginBottom: hp(5)}}>
                        <>
                            <FooterComponent id={id} />
                        </>
                    </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
export default SplashLayoutComponent