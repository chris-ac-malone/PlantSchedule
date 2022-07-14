import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, StatusBar } from 'react-native';
import { PlantSummary } from '../components/PlantSummary';
const PlantData = require('../data/plants.json'); 
const UserPlantData = require('../data/userPlants.json'); 
import { imageNames } from '../data/images';


for(var i in PlantData) {
  console.log(PlantData[i].commonName);
}

var plants = [];

for(var i in PlantData) {
  plants.push(
    <PlantSummary key={i} image={PlantData[i].image} commonName={PlantData[i].commonName} scientificName={PlantData[i].scientificName} />
  )
}

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.homescreen}>
          <StatusBar backgroundColor='#339933' />
          <View style={styles.header}><Text style={styles.headerText}>Your Plants</Text></View>
            <View style={styles.homepageContent}></View>
            <Button title={"Test"} onPress={function(){

              
              console.log("test");


            }}></Button>
            <TouchableOpacity
                style={ styles.addplantsbutton }
                onPress={() => navigation.navigate('All Plants')}
                title="Add a Plant"
                color="black"
            ><Text style={ styles.addplantsbuttontext }>Add a Plant</Text></TouchableOpacity>
        </View>
    )
}
export const AllPlants = ({ navigation, route }) => {
    return (
      <View style={styles.allplants}>
        <View style={styles.header}><Text style={styles.headerText}>Select a Plant</Text></View>
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
      <Text style={styles.commonName}>{PlantData[plant].commonName}</Text>
      <Text style={styles.scientificName}>{PlantData[plant].scientificName}</Text>
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
    header: {
      backgroundColor: "#228822",
      width: "100%"
    },
    headerText: {
      textAlign: "center",
      padding: 10,
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
    },
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
        display: "flex",
    },
    homepageContent: {
      flex: 1
    },
    plantinfo: {
      flex: 2
    },
    addplantsbutton: {
      paddingTop: 20,
      paddingBottom: 25,
      backgroundColor: "#222",
    },
    addplantsbuttontext: {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 24,
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
  