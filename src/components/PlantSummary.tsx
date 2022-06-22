import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as RNFS from 'react-native-fs';
import { plantData } from './data/plants';


export class PlantSummary extends Component<{ commonName?: String, scientificName?: String, image?: String }> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
        <View style={this.styles.container}>
            <Image 
                source={{uri: this.props.image}} 
            />
            <Text>{this.props.commonName}</Text>
        </View>
        )
    }
    

    styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });

  };

