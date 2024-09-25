import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components'
import { Button } from 'react-native-paper'

export const CounterScreen = () => {

  const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>
      {/* <PrimaryButton
        label="Restar 1"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      /> */}
      <Button
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        mode='contained'
      >
        Incrementar        
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300'
  }

})