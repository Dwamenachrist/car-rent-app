import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class AccountScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>account screen</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
}
})