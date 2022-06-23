import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as RNFS from 'react-native-fs';


export class PlantSummary extends Component<{ commonName?: String, scientificName?: String, plantImage?: String }> {
    render() {
        return (
            <View style={this.styles.container}>
                <Image 
                    source={require("../../assets/plants/chinesemoneytree.jpg")}
                    style={{width: 100, height: 100, flex: 4, alignSelf: 'stretch'}}
                />
                <View style={this.styles.namesContainer}>
                    <Text style={this.styles.names}>{this.props.commonName}</Text>
                    <Text style={this.styles.names}>{this.props.scientificName}</Text>
                </View>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 5 }}/>
            </View>
        )
    }
    

    styles = StyleSheet.create({
        container: {
          flexDirection: 'row',
          flex: 0,
          backgroundColor: '#ddd',
          justifyContent: 'center',
          height: 100,
          padding: (1)
        },
        namesContainer: {
            flex: 6,
            flexDirection: 'column',
        },
        names: {
        }
      });

  };

