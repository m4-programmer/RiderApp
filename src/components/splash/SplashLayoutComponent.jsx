import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeadingComponent from './HeadingComponent'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FooterComponent from './FooterComponent';
const SplashLayoutComponent = ({splashData, skip, navigation, next}) => {
 const {id,title, subTitle, mode, bgColor, img, } = splashData
 const CustomStatusBar = ({ mode }) => {
    return (
      <View>
        {mode === 'dark' ? (
          <StatusBar style="light"  />
        ) : (
          <StatusBar style="dark" />
        )}
      </View>
    );
  };
  
  return (

    <View className='flex-1 ' style={{backgroundColor: bgColor, width: wp(100), height: '100%'}}>
        <CustomStatusBar mode={mode} />
        {
            ( id === 1 || id === 2 )  ? 
            <FirstDesign id={id} title={title} subTitle={subTitle} mode={mode} bgColor={bgColor} img={img} next={next} skip={skip}/> : 
            <SecondDesign id={id} title={title} subTitle={subTitle} mode={mode} bgColor={bgColor} img={img} next={next} skip={skip}/> 
        }
    </View>

  )


}
const FirstDesign = ({id,title, subTitle, mode, img, next, skip}) => {
    return (
            <SafeAreaView  style={{ flex: 1,flexDirection: 'column', justifyContent: 'space-between', }}>
                   <View className='mx-5 '>
                        
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
                        <FooterComponent id={id} skip={skip} next={next} mode={mode}/>
                    </View>
            </SafeAreaView>
    )
}

const SecondDesign = ({id,title, subTitle, mode, img, next, skip}) => {
    return (
        <ImageBackground source={img} style={{ width: '100%', height: hp(100), resizeMode: 'contain' }}>
            <SafeAreaView className='mx-5' style={{ flex: 1, }}>
                    <HeadingComponent title={title} subTitle={subTitle} mode={mode} paddingTop={hp(4.5)}/>

                    <View style={{position: 'absolute', bottom: 0, width: '100%', marginBottom: hp(5)}}>
                        <>
                            <FooterComponent id={id} skip={skip} next={next} mode={mode} />
                        </>
                    </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
export default SplashLayoutComponent