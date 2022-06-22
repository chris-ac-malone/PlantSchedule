import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as RNFS from 'react-native-fs';


const PlantSummary = ({ commonName, scientificName, image }: {commonName: string; scientificName: string; image: string}) => {
    return (
      <View style={styles.container}>
        <Text>{commonName}</Text>
      </View>
    )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default PlantSummary;