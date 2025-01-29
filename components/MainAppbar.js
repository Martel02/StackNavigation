import React, { useState } from 'react'
import { Appbar } from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons'


export default function MainAppbar({ navigation, back, route, options }) {
  const title = getHeaderTitle(options, route.name)

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}  
      <Appbar.Content title={title} /> 
      {!back ? (
        <Ionicons 
          name='arrow-forward'
          size={24} 
          onPress={() => navigation.navigate('Second')}
        />
      ) : null}
    </Appbar.Header>
  )
}
