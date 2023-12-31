import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, appMode, icons } from '../../../constants/Index'

const FooterComponent = ({id, mode,skip, next}) => {
  
  return (
    <View className='justify-between items-center flex-row  mx-5' >

        <View className='flex-col justify-evenly items-start mt-2'>
            <Image source={id % 2 !== 0 ? icons.Navigation : icons.NavigationOrange} className='h-23 w-23 mb-2' resizeMode='contain' />
            <TouchableOpacity onPress={skip}>
                <Text className='text-lg mt-2' style={{ color: mode === appMode.dark ? COLORS.textDark : COLORS.lightMode }}>Skip</Text>
            </TouchableOpacity>
        </View>


        <TouchableOpacity className='' onPress={next}>
            <Image source={ id % 2 !== 0 ? icons.Loader2 : icons.Loader} className='w-20 h-20' resizeMode='contain' />
        </TouchableOpacity>
    </View>
  )
}

export default FooterComponent