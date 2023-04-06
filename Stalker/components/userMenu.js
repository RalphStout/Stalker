import { StyleSheet, View, Text } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UserMenu() {
    const [toggle, setToggle] = useState(true);
    const [MenuHeight, setMenuHeight] = useState('25%');
    
    return (
        <View style={toggle ? styles.Users : styles.UsersBigger}>
            <Icon name="chevron-up-outline" 
                  style={styles.UpIcon} 
                  onPress={() => {
                    setToggle(!toggle);
                  }}
                  />
            
        </View>
    );
}


const styles = StyleSheet.create({
    Users: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        height: '20%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '50 50 0 0',
        display: 'flex',
        alignItems: 'center'
    },
    UsersBigger: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        height: '50%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: '50 50 0 0',
        display: 'flex',
        alignItems: 'center'
    },
    UpIcon: {
        fontSize: 50
        
    }
  });

