import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export class PlantSummary extends Component {
    contsructor(props) {
    }
    render() {
        return (
            <>
                <View style={this.styles.container}>
                    <Image 
                        source={this.props.image}
                        style={{width: 100, height: 100, flex: 3, alignSelf: 'stretch'}}
                    />
                    <View style={this.styles.namesContainer}>
                        <Text style={this.styles.commonName}>{this.props.commonName}</Text>
                        <Text style={this.styles.scientificName}>{this.props.scientificName}</Text>
                    </View>
                </View>
                <View style={{width: '100%', borderBottomColor: 'rgba(50,50,50,.2)', borderBottomWidth: 1, paddingTop: 20}}/>
            </>
        )
    }
    

    styles = StyleSheet.create({
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

  };

