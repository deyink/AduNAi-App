import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { mh, mw, h, w } from './styles/responsive'

const FundWallet = () => {

  const [bal, setBal] = useState('₦0')

  const onchangeAmt = (e)=>{
    const amtEvent = e.nativeEvent.text
    setBal(amtEvent)
  }

  return (
    <View style={{width:'100%', height:'100%', backgroundColor:'white', paddingHorizontal:mw(5), paddingVertical:mh(30) }} >

        <Text style={{fontSize:mw(15), marginLeft:w(1), marginTop:h(25), fontWeight:700 }} > Fund wallet  </Text>
        <Text style={{fontSize:mw(15), marginHorizontal:'auto', marginVertical:h(15) }} > Wallet Balance  </Text>
        <Text style={{fontSize:mw(15),  marginHorizontal:'auto' }} > ₦0  </Text>

     

       <View style={{flexDirection:'row', marginVertical:mh(20), justifyContent:'space-evenly' }} >
       <TouchableOpacity style={{padding:mw(15), backgroundColor:'blue',  borderRadius:50 , width:'40%' , height:h(50) }} > 
            <Text style={{textAlign:'center', color:'white', fontSize:mw(13) }} > Card </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{padding:mw(15), backgroundColor:'blue', borderRadius:50, width:'40%', height:h(50) }} > 
            <Text style={{textAlign:'center', color:'white', fontSize:mw(13) }} > Bank Transfer </Text>
        </TouchableOpacity>
       </View>
       <Text style={{fontSize:mw(30),  marginHorizontal:'auto', marginVertical:h(18),
        }} > ₦{bal}  </Text>
       <TextInput onChange={(e)=>onchangeAmt(e)} placeholder='₦0' keyboardType='numeric' style={{height:h(50), width:'100%', borderWidth:.2,  paddingHorizontal:w(8)}} />
    </View>
  )
}

export default FundWallet