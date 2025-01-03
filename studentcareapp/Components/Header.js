import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView ,} from 'react-native';

export default function App() {
   
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header_text}>
                <Text style={styles.header_text_content}>UoV Student Care</Text>
            </View>
            
            {/* Image */}
            <View style={styles.imageContainer}>
            <Image 
                source={require('../assets/Logo/UoV_Logo.png')}
                style={styles.image}
            />
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    header_text: {
        backgroundColor: '#4b0150',
        width: '100%',
        height:100,
        justifyContent: 'center',
    },
    header_text_content: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        marginTop:50
    },
    imageContainer: {
       alignItems: 'center', 
       width: '100%',
      
       
    },
    image: {
        width: 350,
        height:120,
        resizeMode: 'contain',
    },
});