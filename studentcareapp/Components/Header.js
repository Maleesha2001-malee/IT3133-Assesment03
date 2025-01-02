import React from 'react';
import { View,Text, StyleSheet } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.header_text}>UoV Student Care</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#4b0150',
        alignItems: 'center',
        width: '1140px',
        height: '150px',


    },
    header_text: {
        color: '#fff',
        fontSize: '40px',
        marginTop: '70px'
    }
});

export default Header;