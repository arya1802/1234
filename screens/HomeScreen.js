import React,{Component}from 'react';
import {
    View,
    Text,
   } from 'react-native';

    export default class App extends React.Component {
        render(){
        return (
         <View>
             <Text>hi</Text>
         </View>
          
        );
      }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });