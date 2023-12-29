import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SplashLayoutComponent from '../components/splash/SplashLayoutComponent'
import { splashData } from '../../constants/data'
const OnboardingScreen = () => {
    const [id, setId]  = React.useState(0);
    React.useEffect(()=>{
        setInterval(()=>{
            setId((prevId) => (prevId < 3 ? prevId + 1 : 0));
        }, 1000);
        
    },[])
  return (
    <>
        {/* first design the splash screen */}
        {/* Next we iterate through the screens */}

        <SplashLayoutComponent splashData={splashData[id]} />
    </>
  )
}

export default OnboardingScreen