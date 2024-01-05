import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants/theme'
import { CustomButton, CustomText, CustomTextInput, Margin } from '../../components'
import { useState } from 'react'
import * as Icons from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';

function SignupScreen() {
    const [user,setUser] = useState({
        firstName: null,
        lastName: null,
        email: null,
        address: null,
        phone: null,
        password: null,
        password_confirmation: null,
        agree: false
    })
    const navigation = useNavigation()
    const SignUp = () => {
        console.log(user);
    }
  return (
    <SafeAreaView style={{backgroundColor: COLORS.darkMode,flex:1}}>
        {/* Create View for Header Component */}
        <View className="flex flex-row" style={styles.header}>
            <Text>Back Button</Text>
        </View>
        {/* Body Section */}
        <ScrollView style={styles.body} className='px-2' keyboardShouldPersistTaps='' bounces={false}>
            {/* <View style={{paddingHorizontal: 10,}}> */}
                <CustomText text="Create Your Account" />
            {/* </View> */}
            <Margin vertical={20} />

            <View className="flex-row mx-3 px-1 justify-center items-center ">
                <CustomTextInput text="First name" widthPercentage={'50%'} value={user.firstName} setValue={(e)=> setUser({
                    ...user, firstName: e
                })}  />
                <CustomTextInput text="Last name" widthPercentage={'50%'} value={user.lastName} setValue={(e)=> setUser({
                    ...user, lastName: e
                })}  />
            </View>

            <CustomTextInput text="Email" inputType='email'  value={user.email} setValue={(e)=> setUser({...user, email: e})}  />

            <CustomTextInput text="Address"  value={user.address} setValue={(e)=> setUser({...user, address: e})}  />

            <CustomTextInput text="Phone" inputType='numeric' value={user.phone} setValue={(e)=> setUser({...user, phone: e})}  />

            <CustomTextInput text="Password" secure={true}  value={user.password} setValue={(e)=> setUser({...user, password: e})}  />

            <CustomTextInput text="Confirm Password" secure={true} value={user.password_confirmation} setValue={(e)=>setUser({...user, password_confirmation: e})}  />
            
            {/* Terms of service section section*/}
            <View className='flex-row  mx-2 pt-3' style={{width: '100%', gap: 10}}>
                <TouchableOpacity style={styles.checkBox} onPress={()=>{ setUser({...user,agree:!user.agree});}}>
                    {user.agree && <Icons.CheckIcon size={15}   color={COLORS.darkMode} fill='white' />}
                </TouchableOpacity>
                <CustomText text="By signing up, you agree to the "  weight="500" size={14} lineHeight={20} childIsLink={false} childrenColor={COLORS.primary}>
                    Terms of Service and Privacy Policy
                </CustomText>
            </View>
            {/* End of Terms and condition section */}
            <Margin vertical={10} />
            {/* SignUp Button */}
            <View className='mx-2'>
                <CustomButton text="Sign up" onPressed={SignUp} />
            </View>
            <Margin vertical={5} />
            {/* Bottom Text */}
            <CustomText text="Already have an account? " childIsLink={true} navigateChild={() => navigation.navigate('Login')} weight="500" size={14} childrenColor={COLORS.primary}>
                 Login
             </CustomText>
        </ScrollView>
  </SafeAreaView>
  )
}

export default SignupScreen
const styles = StyleSheet.create({  
    header: {
        height: 50,
    },
    body: {

    },
    checkBox: {
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderStyle: "solid",
        width: 20,
        height: 20,
        borderRadius: 1,
        marginTop: 5,
        alignItems: 'center'
        // backgroundColor: COLORS.textLast
    }
})