import React from 'react'
import { StyleSheet, View } from 'react-native'

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    // flex: 1,
    // width: 'auto',
    // height: 'auto',
    // alignSelf: 'center',
    // justifyContent: 'center',
    // top: 100,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    // flex: 1,
    // height: 'auto',
    // width: 'auto',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // alignSelf: 'center',
    // left: 100,
    top: 50,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    // flex: 1,
    // width: 'auto',
    // height: 'auto',
    // alignSelf: 'center',
    // top: 0,
  },
});
