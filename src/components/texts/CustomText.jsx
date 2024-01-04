import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'

const CustomText = ({text, weight, size, paddingHorizontal, fontFamily, color,childrenColor, align,children,lineHeight  }) => {
  return (
    <View>
      <Text style={styles.text(weight, size, paddingHorizontal, fontFamily, color, align,lineHeight)}>{text} 
            <Text style={{color: childrenColor}}>{children}</Text> 
      </Text>
      
    </View>
  )
}

export default CustomText

const styles = StyleSheet.create({
    text(weight, size,align, paddingHorizontal, fontFamily, color,lineHeight) {
        return {
            fontWeight: weight ?? '800',
            fontSize: size ?? 36,
            alignSelf: align ?? 'center',
            paddingHorizontal: paddingHorizontal,
            fontFamily: fontFamily,
            color: color ?? COLORS.lightMode,
            lineHeight: lineHeight
        }
    }
})