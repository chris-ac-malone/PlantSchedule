import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, StatusBar } from 'react-native';
import { PlantSummary } from '../components/PlantSummary';
import { plantData } from '../data/plants';

var plants = [];
plantData.forEach(plant => {
  console.log(plant)
  plants.push(
    <PlantSummary image={plant.image} commonName={plant.commonName} scientificName={plant.scientificName} />
  )
})

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

const styles = StyleSheet.create({
    allplants: {
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
  