import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { courses } from '../data/StudentDb'

const Course = ({ studentData }) => {
    const studentCourse = courses.find(course => course.id === studentData.course_id);

    return (
        <>
        <View style={styles.profile}>
            <View style={styles.profileContainer}>
                <Text style={styles.name}>{studentCourse.name}</Text>
                <Text style={styles.basicInfo}>
                    code: {studentCourse.course_code}  | Dept:  {studentCourse.department}
                </Text>
            </View>

            <View style={styles.verticalLine} />

            {/* Course Information*/}
            <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>Course Information</Text>
                <View style={styles.infoContent}>
                    <Text style={styles.infoText}>Code: {studentCourse.course_code}</Text>
                    <Text style={styles.infoText}>Department: {studentCourse.department}</Text>
                    <Text style={styles.infoText}>Duration: {studentCourse.duration}</Text>
                    <Text style={styles.infoText}>Description: {studentCourse.description}</Text>
                </View>
            </View>
            <View style={styles.verticalLine} />

             
                  
        </View>
        <View style={styles.footer_text}>
        <Text style={styles.footer_text_content}>UOV {'\u00A9'}  2024</Text>
      </View>
       </> 

    )
};

const styles = StyleSheet.create({
    profile: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        width: '90%',
        marginLeft: 20,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verticalLine: {
        width: "85%",
        backgroundColor: '#ccc',
        height: 2,
        marginHorizontal: 15,
        marginBottom: 10,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000',
    },
    footer_text: {
        backgroundColor: '#4b0150',
        width: '90%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 20,
        marginTop:70,
      },
      footer_text_content: {
        color: '#fff',
        fontSize: 12,
        flex: 1,
        marginTop:5,
      },
    basicInfo: {
        fontSize: 20,
        color: '#666',
        marginTop: 5,
    },
    infoSection: {
        marginHorizontal: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    infoContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        marginVertical: 1,

    },
    infoText: {
        fontSize: 18,
        color: '#333',
        marginVertical: 1,
    },
});

export default Course;