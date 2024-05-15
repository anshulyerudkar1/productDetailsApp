/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: { product: { id: number; title: string; description: string; price: number; discountPercentage:number; rating:number; stock:number; brand:string; category:string; thumbnail: string; images:string[] } };
};



const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return(
    <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'#a9a9a9' }}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="ProductList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#fff'
      }}
      >
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}


export default App;
