import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import SplashLayoutComponent from '../components/splash/SplashLayoutComponent'
import { splashData } from '../../constants/data'
import { useNavigation } from '@react-navigation/native'
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const slideRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current
  const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  
  const next = () => {
    if (currentIndex < splashData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 })
      
    }else{
      navigation.navigate('GetYouIn')
    }
  }
  
  const skip = () =>{
    
    navigation.navigate('GetYouIn')
  }

  return (
        
        <FlatList
          data={splashData}
          renderItem={({item})=><SplashLayoutComponent splashData={item} skip={skip} navigation={navigation} next={next}  />} 
          keyExtractor={(item)=> item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
            
  )
}

export default OnboardingScreen