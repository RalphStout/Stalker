import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import * as Location from 'expo-location';

// Importing Component
import UserMenu from './components/userMenu';
import DrawerMenu from './components/drawer'

// Creating Context
export const DrawerContext = React.createContext();

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
      <DrawerContext.Provider value={[toggleDrawer, setToggleDrawer]}>
        {/* Renders Map and user location with the initial region over the user location
            and allows the mapview to follow the use location */}
        <MapView style={styles.map} 
          initialRegion={location}
          showsUserLocation='true'
          followsUserLocation='true'
          />
        <UserMenu />
        {/* Menu Icon When clicked Opens Side Drawer */}
        <Icon name="menu" style={styles.MenuIcon} 
          onPress={() => { setToggleDrawer(!toggleDrawer) }}/>
        <DrawerMenu toggled={toggleDrawer}/>
      </DrawerContext.Provider>
        
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