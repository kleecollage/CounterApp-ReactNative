import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { globalStyle } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


export const CounterM3Screen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={globalStyle.centerContainer}>
      <Text style={globalStyle.title}>{counter}</Text>
      <Icon name="logo-electron" size={35} />
      <FAB
        // label="+ 1"
        // icon={() => <Icon name="add-outline" size={25} />}
        icon="add-outline"
        style={globalStyle.fab}
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
}