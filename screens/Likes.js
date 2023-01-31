import React, { useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Likes(){
    return(
        <View style={styles.container}>
            <Text>User Likes Here!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      justifyContent:  "center",
      alignSelf: "center"
    }
});