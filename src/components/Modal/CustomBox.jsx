import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

const Circle = () => {
    return <View className='' style={styles.circle} >
                <Text className='font-semibold' style={{fontSize: 20,}}>#</Text>
    </View>
}
const CustomBox = ({title, subTitle, Action}) => {
    const modifiedSubTitle = subTitle.length >= 34 ? `${subTitle}\n` : subTitle;
    console.log(subTitle.length >= 34 ? `${subTitle} `+ "\n" : subTitle);
  return (
    <TouchableOpacity onPress={Action} className='flex-1 flex-row justify-between items-center' style={styles.container}>
      {/* Left side */}
      <View className='flex-row gap-2 ' style={styles.left}>
           <Circle  /> 
            <View className='' style={{flexWrap: 'wrap', }}>
                <Text className='text-white font-semibold py-1' style={{fontSize: 18}}>{title}</Text>
                {modifiedSubTitle.split('\n').map((text, index) => (
            <Text key={index} style={{ color: COLORS.mildLight, fontSize: 14 }}>
              {text}
            </Text>
          ))}
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
        padding: 25,
        gap: 15,
        // flex: 1,
    },
    left: {
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    right: {

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