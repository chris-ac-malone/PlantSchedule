import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PlantSummary } from './src/components/PlantSummary';
import { plantData } from './src/data/plants';

export default function App() {
  var plants = [];

  plantData.forEach(plant => {
    console.log(plant)
    plants.push(
      <PlantSummary image={plant.image} commonName={plant.commonName} scientificName={plant.scientificName}  />
    )
  })
  
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <View />
        <ScrollView style={styles.scrollview}>
          { plants }
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollview: {
    flex: 1,
    width: '100%'
  }
});
