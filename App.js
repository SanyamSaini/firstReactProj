import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name : 'Sanyam', key : '1'},
    {name : 'Sam', key : '2'},
    {name : 'Samuda', key : '3'},
    {name : 'Saini', key : '4'},
    {name : 'Saini Sahab', key : '5'},
    {name : 'Solid', key : '6'},
    {name : 'Soldier', key : '7'},
    {name : 'Sanedo', key : '8'},
    {name : 'Sign', key : '9'},
    {name : 'Silk', key : '10'},
  ]);

  return (
    <View style={styles.container}>
    <ScrollView>
      {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 40,
    paddingHorizontal : 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item : {
    backgroundColor : 'pink',
    marginTop : 24,
    padding : 30,
    fontSize : 24,
  },
});
