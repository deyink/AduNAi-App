import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { h, mw, w } from './styles/responsive'
import axios from 'axios'



const Signup = ({navigation}) => {

  const [name, setName] = useState('')
  const [nameVerify, setNameVerify ] = useState(false)
  const [email, setEmail] = useState('')
  const [emailVerify, setEmailVerify] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordVerify, setPasswordVerify] = useState(false)

  const onChangeName = (e)=>{

    const nameEvent=e.nativeEvent.text;
    setName(nameEvent);

    
    if (nameEvent.length > 3)
    {setNameVerify(true)}
    else {setNameVerify(false)}
    // setNameVerify(false)
  };

  const onChangeEmail = (e)=>{
    const emailEvent = e.nativeEvent.text
    setEmail(emailEvent);  
     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    regex.test(emailEvent) ? setEmailVerify(true) : setEmailVerify(false)

    // const emailErr = document.getElementBiId('EmailErr')
    // if (emailVerify) {emailErr.style.display = 'none'} {emailErr.style.display = 'block'}
    
    // emailEvent.length > 3 ? setEmailVerify(true) : setEmailVerify(false) 
  }

  const onChangePassword = (e)=>{
    const passwordEvent = e.nativeEvent.text;
    setPassword(passwordEvent)
    const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/
    regex.test(passwordEvent) ? setPasswordVerify(true) : setPasswordVerify(false)
  }
  
   


  const handleSubmit = ()=>{
    const userData = {
      name ,
      email,
      // password,
    };
    axios.
    post('http://192.168.0.29:5001/Signup', userData )
    .then( (res)=> console.log(res.data))
    .catch((e)=> console.log(e))

   
  }

  return (
    <View style={styles.bground} >
      <View style={styles.card} >
        <Text style={styles.head} > Welcome! </Text>
        <Text style={{color:'gray', textAlign:'center', marginBottom:h(20)}} >Please fill in {'\n'}  the following details to create your new Account</Text>

       <View style={{flexDirection:'row'}} >
       <TextInput
        style={styles.input}
         onChange={ (e) => onChangeName(e) }
        placeholder="Your Full Name"
        keyboardType=""
      />
      
      {  name.length === 0 ? null : nameVerify ? 
      ( <Image source={require('../check.png')} style={{marginVertical:'auto', right:w(30)  }}   /> ) :
      ( <Image source={require('../crossed.png')} style={{marginVertical:'auto', right:w(30) }}  /> ) 
      }
       </View>
       
       <Text style={{color:'white', textAlign:'right', paddingHorizontal:w(10) }} >Write Your Full Name</Text>
       {}

       <View style={{flexDirection:'row'}} >
       <TextInput style={styles.input} 
       placeholder='Your Email Address' 
       onChange={ e => onChangeEmail(e) }  />
       {
       
       email.length === 0 ? null : 
        emailVerify ? 
      ( <Image source={require('../check.png')} style={{marginVertical:'auto', right:w(30)}}  /> ) :
      ( <Image source={require('../crossed.png')} style={{marginVertical:'auto', right:w(30) }}  /> ) 
        }
         
        </View>
       
        <View style={{flexDirection:'row'}} >
          <TextInput
        style={styles.input}
         onChange={e=>onChangePassword(e)}
        placeholder="Password"
        keyboardType=""
      /> 
      {password.length === 0 ? null : passwordVerify ? 
       ( <Image source={require('../check.png')} style={{marginVertical:'auto', right:w(30)}}  /> ) :
       ( <Image source={require('../crossed.png')} style={{marginVertical:'auto', right:w(30) }}  /> ) 
        }
        </View>
    

      <TouchableOpacity style={styles.btn} onPress={()=>handleSubmit()} >
        <Text style={{color: 'white', fontSize: 15, textAlign:'center' }} > Sign Up  </Text>
      </TouchableOpacity>

      <Text style={{color:'white', marginTop:25, marginBottom:10 ,marginLeft:15, marginRight:20 }} >
        Already Have an Account ? 
        </Text>
        <TouchableOpacity style={{ padding:10, backgroundColor:'blue',}} onPress={ ()=>navigation.navigate('Login') } >
        <Text style={{color:'#fffcf3', textAlign:'center' }} >Login</Text>
        </TouchableOpacity>
        
        
      </View>

     <TouchableOpacity  style={{ width:w(35), right:w(-300), marginBottom:h(5)}} onPress={ ()=> navigation.navigate('Homepage')}  >
        <Text style={{color:'white', fontSize:20, textAlign:'right' }}  >
            Skip
        </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    bground:{
        height: '100%',
        width: '100%',
        backgroundColor: '#192a56'
    },

    card:{
        height: 'auto ',
        width: w(330),
        backgroundColor: '#2f3f66',
        margin: 'auto',
        borderRadius: 10
    },
    head:{
        color: '#fffcf3',
        fontSize: mw(23),
        marginHorizontal: '35%',
        marginVertical: h(5)
             
    },
    input: {
        height: 53,
        marginHorizontal: 12,
        marginVertical: 5 ,
        borderWidth: .5,
        color: 'white',
        borderColor: 'white',
        borderRadius:10,
        color:'#fffcf3',
        paddingHorizontal: 8,
        backgroundColor:'#465477',
        width: w(310)
      },
      btn:{
        marginHorizontal: 'auto',
        marginVertical:15,
        paddingHorizontal: 23,
        paddingVertical: 15,
        backgroundColor: '#192a56',
        width:w(300),
        borderRadius:30,

    }

})