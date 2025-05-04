import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class BranchesScreen extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>branches screen</Text>
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