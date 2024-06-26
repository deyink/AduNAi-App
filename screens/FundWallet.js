import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { mh, mw, h, w } from './styles/responsive'


const FundWallet = ({navigation}) => {

  const [bal, setBal] = useState('0')
  const [fund, setFund] = useState('')

  const onchangeAmt = (e)=>{
    const amtEvent = e.nativeEvent.text
    setBal(amtEvent)
  }

  const handleFund = ()=>{
    fund === 'CARD' ? 
    Alert.alert('You have picked Card as a mode of transaction'):
    Alert.alert('You have picked Transfer as a mode of transaction')
  }

const bala = bal.toLocaleString();
  return (
    <View style={{width:'100%', height:'100%', backgroundColor:'white', paddingHorizontal:mw(5), paddingVertical:mh(30) }} >

        <Text style={{fontSize:mw(15), marginLeft:w(1), marginTop:h(25), fontWeight:700 }} > Fund wallet  </Text>
        <Text style={{fontSize:mw(15), marginHorizontal:'auto', marginVertical:h(15) }} > Wallet Balance  </Text>
        <Text style={{fontSize:mw(15),  marginHorizontal:'auto' }} > ₦0  </Text>

     

       <View style={{flexDirection:'row', marginVertical:mh(20), justifyContent:'space-evenly' }} >
       <TouchableOpacity onPress={()=>setFund('CARD')} style={{padding:mw(15), backgroundColor:'blue',  borderRadius:50 , width:'40%' , height:h(50) }} > 
            <Text style={{textAlign:'center', color:'white', fontSize:mw(13) }} > Card </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>setFund('Transfer')} style={{padding:mw(15), backgroundColor:'blue', borderRadius:50, width:'40%', height:h(50) }} > 
            <Text style={{textAlign:'center', color:'white', fontSize:mw(13) }} > Bank Transfer </Text>
        </TouchableOpacity>
       </View>
       <Text style={{fontSize:mw(30),  marginHorizontal:'auto', marginVertical:h(18),
        }} > ₦{bala}  </Text>
       <TextInput onChange={(e)=>onchangeAmt(e)} placeholder='0' keyboardType='numeric' style={{height:h(50), width:'100%', borderWidth:.2,  paddingHorizontal:w(8)}} />

        <TouchableOpacity onPress={()=>handleFund()} style={{padding:20, backgroundColor:'blue', borderRadius:40, marginTop:h(33) }} >
          <Text style={{color:'white', textAlign:'center'}} > Fund Via {fund} </Text>
        </TouchableOpacity>

    </View>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

export default FundWallet