import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackButtonHeader, CustomButton, CustomText, Margin, generalStyle } from '../../components'
import { useRoute } from '@react-navigation/native'
import { COLORS } from '../../../constants/theme'
import { PaperClipIcon } from 'react-native-heroicons/solid'
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { onboardingOptions } from '../../../constants/data'
const DynamicOnboardingScreen = ({route, navigation}) => {
    const [image, setSelectedImage] = React.useState(null);
    const {item, count} = route.params;

    const Continue = ({id}) =>{
        const data = onboardingOptions;
        console.log(id, count);
        (id !== count) ? navigation.push('DynamicOnboarding',{item: data[id], count: count}) : navigation.navigate("OnboardingOptions")
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
    
    
    console.log(count);
  return (
    <SafeAreaView style={generalStyle.body}>
        <BackButtonHeader />
        <Margin vertical={10} />
        <ScrollView className='mx-4 flex-1' style={{height: '100%'}} bounces={false}>
            <CustomText text={item.title} />
            <Margin vertical={5} />
            <CustomText text={item.extraDescription ?? item.subTitle} size={14} weight={400} />

            <Margin vertical={20} />

            {item.screenType === 'image' && <UploadImageComponent Upload={Upload} image={image} /> }
            
        </ScrollView>
        <View style={{position: 'absolute', bottom: 25, width: '100%'}}>
            <CustomButton text={'Continue'} onPressed={() => Continue({id: item.id})} />
        </View>
    </SafeAreaView>
  )
}
const UploadImageComponent = ({Upload, image}) => {
    return (
        <>
            <TouchableOpacity style={styles.body} onPress={Upload}>
            <PaperClipIcon color={COLORS.primary3}/>
            <Text className='text-white' style={{fontSize: 16, fontWeight: '500'}}>
                Upload image
            </Text>
            </TouchableOpacity>
            {image && (
                <Image source={{ uri: image }} style={{ width: widthPercentageToDP(92), height: 200, marginTop: 15 }} resizeMode='cover' />)}
        </>
      )
}

const vehicleRegistration = () => {
    
}

const EmergencyContact = () => {
    
}

export default DynamicOnboardingScreen

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