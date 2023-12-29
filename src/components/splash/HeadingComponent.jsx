import { View, Text } from 'react-native'
import React from 'react'
import { typography } from '../../../constants/theme'

const HeadingComponent = ({title, subTitle, mode='dark', paddingTop}) => {
  return (
    <View style={{paddingTop: paddingTop}}>
      <Text style={typography.header2(mode)}>{title}</Text>
      <Text style={typography.body1(mode)}>{subTitle}</Text>
    </View>
  )
}

export default HeadingComponent