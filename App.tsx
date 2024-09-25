import React from 'react'
import { SafeAreaView } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Antonio Hernandez' /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen />
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        {/* <HomeWorkScreen /> */}
      </SafeAreaView>
    </PaperProvider>
  );
}
