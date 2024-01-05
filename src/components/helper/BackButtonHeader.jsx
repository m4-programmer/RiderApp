import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import {ArrowLeftIcon} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
const BackButtonHeader = () => {
    const navigation = useNavigation();
  return (
    <Pressable className="flex flex-row px-4 pt-3" style={styles.header} onPress={()=>{navigation.goBack()}}>
        <ArrowLeftIcon size={25} color={'white'}  />
    </Pressable>
  )
}

export default BackButtonHeader

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: '100%'
    },
})