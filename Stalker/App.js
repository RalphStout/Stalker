import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Location from 'expo-location';

// Importing Component
import UserMenu from './components/userMenu';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [toggleDrawer, setToggleDrawer] = useState(false);

  // Use Effect used to get users location and stores it in location state
  useEffect(() => {
    async () => {
      
      // Request Location permission if granted location is saved in location state
      // If not granted then will store error message in error message state
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
  }, []);


  return (
    <View>
      <MapView style={styles.map} 
        initialRegion={location}
        showsUserLocation='true'
        followsUserLocation='true'
        />
      <UserMenu />
      <Icon name="menu" style={styles.MenuIcon}  />
        
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  MenuIcon: {
    fontSize: 65,
    position: 'absolute',
    top: 60,
    left: 30
  }
});