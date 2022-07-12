import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, StatusBar } from 'react-native';
import { PlantSummary } from '../components/PlantSummary';
import { plantData } from '../data/plants';
const plantData2 = require('../data/plants2.json'); 
import { imageNames } from '../data/images';

for(var i in plantData2) {
  console.log(plantData2[i].commonName);
}

var plants = [];

for(var i in plantData2) {
  plants.push(
    <PlantSummary image={plantData2[i].image} commonName={plantData2[i].commonName} scientificName={plantData2[i].scientificName} />
  )
}

/*
plantData.forEach(plant => {
  plants.push(
    <PlantSummary image={plant.image} commonName={plant.commonName} scientificName={plant.scientificName} />
  )
})
*/

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.homescreen}>
            <Text>HomeScreen</Text>
            <Button
                style={ styles.addplantsbutton }
                onPress={() => navigation.navigate('All Plants')}
                title="Add a Plant"
                color="black"
            />
        </View>
    )
}
export const AllPlants = ({ navigation, route }) => {
    return (
      <View style={styles.allplants}>
      <StatusBar style="auto" />
        <View />
          <ScrollView style={styles.scrollview}>
            { plants }
          </ScrollView>
      </View>
    )
}
export const PlantInfo = ({ navigation, route }) => {
  const { plant } = route.params;
  return (
      <View style={styles.plantinfo}>
        <Image 
          source={imageNames[plant]}
        />
        <Text>Common Name: {plantData2[plant].commonName}</Text>
        <Text>Scientific Name: {plantData2[plant].scientificName}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    allplants: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    plantinfo: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollview: {
      flex: 1,
      width: '100%'
    },
    homescreen: {
        flex: 1,
    },
    addplantsbutton: {
        alignSelf: 'flex-end'
    }
  });
  