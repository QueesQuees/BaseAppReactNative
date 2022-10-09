import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screen/Detail';
import Home from '../screen/Home';
import {DETAIL, HOME} from './screenName';
import {navigationRef} from './rootNavigation';

export type RootStackParamList = {
  [HOME]: undefined;
  [DETAIL]: {id: string};
};

const Stack = createNativeStackNavigator();

interface NavigationProp {
  initialRouteName: keyof RootStackParamList;
  initialRouteId: keyof RootStackParamList;
}

const Navigation: React.FC<NavigationProp> = ({
  initialRouteName,
  initialRouteId,
}) => {
  // Call API to check app version when app state changed
  // Check app for update
  // Slowdown hide splash screen 1 second

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen
          name={DETAIL}
          component={Detail}
          initialParams={{item: initialRouteId}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
