//addNote
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, Alert, Share } from 'react-native'
import {Container, Header, Button, Content, ActionSheet, Root, Left, Right, Body, Title, Footer, FooterTab, Accordion, Fab, DatePicker
  , Item, Input, ListItem, CheckBox, Badge
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class AppAddNote extends React.Component {
  constructor() {
    super();
    this.state =
    {
      notes: [
        { title: 'المؤتمر', text: 'التتتيكخس', show: 1 },
        { title: 'erthv', text: 'uingggterjmghjg', show: 1 },
        { title: 'المؤتمر', text: 'التتتيكخس', show: 1 },
        { title: 'erthv', text: 'uingggterjmghjg', show: 1 },
        { title: 'المؤتمر', text: 'التتتيكخس', show: 1 },
        { title: 'erthv', text: 'uingggterjmghjg', show: 1 }, { title: 'المؤتمر', text: 'التتتيكخس', show: 1 },
        { title: 'erthv', text: 'uingggterjmghjg', show: 1 },
      ]
      , modalvisible: false
      , modalvisible1: false,
      note_text: '',
      note_title: '',
      item_index: '',
      item_text: '',
      item_title: '',
    }
  }
  onShare(index) {
    let newstate = this.state.notes
    Share.share({
      message: newstate[index].text,

    }
    )
  }
  delete(index) {
    let newstate = this.state.notes
    newstate.splice(index, 1)
    this.setState({ notes: newstate })
  }
  searchfun(value) {
    let newarr = this.state.notes;

    for (let i = 0; i < newarr.length; i++) {

      if ((newarr[i].title).includes(value)) {
        newarr[i].show = 1
      } else { newarr[i].show = 0 }
    }

    this.setState({ notes: newarr })
  }
  addNote() {

    let arr = this.state.notes;
    if (this.state.note_title != '' && this.state.note_text != '') {
      let newobj = {
        title: this.state.note_title,
        text: this.state.note_text,
        show: 1
      }
      arr.unshift(newobj)
      this.setState({ notes: arr, modalvisible: false, note_text: '', note_title: '' })
    }
    else {
      null
    }
  }

  edit() {
    let newlist = this.state.notes
    newlist[this.state.item_index].title = this.state.item_title
    newlist[this.state.item_index].text = this.state.item_text
    this.setState({ notes: newlist })
  }
  edit1(index) {
    let newlist = this.state.notes
    this.setState({
      item_index: index,
      item_title: newlist[index].title,
      item_text: newlist[index].text,
    })
  }

  render() {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: '#ECECEC' }}>
          {/* header */}
          <View style={{ height: '7%', backgroundColor: '#008F7A', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, paddingRight: '5%' }}>دون ملاحظاتك</Text>
          </View>
          <ScrollView>
            <View style={{ flex: 1 }}>
              <TextInput style={{
                backgroundColor: "#ECECEC",
                height: 45,
                width: '95%',
                alignSelf: 'center',
                borderRadius: 10,
                // marginTop:5,
                borderBottomWidth: 1,
                borderBottomColor: '#008F7A',
                marginBottom: 10
              }}
                placeholder={"بحث"}
                placeholderTextColor='#000000ad'
                onChangeText={(value) => {
                  this.searchfun(value)
                }
                }

              />
              {
                this.state.notes.map((item, index) => (

                  (item.show == 1) ? (

                    <TouchableOpacity
                      onPress={() => {
                        this.edit1(index)
                        this.setState({ modalvisible1: true })
                      }}

                      style={{
                        elevation: 5, width: '90%', backgroundColor: '#fff', alignSelf: "center", marginTop: 5, marginBottom: 5, borderRadius: 10
                      }}>

                      <Text style={{ color: '#008F7A', fontWeight: 'bold', fontSize: 18, paddingTop: 5, paddingHorizontal: 5 }}>{item.title}</Text>
                      <Text
                        numberOfLines={1}
                        style={{ color: '#008F7A', paddingHorizontal: 5 }}>{item.text}</Text>
                      <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>
                        <TouchableOpacity
                          onPress={
                            () => { this.onShare(index) }
                          }

                          style={{ marginHorizontal: 5, marginVertical: 5 }} >
                          <Icon name={'share-alt'} size={19} color={'#A8A5AD'}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={
                            () => {
                              Alert.alert(

                                '',
                                'هل تريد حزف العنصر',
                                [
                                  {
                                    text: 'نعم', onPress: () => this.delete(index)
                                  },
                                  {
                                    text: 'لا', onPress: () => console.log('OK Pressed')
                                  },
                                ],
                                { cancelable: true },
                              );
                            }
                          }

                          style={{ marginHorizontal: 5, marginVertical: 5 }} >
                          <Icon name={'trash'} size={19} color={'#A8A5AD'}></Icon>
                        </TouchableOpacity>

                      </View>
                    </TouchableOpacity>) : null
                ))}
            </View>
          </ScrollView>
          {/* footer */}
          <Footer style={{ backgroundColor: '#F0E9E8' }}>
            <FooterTab style={{ backgroundColor: '#008F7A', borderTopLeftRadius: 15, borderTopRightRadius: 15 }} >
              <Button>
                <Icon name={'home'} size={20} color={"#fff"} />


              </Button>
              <TouchableOpacity
                onPress={
                  () => {
                    this.setState({ modalvisible: true })

                  }
                }


                style={{
                  height: 60, width: 60, borderRadius: 30, borderWidth: 1, borderColor: '#ECECEC',

                  backgroundColor: '#008F7A', marginTop: -25, justifyContent: 'center'
                }}>
                <Icon name={"plus"} color={"#fff"} style={{ alignSelf: 'center', fontSize: 20 }} />
              </TouchableOpacity>
              <Button>
                <Icon name={'user'} size={20} color={"#ddd"} />
              </Button>
            </FooterTab>
          </Footer>
        </View>
        {/* modal */}
        <Modal visible={this.state.modalvisible}>
          <View style={{ height: '7%', backgroundColor: '#008F7A', flexDirection: 'row' }}>
            <Text style={{ color: '#fff', fontSize: 20, paddingRight: '5%', alignSelf: 'center', width: '75%' }}>
              إضافة ملاحظه </Text>
            <TouchableOpacity
              onPress={() => {

                this.addNote()
              }}
              style={{
                backgroundColor: '#fff', width: 30, height: 30, borderRadius: 15,
                alignSelf: 'center', justifyContent: 'center', marginRight: 10
              }}
            >
              <Icon name={'check'} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({ modalvisible: false })

              }}
              style={{
                backgroundColor: '#fff', width: 30, height: 30, borderRadius: 15,
                alignSelf: 'center', justifyContent: 'center'
              }}
            >
              <Icon name={'times'} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1, backgroundColor: '#ECECEC', borderRightWidth: 1,
            borderRightColor: '#ddd'
          }}>
            <TextInput
              multiline={true}
              value={this.state.note}
              onChangeText={(value) => {
                this.setState({ note_title: value })
              }}
              placeholder={'العنوان '}
              placeholderTextColor='#838185'
              style={{
                backgroundColor: "#ECECEC",
                height: 45,
                width: '95%',
                alignSelf: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd'
              }} />
            <TextInput
              multiline={true}
              value={this.state.note_text}
              onChangeText={(value) => {
                this.setState({ note_text: value })
              }}
              placeholder={'الموضوع'}
              placeholderTextColor='#838185'
              style={{ marginTop: 10, marginLeft: 10, borderRadius: 20, color: '#000' }} />
          </View>
        </Modal>
        {/* modal2 */}
        <Modal visible={this.state.modalvisible1}>
          <View style={{ height: '7%', backgroundColor: '#008F7A', flexDirection: 'row' }}>
            <Text style={{ color: '#fff', fontSize: 20, paddingRight: '5%', alignSelf: 'center', width: '85%' }}>
              إضافة ملاحظه </Text>
            <TouchableOpacity
              onPress={() => {
                this.edit()
                this.setState({ modalvisible1: false })
              }}
              style={{
                backgroundColor: '#fff', width: 30, height: 30, borderRadius: 15,
                alignSelf: 'center', justifyContent: 'center'
              }}
            >
              <Icon name={'check'} style={{ alignSelf: 'center' }} />
            </TouchableOpacity>
          </View>
          <View style={{
            flex: 1, backgroundColor: '#ECECEC', borderRightWidth: 1,
            borderRightColor: '#ddd'
          }}>
            <TextInput

              multiline={true}
              value={this.state.item_title}
              onChangeText={(value) => {
                this.setState({ item_title: value })

              }}
              style={{
                backgroundColor: "#ECECEC",
                height: 45,
                width: '95%',
                alignSelf: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#ddd'
              }}
              defaultValue={this.state.note_title} />
            <TextInput
              multiline={true}
              value={this.state.item_text}
              onChangeText={(value) => {
                this.setState({ item_text: value })
              }}
              style={{ marginTop: 10, marginLeft: 10, borderRadius: 20, color: '#000' }}
              defaultValue={this.state.note_text} />
          </View>
        </Modal>


      </>
    )
  }
}