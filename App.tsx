import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PlantSummary } from './src/components/PlantSummary';
import { plantData } from './src/data/plants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bud/Rosette/Plant Diary</Text>
      <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
      <StatusBar style="auto" />
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
});
