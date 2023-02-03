import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('Sanyam');
  const [age, setAge] = useState(27);

  return (
    <View style={styles.container}>
    <Text>Enter Name : </Text>
    <TextInput 
      multiline
      style = {styles.input}
      placeholder = 'e.g. John doe'
      onChangeText={(val) => setName(val)}
    />

    <Text>Enter Age : </Text>
    <TextInput 
      style = {styles.input}
      placeholder = 'e.g. 18'
      keyboardType='numeric'
      onChangeText={(val) => setAge(val)}
    />
      <Text>name : {name}, age : {age}</Text>
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
  input : {
    borderWidth : 1,
    borderColor : '#777',
    padding : 8,
    margin : 10,
    width : 200,
  },
});
