import React from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {store} from './store';
import Navigation from './navigation';
import {HOME} from './navigation/screenName';

const BootScreen: React.FC = () => {
  return (
    <>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigation initialRouteName={HOME} initialRouteId={'Home'} />
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
