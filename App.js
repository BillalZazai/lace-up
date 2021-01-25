import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default  function App() {

  const url = 'http://192.168.2.15:3030/products';
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body:{keyword:"skkrt", numberOfHits:"sheet"}
  };

  fetch(url, options)
  .then(response => {
      return response.json ();
    })
  .then( data => {
    data.forEach (index=>{
      console.log (index);
    })
  } )
  .catch( error => {
    console.error('Error:'+ error);
  });

  return (
    <View style={styles.container}>
      <Text>Billy Boy app</Text>
      <Button title="Whoo" ></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
