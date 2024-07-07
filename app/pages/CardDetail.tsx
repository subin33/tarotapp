import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useFonts, CinzelDecorative_400Regular } from '@expo-google-fonts/cinzel-decorative';
const tarotData = require('../../tarot_data.json');

type TarotCard = {
  type: string;
  image: any;
  name: string;
  value: number;
  kr: {
    title: string;
    total: string;
    up: {
      total: string;
      money: string;
      love: string;
    };
  };
};

const imageMap: { [key: string]: any } = {
  "fool.png": require('../../assets/tarot_img/fool.png'),
  "magician.png": require('../../assets/tarot_img/magician.png'),
  "high_priestess.png": require('../../assets/tarot_img/high_priestess.png'),
  "empress.png": require('../../assets/tarot_img/empress.png'),
  "emperor.png": require('../../assets/tarot_img/emperor.png'),
  "hierophant.png": require('../../assets/tarot_img/hierophant.png'),
  "lovers.png": require('../../assets/tarot_img/lovers.png'),
  "chariot.png": require('../../assets/tarot_img/chariot.png'),
  "strength.png": require('../../assets/tarot_img/strength.png'),
  "hermit.png": require('../../assets/tarot_img/hermit.png')
};

(tarotData as TarotCard[]).forEach(card => {
  card.image = imageMap[card.image];
});

const CardDetail = () => {
  let [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 예시로 첫 번째 카드 정보를 사용합니다.
  const card = tarotData[0];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'CinzelDecorative_400Regular' }]}>{card.kr.title}</Text>
      <Image source={card.image} style={styles.image} />
      <Text style={styles.description}>{card.kr.total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000', // Background color set to black
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Text color set to white
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff', // Text color set to white
  },
});

export default CardDetail;
