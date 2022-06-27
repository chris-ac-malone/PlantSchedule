import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { PlantSummary } from '../components/PlantSummary';

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                onPress={() => navigation.navigate('All Plants')}
                title="All Plants"
                color="black"
            />
        </View>
    )
}
export const AllPlants = ({ navigation, route }) => {
    return (
        <View>
            <Text>ALLPLANTS</Text>
        </View>
    )
}