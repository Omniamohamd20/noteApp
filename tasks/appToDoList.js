//todolist
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity,Modal,Alert } from 'react-native'
import {
  Container, Header, Button, Content, ActionSheet, Root, Left, Right, Body, Title, Footer, FooterTab, Accordion, Fab, DatePicker,Badge
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'
import CheckBox from '@react-native-community/checkbox';
import DialogInput from 'react-native-dialog-input';
export default class AppToDoList extends React.Component {
    constructor() {
    super();
    this.state =
     {
       toDo:[
    {name:'مذاكرة', ischeck:false},
    {name:'ختم القران الكريم', ischeck: false },
    {name:'مذاكرة', ischeck:false},
    {name:'ختم القران الكريم', ischeck: false },{name:'مذاكرة', ischeck:false},
    {name:'ختم القران الكريم', ischeck: false },{name:'مذاكرة', ischeck:false},
    {name:'ختم القران الكريم', ischeck: false },
  ],
  isDialogVisible:false,
  inputText:'',
  }}
    delete(index){
    let newstate = this.state.toDo
 newstate.splice(index,1)
 this.setState({toDo:newstate})
  }
      sendInput(inputText){
        let arr = this.state.toDo;
        if(inputText!=0){
        let newobj = {
         name: inputText,
         ischeck:false
        }
        arr.unshift(newobj)
        this.setState({ toDo : arr , isDialogVisible:false})}
        else{null}
      }
       changecheck(value,index){
    let list = this.state.toDo
    list[index].ischeck = value
    this.setState({toDo : list})
  }
     

 
 render(){
    return (
      <>
      <View style={{flex:1,backgroundColor:'#ECECEC'}}>
            {/* header */}
            <View style={{height:'7%',backgroundColor:'#008F7A',justifyContent:'center'}}>
           <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>قائمة المهام</Text>
         </View>
         <ScrollView >
         <View style={{flex:1,marginTop:10}}>
           {this.state.toDo.map((item,index)=>(
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
            
          
            <CheckBox 
            value = {item.ischeck}
                        onValueChange={value=>{this.changecheck(value,index)}}   
                    
              />
                <Text style={{marginLeft:15 ,fontSize:20 ,width:'85%',color:'#008F7A'}}>{item.name} </Text>
                
              </TouchableOpacity>
          
               </>
             ))}
            
         </View>
         </ScrollView>
           {/* footer */}
     <Footer style={{backgroundColor:'#F0E9E8'}}>
          <FooterTab style={{backgroundColor:'#008F7A',borderTopLeftRadius:15,borderTopRightRadius:15}} >
            <Button>
            <Icon name={'home'} size={20} color={"#fff"}/>
            
             
            </Button>
            <TouchableOpacity
 onPress={
  () => {
  this.setState({isDialogVisible:true})
   
  }
}


             style={{height:60,width:60,borderRadius:30,borderWidth:1,borderColor:'#ECECEC',
          
              backgroundColor:'#008F7A',marginTop:-25,justifyContent:'center'}}>
                 <Icon name={"plus"} color={"#fff"} style={{alignSelf:'center',fontSize:20}}/>
            </TouchableOpacity>
            <Button> 
            <Icon name={'user'} size={20} color={"#ddd"}/>
            </Button>
          </FooterTab>
          </Footer>

         <DialogInput  
         isDialogVisible={this.state.isDialogVisible}
            title={"إضافة مهمة"}
            cancelText={'الغاء'}
            submitText={"حفظ"}
            hintInput ={"ادخل مهمه لتقوم بها فيما بعد"}
            submitInput={ (inputText) => {this.sendInput(inputText)
              
            }
          }
            closeDialog={ () => {this.setState({isDialogVisible:false}) }}>
</DialogInput>
     
         </View>
     


       </>
    )
  }
}