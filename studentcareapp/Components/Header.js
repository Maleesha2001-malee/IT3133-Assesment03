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
        maxWidth: '100%',
        height:80,
        justifyContent: 'center',
    },
    header_text_content: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        marginTop:30
    },
    imageContainer: {
       alignItems: 'center', 
       maxWidth: '100%',
      
       
    },
    image: {
        width: 150, 
        height: 50, 
        resizeMode: 'contain', 
    },
});