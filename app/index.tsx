import React from 'react';
import { StatusBar } from 'expo-status-bar';
import StackNavigator from './navigation/StackNavigator';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <StackNavigator />
    </>
  );
}
