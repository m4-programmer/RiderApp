import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { BackButtonHeader, CustomButton, CustomText, Margin, generalStyle } from '../../components'
import { COLORS } from '../../../constants/theme'
import * as Icons from "react-native-heroicons/solid";
import * as ImagePicker from 'expo-image-picker';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
const UploadPictureScreen = () => {
  const [image, setSelectedImage] = useState(null);
  const Continue = () =>{
    
  }
  const Upload = async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  
    //todo: to write logic that will send the image to the backend
  }
  return (
    <SafeAreaView style={generalStyle.body}>
      <BackButtonHeader />
      <ScrollView className='px-2 mx-2' >
        <Margin vertical={15} />
        <View>
          <CustomText text={'Upload Your Picture'} weight={600} />
          <Text className='text-white align-middle px-2 mt-4 text-center' style={{fontSize: 16}}>
            Please upload a clear picture of yourself, with high-resolution images
          </Text>
          <Margin vertical={50} />
          {/* Upload Picture Button */}
          <Uploader Upload={Upload} />
          {image && (
          <Image source={{ uri: image }} style={{ width: widthPercentageToDP(92), height: 200, marginTop: 15 }} resizeMode='cover' />)}
        </View>

        <Margin vertical={image ? heightPercentageToDP(7) : heightPercentageToDP(15)} />
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