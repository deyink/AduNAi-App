import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { w, mw, mh, h } from './styles/responsive'
import axios from 'axios';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(null);
  const [emailVerify, setEmailVerify] = useState(null)

  const onChangeEmail = (e)=>{
    const emailEvent = e.nativeEvent.text
    setEmail(emailEvent);  
     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    regex.test(emailEvent) ? setEmailVerify(true) : setEmailVerify(false)

  }
  const onChangePassword = (e)=>{
    const passwordEvent = e.nativeEvent.text;
    setPassword(passwordEvent)
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/ ;
    regex.test(passwordEvent) ? setPasswordVerify(true) : setPasswordVerify(false) 
  }

  const handleSubmit = ()=>{
    const userData = {
      email: email,
      password,
    } 
    axios
    .post("http://192.168.0.223:5001/Login", userData)
    .then( res => {
      console.log(res.data) ;

      if(res.data.status === 'ok' ){
        navigation.navigate('Homepage');
        Alert.alert('Welcome Back')         
      }
      else if (res.data.data ===  " User doesn't exist!! "  )
      {
        Alert.alert('User Does not Exist')
      }
    } )


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
        onChange={ (e) => onChangeEmail(e) }
        placeholder="Email"
        keyboardType=""
      />
      </View>

      <View style={{flexDirection:'row'}} >
      <TextInput
        style={styles.input}
        onChange={ e => onChangePassword(e) }
        placeholder="Password"
        keyboardType=""
        
      />
        
          
      </View>

      <TouchableOpacity style={styles.btn} onPress={()=>handleSubmit()} >
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