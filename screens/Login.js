import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { w, mw, mh, h } from './styles/responsive'

const Login = ({navigation}) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [nameVerify, setNameVerify] = useState(null)

  const onChangeName = (e)=>{
    const nameEvent = e.nativeEvent.text;
    setName(nameEvent)
    nameEvent.length > 3 ? setNameVerify(true) : setNameVerify(false)  
  }
  const onChangePassword = (e)=>{
    const passwordEvent = e.nativeEvent.text;
    setPassword(passwordEvent)
  }

  return (
    <View style={styles.bground} >
      <View style={styles.card} >
        <Text style={styles.head} > Welcome! </Text>
        <Text style={{ textAlign:"center", color:'gray', marginBottom:h(15)  }} > Log in to continue </Text>

        {/* inputs */}
        <View style={{flexDirection:'row'}} > 
        <TextInput
        style={styles.input}
        onChange={ (e) => onChangeName(e) }
        placeholder="Username"
        keyboardType=""
      />
      { name.length === 0 ? null : nameVerify ?   
       ( <Image source={require('../check.png')} style={{marginVertical:'auto', right:w(30)}}  /> ) :
       ( <Image source={require('../crossed.png')} style={{marginVertical:'auto', right:w(30) }}  /> )  }
      </View>
      <TextInput
        style={styles.input}
        onChange={ e => onChangePassword(e) }
        placeholder="Password"
        keyboardType=""
      />

      <TouchableOpacity style={styles.btn} >
        <Text style={{color: 'white', fontSize: 15, textAlign:'center' }} > Login  </Text>
      </TouchableOpacity>

      <Text style={{color:'white', marginTop:25, marginBottom:10 ,marginLeft:15, marginRight:20 }} >
        Not Yet a Member ? 
        </Text>
        <TouchableOpacity style={{ padding:10, backgroundColor:'blue',}} onPress={ ()=>navigation.navigate('Signup') } >
        <Text style={{color:'#fffcf3', textAlign:'center' }} >Signup</Text>
        </TouchableOpacity>
       
        
      </View>

     <TouchableOpacity style={{ width:w(35), right:w(-300), marginBottom:h(5),}} onPress={()=>navigation.navigate('Homepage')}  >
        <Text style={{color:'white', fontSize:20, textAlign:'right', }}  >
            Skip
        </Text>
    </TouchableOpacity>

    
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    bground:{
        height: '100%',
        width: '100%',
        backgroundColor: '#192a56'
    },

    card:{
        height: 'auto',
        width: w(330),
        backgroundColor: '#2f3f66',
        margin: 'auto',
        borderRadius: 10
    },
    head:{
        color: '#fffcf3',
        fontSize: mw(23),
        marginHorizontal: '35%',
        marginVertical:mh(5)
        
        
    },
    input: {
        height: 53,
        margin: 12,
        borderWidth: .5,
        color: 'white',
        borderColor: 'white',
        paddingHorizontal:8,
        backgroundColor:'#465477',
        fontSize:mw(15),
        borderRadius:10,
        width: w(310)
      },
      btn:{
        marginHorizontal: 'auto',
        marginVertical: 20,
        paddingHorizontal: 25,
        paddingVertical: 17,
        backgroundColor: '#192a56'  ,
        width:w(300),
        borderRadius:30,
            
        
    }

})