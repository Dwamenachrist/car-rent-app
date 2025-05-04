import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

const vehicles = [
  {
    id: '1',
    name: 'Toyota',
    model: 'Yaris iA',
    price: '$350',
    engine: '4-Cyl 1.5 Liter',
    image: require('../assets/images/toyota.png'),
  },
  {
    id: '2',
    name: 'Hyundai',
    model: 'i20',
    price: '$250',
    engine: '4-Cyl 1.2 Liter',
    image: require('../assets/images/hyundai.png'),
  },
  {
    id: '3',
    name: 'Honda',
    model: 'Civic',
    price: '$400',
    engine: '4-Cyl 2.0 Liter',
    image: require('../assets/images/acura.png'),
  },
  {
    id: '4',
    name: 'Ford',
    model: 'Focus',
    price: '$300',
    engine: '4-Cyl 1.6 Liter',
    image: require('../assets/images/ford.png'),
  },
];

const categories = [
  { id: '1', name: 'Standard', count: 56, image: require('../assets/images/car1.png') },
  { id: '2', name: 'Prestige', count: 22, image: require('../assets/images/car2.png') },
  { id: '3', name: 'SUV', count: 34, image: require('../assets/images/car3.png') },
];

export default function VehicleScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    'Gilroy-Light': require('../assets/fonts/Gilroy-Light.ttf'),
    'Gilroy-SemiBold': require('../assets/fonts/Gilroy-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#3366FF" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />;
  }

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    vehicle.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search for a car"
          placeholderTextColor="#212121"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity><Ionicons name="search" size={24} color="#212121" /></TouchableOpacity>
      </View>

      {/* Categories */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.categoryContainer}
        renderItem={({ item, index }) => (
          <View style={[styles.categoryCard, index === 0 && styles.categoryCardActive]}>
            <Image source={item.image} style={styles.categoryImage} resizeMode="contain" />
            <Text style={[styles.categoryText, index === 0 && styles.categoryTextActive]}>{item.name}</Text>
            <Text style={[styles.categoryCount, index === 0 && styles.categoryTextActive]}>{item.count}</Text>
          </View>
        )}
      />

      {/* Heading */}
      <Text style={styles.availableText}>Available vehicles</Text>

      {/* Vehicle Cards */}
      <FlatList
        data={filteredVehicles}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.vehicleList,
          filteredVehicles.length === 1 && { flexGrow: 1, justifyContent: 'center' }, // Dynamically center the single item
        ]}
        renderItem={({ item }) => (
          <View style={styles.vehicleCard}>
            <View style={styles.vehicleTop}>
              <View>
                <Text style={styles.vehicleName}>{item.name}</Text>
                <Text style={styles.vehicleModel}>{item.model}</Text>
                <Text style={styles.engineLabel}>Engine</Text>
              </View>
              <View style={styles.vehicleInfoRight}>
                <Text style={styles.vehiclePrice}>{item.price}</Text>
                <Text style={styles.perMonth}>/ month</Text>
                <Text style={styles.engineSpec}>{item.engine}</Text>
              </View>
            </View>
            <Image source={item.image} style={styles.vehicleImage} resizeMode="contain" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchContainer: {
    width: 354,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  categoryContainer: {
    paddingVertical: 10,
    marginBottom: 10,
    paddingBottom: 120,
    paddingHorizontal: 20,
  },
  categoryCard: {
    width: 130,
    height: 161,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 40,
  },
  categoryCardActive: {
    backgroundColor: '#304FFE',
  },
  categoryImage: {
    width: 151,
    height: 86,
    marginLeft: -50,
  },
  categoryText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: '#212121',
  },
  categoryCount: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#000',
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  availableText: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginTop: 40,
    marginLeft: 20,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  vehicleList: {
    paddingBottom: 20,
  },
  singleVehicleList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  vehicleCard: {
    width: 354,
    height: 335,
    backgroundColor: '#F9F9F9',
    borderRadius: 35,
    marginBottom: 20,
    padding: 15,
  },
  singleVehicleCard: {
    marginBottom: 0,
  },
  vehicleTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleName: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 34,
    color: '#000',
  },
  vehicleModel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#999',
  },
  engineLabel: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#000',
  },
  vehicleInfoRight: {
    alignItems: 'flex-end',
  },
  vehiclePrice: {
    fontFamily: 'Gilroy-Light',
    fontSize: 34,
    color: '#3366FF',
  },
  perMonth: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#999',
  },
  engineSpec: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#000',
  },
  vehicleImage: {
    width: 350,
    height: 200,
    marginTop: 10,
    alignSelf: 'center',
  },
});
