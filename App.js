import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PlantSummary } from './src/components/PlantSummary';
import { plantData } from './src/data/plants';
import { HomeScreen, AllPlants } from './src/screens/Screens';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}} />
        <Stack.Screen 
          name="All Plants"
          component={AllPlants}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
