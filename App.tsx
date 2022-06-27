import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PlantSummary } from './src/components/PlantSummary';
import { plantData } from './src/data/plants';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <View />
        <ScrollView style={styles.scrollview}>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
          <PlantSummary commonName={plantData.plants.chinesemoneytree.commonName} scientificName={plantData.plants.chinesemoneytree.scientificName}></PlantSummary>
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
