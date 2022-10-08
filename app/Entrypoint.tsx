import React from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {store} from './store';
import {Text, View} from 'react-native';

const BootScreen: React.FC = () => {
  return (
    <>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <View>
          <Text>Hello</Text>
        </View>
      </SafeAreaProvider>
    </>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <BootScreen />
    </Provider>
  );
};

export default EntryPoint;
