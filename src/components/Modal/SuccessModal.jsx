import { ActivityIndicator, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { COLORS } from '../../../constants/theme'
import Margin from '../helper/Margin'
import icons from '../../../constants/icons'

export default function SuccessModal({visible, heading, subHeading, img}) {
  return (
    <Modal transparent visible={visible}>
      <View className='bg-white flex-1 items-center justify-center ' style={styles.bg}>
        <View className=' p-6 rounded-lg ' style={styles.modalContent}>
          <Margin vertical={5} />
          {/* Icon */}
          <View style={styles.icon}>
            <Image source={img ?? icons.User} />
          </View>
          <Margin vertical={10} />
          {/* Heading */} 
          <Text className='text-center py-3' style={{fontSize: 20, fontWeight: '600', color: COLORS.primary3}}>
            {heading ?? 'Congratulations!'}
          </Text>
          {/* Sub Heading */}
          <Text className='text-center py-3 mb-5' style={{fontSize: 14, fontWeight: '400', color: COLORS.lightMode}}>
            {subHeading ?? 'Your account is about to be ready, We need to get you onboarded'}
          </Text>
          <Margin vertical={20} />
          {/* Activity indicator */}
          <View className='w-full mb-2'>
            <ActivityIndicator size={'large'} color={COLORS.lightMode}/>
          </View>
          <Margin vertical={5} />
        </View>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  bg:{
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent:{
    elevation: 30,
    width: widthPercentageToDP(80),
    backgroundColor: COLORS.textDark2,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})