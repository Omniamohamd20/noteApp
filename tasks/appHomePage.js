//homepage
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity,Modal,StatusBar } from 'react-native'
import {
  Container, Header, Button, Content, ActionSheet, Root, Left, Right, Body, Title, Footer, FooterTab, Accordion, Fab, DatePicker
  , Item, Input, ListItem, CheckBox, Badge
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class AppHomePage extends React.Component {
    constructor() {
    super();
    this.state =
     {
    
  }}
 render(){
    return (
      <>
      <View style={{flex:1,backgroundColor:'#ECECEC'}}>
            {/* header */}
            <StatusBar
            backgroundColor={'#008F7A'}
          />
            <View style={{flexDirection:'row',width:'100%',backgroundColor:'#008F7A',height:'7%'
            // ,borderBottomLeftRadius:15,borderBottomRightRadius:15
            }}>
           <View style={{ alignSelf:'center',width:'85%' }}>
           <Text style={{fontWeight:'600',fontSize:20,color:'#fff',paddingRight:10}}>الرئيسية</Text>

         </View>
       
         </View>
 
                <View style={{flex:1}} >
         
   
     <View style={{flexDirection:"row",flexWrap:"wrap", justifyContent: 'space-around',alignItems:'center',marginTop:30}}>
 

       
   <TouchableOpacity style={{  
    justifyContent:'center', 
      width: '45%',
   height: "35%",
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
   elevation:2,
 
   }}
  
        onPress={() => {
            this.props.navigation.navigate('AppAddNote')
          }}>
        <Image source={require("../img/letter.png")} resizeMode={'center'} style={{width:'100%',height:50}}/>
     <Text style={{alignSelf:'center',fontSize:18,paddingHorizontal:5,color:'#008F7A',fontWeight:'bold'}}>دون ملاحظاتك</Text>
   </TouchableOpacity>
        
   <TouchableOpacity style={{  
    justifyContent:'center', 
      width: '45%',
   height:"35%",
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
   
   elevation:2,
 
   }}
        onPress={() => {
            this.props.navigation.navigate('AppToDoList')
          }}>
              <Image source={require("../img/approved.png")} resizeMode={'center'} style={{width:'100%',height:50}}/>
     <Text style={{alignSelf:'center',fontSize:18,paddingHorizontal:5,color:'#008F7A',fontWeight:'bold'}}>قائمة المهام</Text>
   </TouchableOpacity>
   {/* <TouchableOpacity style={{  
    justifyContent:'center', 
      width: '45%',
   height:"35%",
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
 
   elevation:2,
   
   }}
        onPress={() => {
            this.props.navigation.navigate('AppCalendar') 
          }}>
            <Image source={require("../img/calendar.png")} resizeMode={'center'} style={{width:'100%',height:50}}/>
     <Text style={{alignSelf:'center',fontSize:18,paddingHorizontal:5,color:'#008F7A',fontWeight:'bold'}}>التقويم</Text>
   </TouchableOpacity> */}
        
   {/* <TouchableOpacity style={{  
    justifyContent:'center', 
      width: '45%',
   height:"35%",
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
  
   elevation:2
   }}
        onPress={() => {
            this.props.navigation.navigate('Tasbih')
          }}>
                    <Image source={require("../img/tasbih.png")} resizeMode={'center'} style={{width:'100%',height:50}}/>
     <Text style={{alignSelf:'center',fontSize:18,paddingHorizontal:10,color:'#008F7A',fontWeight:'bold'}}>السبحة</Text>
   </TouchableOpacity> */}
   {/* <TouchableOpacity style={{  
    justifyContent:'center', 
      width: '45%',
   height: "35%",
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
   
   elevation:2,
  
   }}
        onPress={() => {
            this.props.navigation.navigate('Azkar') 
          }}>
      <Image source={require("../img/pray.png")} resizeMode={'center'} style={{width:'100%',height:50}}/>            
     <Text style={{alignSelf:'center',fontSize:18,paddingHorizontal:5,marginTop:5,color:'#008F7A',fontWeight:'bold'}}>أذكار</Text>
   </TouchableOpacity> */}
        
   {/* <TouchableOpacity style={{  
    justifyContent:'center', 
      width: '45%',
   height:"35%",
   backgroundColor:'#fff',
   marginBottom:10,
   borderRadius:10,
 
   elevation:2,
   }}
   TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate('Table') 
          }}>
                  <Image source={require("../img/quran.png")} resizeMode={'center'} style={{width:'100%',height:50}}/>
     <Text style={{alignSelf:'center',fontSize:18,paddingHorizontal:15,color:'#008F7A',fontWeight:'bold'}}>جدولي</Text>
   </TouchableOpacity> */}
   
         </View> 
    
         </View>
   
     {/* footer */}
     <Footer style={{backgroundColor:'#F0E9E8'}}>
          <FooterTab style={{backgroundColor:'#008F7A',borderTopLeftRadius:15,borderTopRightRadius:15}} >
            <Button>
            <Icon name={'home'} size={20} color={"#fff"}/>
            
             
            </Button>
         
            <Button> 
            <Icon name={'user'} size={20} color={"#ddd"}/>
            </Button>
          </FooterTab>
          </Footer>
         </View>
     


      </>
    )
  }
}