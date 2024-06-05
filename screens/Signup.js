import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { h, mw, w } from './styles/responsive'


const Signup = ({navigation}) => {
  return (
    <View style={styles.bground} >
      <View style={styles.card} >
        <Text style={styles.head} > Welcome! </Text>
        <Text style={{color:'gray', textAlign:'center', marginBottom:h(20)}} >Please fill in {'\n'}  the following details to create your new Account</Text>
        <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        placeholder="Your Full Name"
        keyboardType=""
        
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        placeholder="Username"
        keyboardType=""
      />
          <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        placeholder="Password"
        keyboardType=""
        
      />

      <TouchableOpacity style={styles.btn} >
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
        margin: 12,
        borderWidth: .5,
        color: 'white',
        borderColor: 'white',
        borderRadius:10,
        color:'#fffcf3',
        paddingHorizontal: 8,
        backgroundColor:'#465477',
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