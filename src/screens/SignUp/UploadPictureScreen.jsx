import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonHeader, CustomButton, CustomText, Margin, generalStyle } from '../../components'
import { COLORS } from '../../../constants/theme'
import * as Icons from "react-native-heroicons/solid";
const UploadPictureScreen = () => {
  const Continue = () =>{
    
  }
  const Upload = () =>{
    alert("upload is working")
    //to write logic that will handle image uploads
  }
  return (
    <SafeAreaView style={generalStyle.body}>
      <BackButtonHeader />
      <ScrollView className='px-2 mx-2' >
        <Margin vertical={15} />
        <View>
          <CustomText text={'Upload Your Picture'} weight={600} />
          <Text className='text-white align-middle px-2 mt-4' style={{fontSize: 16}}>
            Please upload a clear picture of yourself, with high-resolution images
          </Text>
          <Margin vertical={50} />
          {/* Upload Picture Button */}
          <Uploader Upload={Upload} />
        </View>

        <Margin vertical={150} />
        <View>
          <CustomButton onPressed={Continue} text={"Continue"} />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}
const Uploader = ({Upload}) => {
  return (
    <TouchableOpacity style={styles.body} onPress={Upload}>
      <Icons.PaperClipIcon color={COLORS.primary3}/>
      <Text className='text-white' style={{fontSize: 16, fontWeight: '500'}}>
        Upload your picture
      </Text>
    </TouchableOpacity>
  )
}

export default UploadPictureScreen

const styles = StyleSheet.create({
  body:{
    borderStyle: 'dashed',
    borderColor: COLORS.primary3,
    borderWidth: 2,
    backgroundColor: COLORS.inputColor,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: 'row'
  }
})