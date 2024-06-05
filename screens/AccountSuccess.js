import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { h, mw, w } from './styles/responsive'

const AccountSuccess = ({navigation}) => {
  return (
    <View style={{ height:h(700), width:w(350), backgroundColor:'#fffcf3', padding:mw(10) }} >
        <View>
            <Image style={{margin:'auto', marginTop:h(150) }} source={require('../thumbs.png')} />
            <Text style={{margin:'auto', marginTop:h(30), fontSize:mw(18), fontWeight:'700'  }} > CONGRATULATIONS ! ! ! </Text>
            <Text style={{margin:'auto', marginTop:h(10), textAlign:'center', fontSize:mw(15) }} > Your Account Has been Successfully created. Enjoy Paying Bills Easiest Ever</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Homepage')} style={{width:w(300), margin:'auto'  }} >
                <Text style={{backgroundColor:'blue', color:'#fffcf3', padding:15, fontSize:mw(15), textAlign:'center', bottom:h(-160), borderRadius:30 }} > Get Started </Text>
                
            </TouchableOpacity>
            <Text style={{ bottom:h(-180), textAlign:'center' }} > By Clicking, You Agreed to Our Privacy Policy, Terms and Agreement </Text>
            
        </View>

    </View>
  )
}

export default AccountSuccess