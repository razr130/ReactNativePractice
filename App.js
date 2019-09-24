import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class AwesomeApp extends Component {
  render() {


    return (
      <View style={{backgroundColor: '#ffffff', flex: 1, paddingTop: 50, paddingHorizontal: 20, flexDirection: "row"}}>
        <View style={{backgroundColor: '#f1c40f', flex: 1, height: 80, marginHorizontal: 5, borderRadius: 10}}></View>
        <View style={{backgroundColor: '#3498db', flex: 1, height: 80, marginHorizontal: 5, borderRadius: 10}}></View>
        <View style={{backgroundColor: '#2ecc71',flex: 1, height: 80, marginHorizontal: 5, borderRadius: 10}}></View>
        <View style={{backgroundColor: '#3498db',flex:1, height: 80, marginHorizontal: 5, borderRadius: 10}}></View>
        
    
      </View>
    );
  }
}

const styles = StyleSheet.create({


})