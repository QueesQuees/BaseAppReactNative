import {
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import {HOME} from './screenName';
import * as React from 'react';
export const navigationRef = createNavigationContainerRef();

// export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    console.log('ok');
    navigationRef.navigate(name as never, params as never);
  }
  console.log('error');
};

// if the current screen is navigated from a screen from the drawer,
// and the about-to-navigate-to screen is also from the drawer,
// navigate to that screen, else to that screen but in the stack navigator.
// Mean for the screen that's navigated from a drawer's screen to use.
// Warning: this function is still experimental

export const push = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

export const replace = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  } else {
    navigationRef.dispatch(StackActions.replace(HOME));
  }
};

export const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
};

export const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};
