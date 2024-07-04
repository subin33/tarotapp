import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useFonts, CinzelDecorative_400Regular } from '@expo-google-fonts/cinzel-decorative';
import { NotoSansKR_400Regular } from '@expo-google-fonts/noto-sans-kr';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import data from '../../data.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

type ImageMap = {
  [key: string]: any;
};

const imageMap: ImageMap = {
  money: require('../../assets/images/money.png'),
  love: require('../../assets/images/love.png'),
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    CinzelDecorative_400Regular,
    NotoSansKR_400Regular,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <LottieView 
        source={require('../../assets/animations/background.json')}  
        autoPlay 
        loop 
        resizeMode="cover"
        style={styles.backgroundAnimation}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={[styles.title, { fontFamily: 'CinzelDecorative_400Regular' }]}>Subin Tarot</Text>
        <Image 
          source={require('../../assets/images/main.png')} 
          style={styles.mainImage}
        />
        {data.list.map((item, index) => (
          <View key={index} style={styles.section}>
            <Image 
              source={imageMap[item.image]} 
              style={styles.icon}
            />
            <View style={styles.sectionText}>
              <Text style={[styles.sectionTitle, { fontFamily: 'NotoSansKR_400Regular' }]}>{item.title}</Text>
              <Text style={[styles.sectionContent, { fontFamily: 'NotoSansKR_400Regular' }]}>{item.desc}</Text>
            </View>
          </View>
        ))}
        <Text style={styles.footer}>건강운도 곧 준비중입니다 😺</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 10,
  },
  backgroundAnimation: {
    position: 'absolute',
    width: '150%',
    height: '150%',
    zIndex: -1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#fff',
  },
  mainImage: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 35,
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 5,
  },
  sectionText: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  sectionContent: {
    fontSize: 16,
    color: '#fff',
  },
  footer: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 20,
  },
});