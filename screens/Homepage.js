import { View, Text, StyleSheet, ImageBackground, Image, FlatList, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import TransactionData from './TransactionData';
import { h, mh, w, mw } from './styles/responsive';
import HorizontalLine from './styles/HorizontalLine';





const Homepage = ({navigation}) => {

  // render Item code for recent Transactions
  const Transactions = ({item}) => {
    return (
      <View>
        <View style={{width:w(330) , backgroundColor:'#fffcf3', height:h(40) ,marginBottom:h(5), display:'flex', flexDirection:'row', justifyContent:'space-between',}} >

          <View style={{padding:3, backgroundColor:'white', borderWidth:0.17, borderRadius:5}}  >
            <Image  source={ item.icon } />
          </View> 

          <Text style={{color:'blue', fontSize:mh(13), marginVertical:'auto' }} > {item.title} </Text>
        
          <Text style={{marginVertical:'auto'}} > {item.time} </Text>
            <Text style={{textAlign:'right', display:'flex', color:'red', marginVertical:'auto' }} > {item.price}  </Text> 
        </View>
        <HorizontalLine />
      </View>
    )
  };

  // hooks for user profile and balance update
  const [user, setUser] = useState('Guest');
  const [bal, setBal] = useState('₦0');



  return (
    // Background
    <View style={styles.bgroud} >

      {/* Header box */}
      <View style={styles.fbox}  >
        <View >
                  {/* profile pic */}
          <Image style={{margin:mh(10) }} source={require('../profile.png')}  />

                  {/* Green Active Button */}
          <View style={{height:h(16), width:w(16), borderRadius:50 , backgroundColor:'green', zIndex:99, top:50, left:50,
          position:'absolute'}} />

                  {/* User name and greeting */}
          <Text style={{color:'white', marginTop:mh(3), fontSize:mw(17), fontWeight:'700' }} > Hello {user} </Text>

                  {/* balance */}
          <Text style={{color:'white', fontSize:mw(20), marginTop:10,}} > {bal}. </Text>
          <Text style={{color:'white', fontSize:mw(13), }} >  Available Balance </Text>
        </View>

       <TouchableOpacity>
       <Text style={{ fontSize:mw(15), color:'#fffcf3', padding:mh(11), backgroundColor:'blue', width:w(130), display:'flex', right:w(-190), top:h(-75) }} > Add Money + </Text>
       </TouchableOpacity>
       
         
      </View>
    
      
      {/* overlay shaowed box */}

      <Text style={styles.shadow}> </Text>

      {/* bills */}

      <Text style={{marginLeft:w(30), fontSize:mw(18)}} >Bills</Text>

      <View style={styles.sbox}  > 
      
      <TouchableOpacity onPress={ ()=>navigation.navigate('Airtime') } >
      <Text style={styles.lbox} > <Text style={{color:'#192a56',marginTop:h(10) }} > <Image source={require('../phone.png')} /> {'\n'} {'\n'} Airtime</Text> </Text> 
      </TouchableOpacity> 
      <Text style={styles.lbox} > <Text style={{color:'#192a56'}} > <Image source={require('../smartphone.png')} /> {'\n'} {'\n'} Buy Data</Text> </Text>  
      <Text style={styles.lbox} > <Text style={{color:'#192a56'}} > <Image source={require('../bills.png')} /> {'\n'} {'\n'} Pay Bills</Text> </Text>  
      <Text style={styles.lbox} > <Text style={{color:'#192a56'}} > <Image source={require('../cable.png')} /> {'\n'} {'\n'} Cable Sub</Text> </Text>  
      </View>

      {/* Recent Payment */}
      <Text style={{marginLeft:20,fontSize:18, marginBottom:3,}} > Recent Transaction </Text>

      
        <FlatList 
          data={TransactionData} 
          renderItem={Transactions}
          keyExtractor={(item)=>item.id} 
        />
  


    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
    bgroud:{
        backgroundColor: '#fffcf3',
        paddingHorizontal:w(12),
        height:'100%',
       
        width: '100%'
    },
    fbox:{ 

        backgroundColor: '#192a56',
        height: h(200),
        width: w(330),
        marginHorizontal: 'auto',
        marginTop: 30,
        borderRadius: 20,
        padding: 10,
        display:'flex',
        
    },
    shadow:{
      position:'fixed',
      width:'90%' , 
      height:h(41),
      marginHorizontal:'auto',
      top:-30,
      backgroundColor:'white',
      borderRadius:10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: h(5),
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.22,
      elevation:11,
    },

    sbox:{
        
        width: w(310),
        height: h(120),
        marginTop: 5,
        borderRadius: 20,
        flexDirection: 'row',
        gap: mw(3) ,
        marginHorizontal: 'auto',
        
    },
  
    lbox:{
      height: h(73),
      width: w(73),
      borderRadius: 2,
      backgroundColor: 'white',
      marginHorizontal: 'auto',
      padding: mw(3),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
       
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.22,
      elevation:11,
  
    },
    thrbox:{
      backgroundColor: 'white',
      margin: 'auto',
      marginTop: 10
    }
})