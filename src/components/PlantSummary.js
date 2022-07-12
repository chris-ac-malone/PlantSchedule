import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { imageNames } from '../data/images';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/native-stack';

export const PlantSummary = ( props ) => {
    const navigation = useNavigation();
        return (
            <>
                <TouchableOpacity onPress={() => navigation.navigate('Plant Info')}>
                    <View style={styles.container}>
                        <Image 
                            source={imageNames[props.image]}
                            style={{width: 100, height: 100, flex: 3, alignSelf: 'stretch'}}
                        />
                        <View style={styles.namesContainer}>
                            <Text style={styles.commonName}>{props.commonName}</Text>
                            <Text style={styles.scientificName}>{props.scientificName}</Text>
                        </View>
                    </View>
                    <View style={{width: '100%', borderBottomColor: 'rgba(50,50,50,.2)', borderBottomWidth: 1, paddingTop: 20}}/>
                </TouchableOpacity>
            </>
        )
    }
    

    const styles = StyleSheet.create({
        container: {
          flexDirection: 'row',
          flex: 0,
          justifyContent: 'center',
          height: 100,
          paddingTop: 10
        },
        namesContainer: {
            paddingLeft: 7,
            flex: 6,
            flexDirection: 'column',
        },
        commonName: {
            paddingTop: 2,
            fontSize: 16,
        },
        scientificName: {
            fontSize: 16,
            color: 'rgba(80,80,80,.8)',
            fontStyle: 'italic',
            fontWeight: "200"
        }
      });