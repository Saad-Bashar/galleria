import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,  View, ActivityIndicator } from 'react-native';
import Text from './src/components/text/text';
import { useFonts } from 'expo-font';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Details from './src/screens/details-screen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


const Stack = createSharedElementStackNavigator();


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};


export default function App() {
  let [fontsLoaded] = useFonts({
    'LibreBaskerville-Regular': require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    'LibreBaskerville-Bold': require('./assets/fonts/LibreBaskerville-Bold.ttf'),
  });

  if (!fontsLoaded) {
      return <ActivityIndicator />;
  }

  return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home}  />
          <Stack.Screen 
            name="Details" 
            component={Details}  
            sharedElements={(route, otherRoute, showing) => {
              const { id } = route.params;
              return [`item.${id}.photo`];
            }}
  
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
