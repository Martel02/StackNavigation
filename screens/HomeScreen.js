import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button, TextInput } from 'react-native-paper'


export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('Testing')

  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
