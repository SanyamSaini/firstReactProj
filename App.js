import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName] = useState('Sanyam');
  const [person, setPerson] = useState({name : 'Tanjiro', age : 16});

  const clickHandler = () => {
    setName('SAM');
    setPerson({name : 'Zenitsu', age : 15});
  }
  return (
    <View style={styles.container}>
      <Text>My Name is {name}.</Text>
      <Text>His Name is {person.name} and his age is {person.age}.</Text>
      <View style={styles.buttonContainer}>
      <Button title='Update State'
        onPress={clickHandler}
      />
      </View>
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
  buttonContainer : {
    marginTop : 20,
  },
});
