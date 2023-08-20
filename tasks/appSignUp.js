import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class AppSignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            nameError:'',
          password: '',
          passwordError: '',
          phoneNumber:'',
          phoneNumberError:'',
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
      validationFun() {
        let errors = 0
        if(this.state.name.trim().length==0) {
            this.setState({nameError:'يجب إدخال اسم المسخدم'})
              errors++
             }else{
               this.setState({nameError:''})
             }
        if(this.state.phoneNumber.trim().length==0){
            this.setState({phoneNumberError:'يجب إدخال رقم الهاتف' })
          ++errors
          }
          
          else if(this.state.phoneNumber.trim().length!=11||(
            !this.state.phoneNumber.startsWith("015")&&
            !this.state.phoneNumber.startsWith("010")&&
            !this.state.phoneNumber.startsWith("012")&&
            !this.state.phoneNumber.startsWith("011"))
            || this.state.phoneNumber*0!=0
            )
            {
          this.setState({phoneNumberError:'رقم هاتف غير صحيح'})
          errors++
            }else{
              this.setState({phoneNumberError:''})
            }
            if(this.state.password.trim().length==0) {
              this.setState({passwordError:'يجب إدخال كلمة مرور'})
                errors++}       
 else if(this.state.password.length<=8) {
     this.setState({passwordError:'يجب أن تتكون كلمة المرور من 8 حروف او اكثر'})
       errors++
      }else{
        this.setState({passwordError:''})
      }
        if (errors == 0) {
        this.props.navigation.navigate('AppHomePage')
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
             <View style={{height:'7%',
             backgroundColor:'#008F7A',
             justifyContent:'center'
             ,marginBottom:50}}>
         <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>انشاء حساب</Text>
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
              placeholder={"اسم المستخدم   "}
              placeholderTextColor='#000000ad'
               
         value={this.state.name}
         onChangeText={(value) => {
           this.setState({ name: value })
         }}

            />
               <Text style={{alignSelf:'center',color:'#FA6E6E'}}>{this.state.nameError}</Text>
       <TextInput style={{
         
         height: 45,
         width: '90%',
         alignSelf:'center',
         borderBottomWidth:1,
         borderBottomColor:'#ddd',
         marginTop:10
       }}
         placeholder={"رقم الهاتف "}
         placeholderTextColor='#000000ad'
        
         value={this.state.phoneNumber}
         onChangeText={(value) => {
           this.setState({ phoneNumber: value })
         }}
       />
                         <Text style={{alignSelf:'center',color:'#FA6E6E'}}>{this.state.phoneNumberError}</Text>
          
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
       secureTextEntry={this.state.secure}
       
         placeholder={"كلمة المرور  "}
         placeholderTextColor='#000000ad'
         value={this.state.password}
         onChangeText={(value) => {
           this.setState({ password: value })
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
                  <Text style={{alignSelf:'center',color:'#FA6E6E'}}>{this.state.passwordError}</Text>
         <TouchableOpacity style={{height:50,width:150,backgroundColor:'#008F7A',marginTop:50,
         alignSelf:'center',
         borderRadius:10,
         justifyContent:'center'}}
         onPress={() => {
this.validationFun()
          
        }}
          >
            <Text style={{alignSelf:'center',fontSize:20,color:'#fff'}}>انشاء</Text>
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
      
</View>
</ScrollView>
        </View>

      </>
      )
  }
}