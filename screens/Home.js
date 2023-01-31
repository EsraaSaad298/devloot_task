import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Animated, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { photoCards, Card, OverlayLabel } from '../components/Components';
import { card1, card1g, card2, card2g, card3, card3g } from '../components/Components';
import { Ionicons } from '@expo/vector-icons';

export default function Home(){
 
    const useSwiper = useRef(null).current;
    const handleOnSwipedLeft = () => useSwiper.swipeLeft();
    const handleOnSwipedTop = () => useSwiper.swipeTop();
    const handleOnSwipedRight = () => useSwiper.swipeRight();

    const [opacity, setOpacity] = useState(new Animated.Value(1));
    const [cardIndex, setCardIndex] = useState(0);
    const [tapFlag, setTapFlag] = useState(false);
    const [photoCards, setPhotoCards] = useState([
        {
          name: 'Dylan O Brien',
          photo: card1,
          key: 1,
        },
        {
          name: 'Alex Wade',
          photo: card2,
          key: 2,
        },
        {
          name: 'Paul Wesley',
          photo: card3,
          key: 3,
        },
    ]);

    const changeImage = (card_index) => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start(() => {
            var all_images = [...photoCards];
            if(card_index == 0){
                all_images[0].photo == card1 ? all_images[0].photo = card1g : all_images[0].photo = card1;
            }
            if(card_index == 1){
                all_images[1].photo == card2 ? all_images[1].photo = card2g : all_images[1].photo = card2;
            }
            if(card_index == 2){
                all_images[2].photo == card3 ? all_images[2].photo = card3g : all_images[2].photo = card2;
            }
            setPhotoCards(all_images);
          Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
          }).start();
        });
    };
  
    return (
      <View style={styles.container}>
  
      <View style={styles.headerComponent}>
        <View style={styles.innerHeader}>
          <Image source={require("../assets/headerIcon.png")} resizeMode="contain" style={styles.headerImage} />
          <Text style={styles.headerText}> SuperApp</Text>
        </View>
        <Ionicons name="menu-outline" size={28} color={"black"} style={{marginTop: 10}} />
      </View>

    <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          cards={photoCards}
          renderCard={card => <Card card={card} opacity={opacity} />}
          cardIndex={cardIndex}
          backgroundColor="white"
          stackSize={2}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
          disableTopSwipe
          disableBottomSwipe
          horizontalThreshold={Dimensions.get("window").width / 2}
          onTapCard={(card_index) => {
            changeImage(card_index);
            setTapFlag(!tapFlag);
            setCardIndex(card_index);
          }}
          onSwipedRight={(card_index) => {
            setCardIndex(card_index)
          }}
          onSwipedLeft={(card_index) => {
            setCardIndex(card_index)
          }}
          overlayLabels={{
            left: {
              title: 'No',
              element: <OverlayLabel label="No" color="#E5566D" />,
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: 'Yes',
              element: <OverlayLabel label="Yes" color="#4CCC93" />,
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                  alignItems: 'flex-start',
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View> 

  
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    },
    headerComponent:{
      width: Dimensions.get("window").width * 0.90,
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "center",
      backgroundColor: "transparent",
      flexDirection: "row",
      paddingTop: 20
    },
    innerHeader:{
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center"
    },
    headerImage:{
      width: 30,
      height: 30
    },
    headerText:{
      color: "#e6005c",
      fontWeight: "bold",
      color: "#FF7575",
      fontSize: 25
    },
    swiperContainer:{
      width: "100%",
      alignItems: 'center',
      justifyContent: "center"
    },
    overlayWrapper: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      marginTop: 30,
      marginLeft: -30,
    },
  
  });
  