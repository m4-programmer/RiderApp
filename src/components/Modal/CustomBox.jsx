import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const Circle = () => {
    return <View className='' style={styles.circle} >
            <Text className='font-semibold' style={{fontSize: 20,}}>#</Text>
    </View>
}
const CustomBox = ({title, subTitle, Action,completed}) => {
    
  return (
    <TouchableOpacity onPress={Action} className='flex-1 flex-row justify-between items-center' style={[styles.container, {borderColor: completed && COLORS.mildLight,
        borderWidth: completed && 0.5,}]}>
      {/* Left side */}
      <View className='flex-row gap-2  ' style={styles.left}>
           <Circle  /> 
            <View className='p-1' style={{ width: '80%', }}>
                <Text className='text-white font-semibold py-2' style={{fontSize: 18}}>{title}</Text>
                <Text  style={{ color: COLORS.mildLight, fontSize: 14, textAlign: 'left', }}>
                {subTitle}
                </Text>
          
            </View>
      </View>

      {/* Right Side */}
      <View className='' style={styles.right}>
        <ChevronRightIcon color={COLORS.mildLight} />
      </View>
    </TouchableOpacity>
  )
}

export default CustomBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.inputColor,
        width: '100%',
        borderRadius: 15,
        padding: 20,
        gap: 10,
        overflow: 'hidden',
        marginVertical: 5,        
    },
    left: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '96%',
    },
    right: {
        paddingRight: 20,
    },
    circle: {
        backgroundColor: COLORS.primary,
        height: 60,
        width: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleIcon: {

    }
})