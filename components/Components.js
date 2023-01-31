import React from 'react'
import { View, Text, Image, ImageSourcePropType, StyleSheet, Dimensions, Animated } from 'react-native';

export const card1 = require("../assets/card1.png");
export const card1g = require("../assets/card1g.png");
export const card2 = require("../assets/card2.png");
export const card2g = require("../assets/card2g.png");
export const card3 = require("../assets/card3.png");
export const card3g = require("../assets/card3g.png");

export const Card = ({ card, opacity }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Animated.Image
      style={[styles.image, {opacity}]}
      source={card.photo}
      resizeMode="cover"
    />

    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}`}
      </Text>
    </View>
  </View>
)

export const OverlayLabel = ({ label, color }) => (
    <View style={[styles.overlayLabel, { borderColor: color }]}>
      <Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
    </View>
)

export const styles = StyleSheet.create({
    card: {
        height: Dimensions.get("window").height - 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        elevation: 2,
      },
      image: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
      },
      photoDescriptionContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
      },
      text: {
        textAlign: 'center',
        fontSize: 20,
        color: "white",
        textShadowColor: "black",
        textShadowRadius: 10,
      },
      overlayLabel: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
      },
      overlayLabelText: {
        fontSize: 25,
        textAlign: 'center',
      },
})