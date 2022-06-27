export default function AllPlants() {
    var plants = [];
  
    plantData.forEach(plant => {
      console.log(plant)
      plants.push(
        <PlantSummary image={plant.image} commonName={plant.commonName} scientificName={plant.scientificName}  />
      )
    })
    
    return (
      <NavigationContainer>
        <View style={styles.container}>
        <StatusBar style="auto" />
          <View />
            <ScrollView style={styles.scrollview}>
              { plants }
            </ScrollView>
        </View>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollview: {
      flex: 1,
      width: '100%'
    }
  });
  