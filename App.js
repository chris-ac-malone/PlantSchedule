import { HomeScreen, AllPlants, PlantInfo } from './src/screens/Screens';
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
        <Stack.Screen 
          name="Plant Info"
          component={PlantInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
