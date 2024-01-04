import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { COLORS, typography } from '../../../constants/theme';

const CustomButton = ({text, textColor, bgColor=COLORS.primary3, width, onPressed}) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor: bgColor,width: width ?? '100%'}]} onPress={onPressed}>
      <Text style={[typography.body1('dark'), styles.text,{color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        alignItems: 'center',
        padding: hp(2),
        marginVertical: 7,
    },
    text: {
        fontWeight: '500'
    }
})