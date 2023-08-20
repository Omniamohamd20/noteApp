import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button, StatusBar,
  Alert
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('screen');
export default class App extends React.Component {
   constructor() {
    super();
    this.state =
     {
       products:[
         { name: 'شيبسي', ischeck: false },
         { name: 'شيبسي', ischeck: false },
         { name: 'شيبسي', ischeck: false },
         { name: 'شيبسي', ischeck: false },
         { name: 'شيبسي', ischeck: false },
                         
   
  ],
  isDialogVisible:false,
  inputText:'',
  }}
  render() {
    return (
      <>
        <View style={{}}>
          {/* header */}
          <StatusBar backgroundColor='#369d369c'/>
          <View style={{backgroundColor:'#06AC7F',height:0.12*height}}>
          <View style={{justifyContent:"space-between",flexDirection:'row-reverse'}}>
            <Text style={{
              marginRight: 10, alignSelf: 'flex-end', fontSize: 20, fontWeight: "bold",marginTop:10,
              color: '#fff'
              }}>product checker</Text>
              <TouchableOpacity style={{
                marginLeft: 10, alignSelf: 'flex-end',
                fontWeight: "bold", marginTop:10}}>
                <Icon name='plus' color={'#fff'} size={15}></Icon>
              </TouchableOpacity>
              </View>
            <View style={{flexDirection:'row-reverse',justifyContent:'space-around',marginTop:15}}>
              <Text style={{color: '#BED0BE',fontWeight:'bold',fontSize:15}}>
               Not Expired
              </Text>
               <Text style={{color:'#fff',fontWeight:'bold',fontSize:15}}>
               Expired
              </Text>
            </View>
          </View>
          {/* content */}
          <View style={{marginTop:5}}>
                  {this.state.products.map((item,index)=>(
             <>
         <TouchableOpacity 
         style={{    
            height:50 ,
            elevation:3,
            width:'90%',backgroundColor:'#fff',borderRadius:10,
         alignSelf:"center",
         marginTop:5,
         marginBottom:5,
        alignItems:'center',
         flexDirection:'row' }}
         onLongPress={
                          () => {
                          
                            Alert.alert(
                      
                              '',
                              'هل تريد حذف العنصر',
                              [
                                {
                                  text: 'نعم', onPress: () => this.delete(index)
                                },
                                {
                                  text: 'لا', onPress: () => console.log('OK Pressed')
                                },
                              ],
                              {cancelable: true},
                            );
                          }
                        }
                        >
            
                <Text style={{marginLeft:15 ,fontSize:20 ,width:'85%',color:'#008F7A'}}>{item.name} </Text>
                
              </TouchableOpacity>
          
               </>
             ))}  
         </View>
        </View>
      </>
    );
  }
}

// import * as React from 'react'
// import { createAppContainer } from 'react-navigation'
// import { createStackNavigator } from 'react-navigation-stack'
// // import appAddNote from './tasks/appAddNote'
// // import appToDoList from './tasks/appToDoList'
// // import appSignIn from './tasks/appSignIn'
// // import appSignUp from './tasks/appSignUp'
// import appHomePage from './tasks/appHomePage'

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//     }
//   }

//   render() {
//     return (
//       <>

//       </>
//     )
//   }
// }
// export default createAppContainer(
//   createStackNavigator(
//     {
//       // App: App,
//       // AppAddNote:appAddNote ,
//       // AppToDoList:appToDoList,
//       // AppSignIn:appSignIn,
//       // AppSignUp:appSignUp,
//       AppHomePage:appHomePage
//     },
//     {
//       initialRouteName: 'AppHomePage', headerMode: 'none'
//     },
//   )
// )
