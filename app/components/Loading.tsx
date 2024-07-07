import React from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';

const Loading = () => {
  const rotateValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotateY: rotateInterpolate }],
  };

  return (
    <View style={styles.loadingContainer}>
      <View style={styles.tarotCard}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <View style={[styles.cardSide, styles.front]}>
            <Image 
              source={require('../../assets/images/card-back.png')}
              style={styles.image}
            />
          </View>
          <View style={[styles.cardSide, styles.back]} />
        </Animated.View>
      </View>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  tarotCard: {
    width: 150,
    height: 250,
    perspective: 1000,
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
  },
  cardSide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: 10,
  },
  front: {
    backgroundColor: 'balck', 
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  back: {
    backgroundColor: 'red', 
    transform: [{ rotateY: '180deg' }],
  },
  loadingText: {
    marginTop: 20,
    color: 'white',
    fontSize: 24,
    fontFamily: 'Arial',
  },
});

export default Loading;
