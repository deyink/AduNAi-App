import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Touchable, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { mw, w, h, mh } from './styles/responsive'
import Dropdown from './styles/Dropdown'

const networks = [
    { id: 1, Image: source=require('../Amtn.png') },
    { id: 2, Image: source=require('../Aglo.png') },
    { id: 3, Image: source=require('../Aairtel.png') },
    { id: 4, Image: source=require('../Aetisalat.png') },
]

const Airtime = () => {

    const [number, setNumber]= useState('')
    const [amt, setAmt] = useState('')
    const [amtVerify, setAmtVerify] = useState(null)


    const [selectedProviderId, setSelectedProviderId] = useState(null)
    const handleProvider = (id)=>
        {setSelectedProviderId(id)}

    const onChangeNumber = (e)=>{
        setNumber(e.nativeEvent.text)
    }
    const onchangeAmt = (e)=>{
        amtEvent = e.nativeEvent.text;
        setAmt(amtEvent);
        amtEvent.value > 50 ? setAmtVerify(true) : setAmtVerify(false)
    }

  return (
    <View style={{backgroundColor:'#fffcf3', width:w(350), height:'100%', }} >

        {/* header */}
        <View style={{backgroundColor:'#192a56', padding:mw(20)}} >
            <Text style={{marginHorizontal:'auto', color:'white', fontSize:mw(15) }} > 
                Buy Airtime 
            </Text>
        </View>

        {/* container */}
        <View style={{marginTop:h(20), paddingHorizontal:w(15) }} >
            
            {/* dropdon select method */}
            <Text style={{marginBottom:h(10), fontSize:mw(15) }} >
                Select A method 
            </Text>
            <View style={{borderWidth:.7, borderRadius:10}} >
                <Dropdown />  
            </View>

        {/* provider selector */}
        <Text style={{marginTop:h(25), fontSize:mw(15), fontWeight:'700'  }}  >
            Select Your Provider 
        </Text>

        {/* map method for networks */}
        <View style={{flexDirection:'row', marginTop:h(8), justifyContent:'space-between' }} >
            { networks.map( (network) => (

                <TouchableWithoutFeedback key={network.id} onPress={ ()=>handleProvider(network.id)} >  
                    <Image style={[ 
                        styles.provider, 
                        selectedProviderId === network.id && styles.selectedProvider,
                                ]}
                    source={network.Image}    />
                </TouchableWithoutFeedback >
            )
            )
            }
           
        </View>

        <View style={{marginTop:h(25),  }} >
            <Text style={{fontSize:mw(15)}}  >
                Mobile Number
            </Text>

            <TextInput 
            placeholder='Enter Number' 
            keyboardType='numeric' 
            onChange={e=>onChangeNumber(e)}
            style = {{
                height:h(50), 
                paddingHorizontal:8, 
                marginVertical:mh(8), 
                borderWidth:.3, 
                color:'black', 
                borderColor: 'black', 
                borderRadius:8 
            }} />

            <Text style = {{
                textAlign:'right'
            }}> 
                Select From Your Contacts 
            </Text>
        </View>

        <View 
        style = {{
            marginTop:h(20),  
        }}>

            <Text style = {{
                fontSize:mw(15)
            }} >
                Amount
            </Text>
            <View style={{flexDirection:'row'}} >
            <TextInput 
            placeholder='0.00' 
            keyboardType='numeric' 
            onChange={e=>onchangeAmt(e)}
            style = {{
                height:h(45), 
                paddingHorizontal:8, 
                marginVertical:mh(8), 
                borderWidth:.3, 
                color:'black', 
                borderColor: 'black', 
                borderRadius:8,  
                width:w(310)
            }} />
            {  amt.length === 0 ? null : amtVerify ? 
            ( <Image source={require('../check.png')} style={{marginVertical:'auto', right:w(30)}}  /> ) :
            ( <Image source={require('../crossed.png')} style={{marginVertical:'auto', right:w(30) }}  /> ) 
            }
            </View>

            <Text style={{}} > 
                min:50 
            </Text>

        </View>

     </View>

     <TouchableOpacity>
        <Text 
            style = {{
            backgroundColor:'blue', 
            marginVertical:h(25), 
            marginHorizontal:'auto' , 
            padding:mw(17), 
            textAlign:'center', 
            color:'white', 
            width:w(300), 
            borderRadius:20 
            }} >
            Buy 
        </Text>
     </TouchableOpacity>
   
    </View>
  )
}

export default Airtime

const styles = StyleSheet.create({
    provider: {
        borderRadius:5, 
        borderWidth:.08, 
        borderColor:'black'
    },
    selectedProvider: {
        borderWidth: 1.5,
        borderColor: '#192a56',
      },
})


