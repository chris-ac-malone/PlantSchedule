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
    <ScrollView>
    <View style={styles.namesContainer}>
      <Text style={styles.commonName}>{plantData2[plant].commonName}</Text>
      <Text style={styles.scientificName}>{plantData2[plant].scientificName}</Text>
    </View>
      <View style={styles.plantinfo}>
        <Image 
          style={styles.plantinfoimage}
          source={imageNames[plant]}
        />
      </View>
    </ScrollView>
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
      justifyContent: 'center'
    },
    plantinfoimage: {
      width: "100%"
    },
    scrollview: {
      flex: 1,
      width: '100%'
    },
    homescreen: {
        flex: 1,
    },
    plantinfo: {
      flex: 1
    },
    addplantsbutton: {
        alignSelf: 'flex-end'
    },
    namesContainer: {
      paddingLeft: 7,
      paddingTop: 4,
      paddingBottom: 10,
      flex: 6,
      flexDirection: 'column',
      backgroundColor: '#222',
  },
  commonName: {
      paddingTop: 2,
      fontSize: 20,
      color: '#eee',
  },
  scientificName: {
    paddingLeft: 10,
    fontSize: 19,
    color: 'rgba(80,80,80,.8)',
    fontStyle: 'italic',
    fontWeight: "200",
    color: '#fff',
  }
  });
  