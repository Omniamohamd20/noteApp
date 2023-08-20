import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class AppSignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secure:true,
      icon:'eye-slash',
      
    }
  }
  secureFun(){
    if(this.state.secure==false){
     this.setState({secure:true,icon:'eye-slash'})
    }else if(this.state.secure==true){
      this.setState({secure:false,icon:'eye'})
    }
  }
  render() {
    return (
      <>
        <View style={{flex:1,backgroundColor:'#ECECEC'}}>
             {/* header */}
             <StatusBar
            backgroundColor={'#008F7A'}
          />
             <View style={{
               height:'7%',
             backgroundColor:'#008F7A',
             justifyContent:'center'
             ,marginBottom:50}}>
         <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>تسجيل دخول</Text>
          </View>
          <ScrollView>
          <View>
          <TextInput style={{
         
              height: 45,
              width: '90%',
              alignSelf:'center',
              borderBottomWidth:1,
              borderBottomColor:'#ddd',
              marginTop:10

            }}
              placeholder={"عنوان حسابك "}
              placeholderTextColor='#000000ad'
              onChangeText={(value) => {
               
              }
              }

            />
    <View style={{ height: 45,
         width: '90%',
         alignSelf:'center',
         borderBottomWidth:1,
         borderBottomColor:'#ddd',
         marginTop:10,
         flexDirection:'row',
         justifyContent:'space-between'}}>
             <TextInput style={{
         
        
         textAlign:'right'
       }}
       
         placeholder={"كلمة المرور"}
         placeholderTextColor='#000000ad'
         secureTextEntry={this.state.secure}
        //  value={}
         onChangeText={(value) => {
          
         }}

       />
     <TouchableOpacity
     onPress={()=>{
       this.secureFun()
     }}
      style={{alignSelf:'center'}}>
       <Icon name={this.state.icon} size={15} />
       </TouchableOpacity>
       </View>
         <TouchableOpacity style={{height:50,width:150,backgroundColor:'#008F7A',marginTop:50,
         alignSelf:'center',
         borderRadius:10,
         justifyContent:'center'}}
         onPress={() => {
            this.props.navigation.navigate('AppHomePage')
          
          }}
          >
            <Text style={{alignSelf:'center',fontSize:20,color:'#fff'}}>تسجيل الدخول</Text>
          </TouchableOpacity>
          <Text style={{color:'#000',alignSelf:'center',marginVertical:15,fontSize:18}}>أو  </Text>
       <View style={{flexDirection:'row',justifyContent:'center'}}>
       <TouchableOpacity style={{ marginRight: 20 }}
                                   >
                                    <Icon name="facebook" size={27} color='#4267B2' />
                                </TouchableOpacity>
                                <TouchableOpacity 
                                   >
                                    <Icon name="google" size={25} color='#C4525A' />
                                </TouchableOpacity>
                         
         </View> 
     <TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate('AppSignUp')
          }}>
         <Text style={{color:'#737373',alignSelf:'center',marginVertical:15,fontSize:17,textDecorationLine:'underline'}}>ليس لدي حساب ؟ انشاء </Text>
         </TouchableOpacity>
</View>
</ScrollView>
        </View>

      </>
      )
  }
}