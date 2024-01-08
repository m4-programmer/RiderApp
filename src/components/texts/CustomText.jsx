import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'

const CustomText = ({text, weight, size, paddingHorizontal, fontFamily, color,childrenColor, align,children,lineHeight,childIsLink,navigateChild  }) => {
  return (
    <Pressable>
      <Text style={styles.text(weight, size, paddingHorizontal, fontFamily, color, align,lineHeight)}>{text} 
            {childIsLink ? (
          <TouchableOpacity onPress={navigateChild} >
            <Text style={{ color: childrenColor ,}}>{children}</Text>
          </TouchableOpacity>
        ) : (
          <Text style={{ color: childrenColor }}>{children}</Text>
        )}
      </Text>
      
    </Pressable>
  )
}

export default CustomText

const styles = StyleSheet.create({
    text(weight, size,align, paddingHorizontal, fontFamily, color,lineHeight) {
        return {
            fontWeight: weight ?? '800',
            fontSize: size ?? 36,
            textAlign: align ?? 'center',
            paddingHorizontal: paddingHorizontal,
            fontFamily: fontFamily,
            color: color ?? COLORS.lightMode,
            lineHeight: lineHeight,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
            
        }
    }
})