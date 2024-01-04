import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'
import { appMode } from '../../../constants/Index'

const CustomTextInput = ({inputType='text', text, value, setValue,secure, widthPercentage, bgColor=COLORS.inputColor, mode=appMode.dark, ...props}) => {
  return (
    <View style={[styles.container(bgColor,widthPercentage)]}>
      <Text className="text-white" style={styles.text}>
        {text}
      </Text>
      <TextInput 
        style={styles.input}
        // focusable={true}
        inputMode={inputType}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secure}
        {...props}
        /
        >

      
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  container(bgColor,widthPercentage) {
      return {
        backgroundColor: bgColor,
        height: 70,
        padding: 15,
        marginHorizontal: 7,
        width: widthPercentage

      }
  },
  input: {
    color: "dark" === appMode.dark ? COLORS.mildLight : COLORS.darkMode,
    width: '100%',//width can be 50 or 100 %;
    paddingVertical: 6,
    fontSize: 16,
  },
  text: {
    
  }

})