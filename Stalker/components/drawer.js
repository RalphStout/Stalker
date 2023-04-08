import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerContext } from '../App'


// Menu that slides out from the left that shows menu
export default function AccountMenu(){
    const [toggleDrawer, setToggleDrawer]= useContext(DrawerContext)

    if(toggleDrawer){
        return (
            <View style={styles.MenuOpen}>
                <Icon name="close" style={styles.MenuIcon} 
                      onPress={() => { setToggleDrawer(!toggleDrawer) }}/>
                <View>
                    <Text style={styles.List}>Friends</Text>
                    <Text style={styles.List}>Account</Text>
                    <Text style={styles.List}>Sign Out</Text>
                </View>
            </View>
        );
    }
    else return;
}

const styles = StyleSheet.create({
    MenuOpen: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    MenuIcon: {
        fontSize: 65,
        position: 'absolute',
        top: 60,
        left: 30
    },
    List:{
        textAlign: 'center',
        fontSize: 35,
        padding: 40
    }
})