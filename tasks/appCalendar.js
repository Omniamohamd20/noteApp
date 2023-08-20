// import React, { Component } from 'react'
// import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
// import {
//     Container, Header, Button, Content, ActionSheet, Root, Left, Right, Body, Title, Footer, FooterTab, Accordion, Fab, DatePicker
//     , Item, Input, ListItem, CheckBox, Badge
//   } from "native-base";
// import Icon from 'react-native-vector-icons/FontAwesome5'
// import {Agenda} from 'react-native-calendars';

// import {Card, Avatar} from 'react-native-paper';

// export default class AppSignIn extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {

//     };

//   }
  
//   //   renderItem = (item) => {
// //     return (
// //       <TouchableHighlight
// //         style={[styles.item, {height: item.height}]}
// //         onPress={this.goToDetailScreen}
// //       >
// //         <Text>{item.name}</Text>
// //       </TouchableHighlight>
// //     )
// //   }
//   render() {
//     return (
//       <>
//         <View style={{flex:1,backgroundColor:'#ECECEC'}}>
//              {/* header */}
//              <View style={{height:'7%',
//              backgroundColor:'#008F7A',
//              justifyContent:'center'
//              ,marginBottom:20}}>
//          <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>التقويم</Text>
//           </View>
//           <ScrollView>
//           <View>
//           <Agenda
  
//   loadItemsForMonth={(month) => {console.log('trigger items loading')}}
 
//   onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}

//   onDayPress={(day)=>{console.log('day pressed')}}
  
//   onDayChange={(day)=>{console.log('day changed')}}
//   minDate={'2021-03-10'}
//   maxDate={'2023-03-30'}

//   renderItem={(item, firstItemInDay) => {return (<View />);}}
//   renderDay={(day, item) => {return (<View />);}}
//   renderEmptyDate={() => {return (<View />);}}
//   renderKnob={() => {return (<View />);}}
//   renderEmptyData = {() => {return (<View />);}}
//   rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
//   hideKnob={true}
//   markedDates={{
//     '2021-03-0': {selected: true, marked: true},
//     '2021-03-05': {marked: true},
//   }}
//   disabledByDefault={true}
//   onRefresh={() => console.log('refreshing...')}
//   refreshing={true}
//   refreshControl={null}

// />
// </View>
// <TouchableOpacity style={{marginTop: 17}}>
//         <Card style={{    width:'95%',alignSelf:'center'}}>
//           <Card.Content>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
            
//               }}>
//               {/* <Typography>{item.name}</Typography> */}
//               <Avatar.Text label="J" labelStyle={{fontSize:15}} style={{height:30,width:30,borderRadius:15}}/>
//             </View>
//           </Card.Content>
//         </Card>
//       </TouchableOpacity>
// </ScrollView>
 
//         </View>

//       </>
//       )
//   }
// }


// import React from 'react';
// import { StyleSheet, Text, View, TouchableHighlight, Alert,TouchableOpacity } from 'react-native';
// import { Agenda } from 'react-native-calendars'
// import DialogInput from 'react-native-dialog-input';

// import Icon from 'react-native-vector-icons/FontAwesome5'
// export default class AppSignIn extends React.Component {
//   state = {
//     items : {
//       '2018-07-15': [
//         {
//           name: 'add stone wall',
//           height: 95
//         },
//         {
//           name: 'landscaping',
//           height: 120
//         }
      
//       ]
    
//     }  ,isDialogVisible:false
//   }
//   sendInput(inputText){
//     let arr = this.state.items;
//     if(inputText!=0){
//     let newobj = {
//      name: inputText,
//      ischeck:false
//     }
//     arr.push(newobj)
//     this.setState({ items : arr , isDialogVisible:false})}
//     else{null}
//   }
//   goToDetailScreen = () => {
//     Alert.alert('go to job details now')
//   }

//   renderItem = (item) => {
//     return (
//       <TouchableHighlight
//         style={[styles.item, {height: item.height}]}
//         onPress={this.goToDetailScreen}
//       >
//         <Text>{item.name}</Text>
//       </TouchableHighlight>
//     )
//   }

//   timeToString = (time) => {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }

//   loadItems = (day) => {
//     setTimeout(() => {
//       for (let i = 0; i < 2; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = this.timeToString(time);
//         if (!this.state.items[strTime]) {
//           this.state.items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 5);
//           for (let j = 0; j < numItems; j++) {
//             this.state.items[strTime].push({
//               name: 'Item for ' + strTime,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       //console.log(this.state.items);
//       const newItems = {};
//       Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
//       this.setState({
//         items: newItems
//       });
//     }, 1000);
//     // console.log(`Load Items for ${day.year}-${day.month}`);
//   }

//   rowHasChanged = (r1, r2) => {
//     return r1.name !== r2.name
//   }

//   renderEmptyDate = () => {
//     return (
//       <View style={styles.emptyDate}>
//           <Text>This is empty date!</Text>
//           </View>
//     )
//   }

//   render() {
//     console.log('items now are: ', this.state.items)
//     return (
//         <>
//       <Agenda 
//         items={this.state.items}
//         // loadItemsForMonth={this.loadItems}
//         selected={'2018-07-19'}
//         renderItem={this.renderItem}
//         // renderEmptyDate={this.renderEmptyDate}
//         renderEmptyDate={() => <View />}
//         // rowHasChanged={this.rowHasChanged}
//         onDayPress={(day)=>{console.log('day pressed')}}
//         hideKnob={true}
//       />

//          <TouchableOpacity
//   onPress={
//     () => {
//     this.setState({isDialogVisible:true})
     
//     }
//   }


//              style={{height:60,width:60,borderRadius:30,alignSelf:'flex-end',margin:10,
          
//               backgroundColor:'#008F7A',marginTop:-20,justifyContent:'center'}}>
//                  <Icon name={"plus"} color={"#fff"} style={{alignSelf:'center',fontSize:20}}/>
//             </TouchableOpacity>
//       <DialogInput 
//       isDialogVisible={this.state.isDialogVisible}
//          title={"إضافة مهمة"}
//          cancelText={'الغاء'}
//          submitText={"حفظ"}
//          hintInput ={"ادخل مهمه لتقوم بها فيما بعد"}
//          submitInput={ (inputText) => {this.sendInput(inputText)
           
//          }
//        }
//          closeDialog={ () => {this.setState({isDialogVisible:false}) }}>
// </DialogInput>
// </>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   item: {
//     backgroundColor: '#8FBC8F',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17
//   },
//   emptyDate: {
//     height: 10,
//     flex:1,
//     // paddingTop: 30
//   }
// })


// import React, {Component} from 'react';
// import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {Agenda} from 'react-native-calendars';

// const testIDs = require('../tasks/testIDs');

// export default class AppCalendar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: {}
//     };
//   }

//   render() {
//     return (
//       <Agenda
//         testID={testIDs.agenda.CONTAINER}
//         items={this.state.items}
//         loadItemsForMonth={this.loadItems.bind(this)}
//         selected={'2017-05-16'}
//         renderItem={this.renderItem.bind(this)}
//         renderEmptyDate={this.renderEmptyDate.bind(this)}
//         rowHasChanged={this.rowHasChanged.bind(this)}
//         minDate={'2017-05-14'}
//         maxDate={'2017-05-20'}
//         // markingType={'period'}
//         markedDates={{
//            '2017-05-18': {textColor: '#43515c',marked:true},
//            '2017-05-09': {textColor: '#43515c'},
//            '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
//            '2017-05-21': {startingDay: true, color: 'blue'},
//         }}
//         // monthFormat={'yyyy'}
//         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
//         //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
//         // hideExtraDays={false}
//       />
//     );
//   }

//   loadItems(day) {
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = this.timeToString(time);
//         if (!this.state.items[strTime]) {
//           this.state.items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             this.state.items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       const newItems = {};
//       Object.keys(this.state.items).forEach(key => {
//         newItems[key] = this.state.items[key];
//       });
//       this.setState({
//         items: newItems
//       });
//     }, 1000);
//   }

//   renderItem(item) {
//     return (
//       <TouchableOpacity
//         testID={testIDs.agenda.ITEM}
//         style={[styles.item, {height: item.height}]}
//         onPress={() => Alert.alert(item.name)}
//       >
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   }

//   renderEmptyDate() {
//     return (
//       <View style={styles.emptyDate}>
//         <Text>This is empty date!</Text>
//       </View>
//     );
//   }

//   rowHasChanged(r1, r2) {
//     return r1.name !== r2.name;
//   }

//   timeToString(time) {
//     const date = new Date(time);
//     return date.toISOString().split('T')[0];
//   }
// }

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'white',
//     flex: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//     marginTop: 17
//   },
//   emptyDate: {
//     height: 15,
//     flex: 1,
//     paddingTop: 30
//   }
// });

import WeeklyCalendar from 'react-native-weekly-calendar';
import DialogInput from 'react-native-dialog-input';
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity,Modal,Alert,StatusBar } from 'react-native'
import {
  Container, Header, Button, Footer, FooterTab, Accordion, Fab, DatePicker,Badge
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class AppHomePage extends React.Component {
constructor() {
  super();
  this.state =
   {
    isDialogVisible:false ,
    inputText:'',
     day:[
    { start: '2021-03-23 09:00:00', duration: '00:20:00', note: 'Walk my dog' },
    { start: '2021-03-24 14:00:00', duration: '01:00:00', note: 'Doctor\'s appointment' },
    { start: '2021-03-21 08:00:00', duration: '00:30:00', note: 'Morning exercise' },
    { start: '2020-03-25 14:00:00', duration: '02:00:00', note: 'Meeting with client' },
    {  start: '2020-03-25 19:00:00', duration: '01:00:00', note: 'Dinner with family' },
  
  ]
}}
sendInput(inputText){
  let arr = this.state.day;
  if(inputText!=0){
  let newobj = {
   start: inputText,
   duration:'01:00:00',
   note:'yahoooooooooooo'
  }
  arr.push(newobj)
  console.log(JSON.stringify(this.state.day))
  this.setState({ day : arr , isDialogVisible:false})
}
  else{null}
}
render(){
  return (
    <>
    <View style={styles.container}>
    <StatusBar
            backgroundColor={'#008F7A'}
          />
            <View style={{height:'7%',backgroundColor:'#008F7A',justifyContent:'center',width:'100%'}}>
           <Text style={{color:'#fff',fontSize:20,paddingRight:'5%'}}>تقويم اسبوعي</Text>
         </View>
         <ScrollView>
      <WeeklyCalendar events={this.state.day} 
      
      style={{ height: '100%' }} />
   </ScrollView>
    </View>


      
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
</>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    
  }
});