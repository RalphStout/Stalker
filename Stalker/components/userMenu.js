import { StyleSheet, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Users = {
    '1': {
        Name: 'Phil',

    },
    '2': {
        Name: 'Claire',

    },
    '3': {
        Name: 'Luke',

    }
}

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

            <View style={styles.UserProfile}><Icon name='person-circle-outline' style={styles.ProfileIcon} /><Text style={styles.ProfileName}>{Users[1].Name}</Text></View>
            <View style={styles.UserProfile}><Icon name='person-circle-outline' style={styles.ProfileIcon} /><Text style={styles.ProfileName}>{Users[2].Name}</Text></View>
            <View style={styles.UserProfile}><Icon name='person-circle-outline' style={styles.ProfileIcon} /><Text style={styles.ProfileName}>{Users[3].Name}</Text></View>
            
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
        
    },
    UserProfile: {
        width: '95%',
        fontSize: 25,
        borderRadius: 10,
        borderWidth: 1,
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
    },
    ProfileIcon: {
        fontSize: 40,
        width: '25%',
    },
    ProfileName: {
        fontSize: 25,
        width: '25%',
        paddingTop: 5,
        paddingLeft: 5,
        textAlign: 'left'
    }
  });

