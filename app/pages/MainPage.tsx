import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, LogBox } from 'react-native';
import { useFonts, CinzelDecorative_400Regular } from '@expo-google-fonts/cinzel-decorative';
import { NotoSansKR_400Regular } from '@expo-google-fonts/noto-sans-kr';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import CardList from '../components/CardList';
import Loading from '../components/Loading';
import data from '../../data.json';

SplashScreen.preventAutoHideAsync();

type DataType = {
  list: {
    title: string;
    desc: string;
    image: string;
  }[];
};

export default function MainPage() {
  LogBox.ignoreLogs(['Warning: ...']);
  const [appIsReady, setAppIsReady] = useState(false);
  const [state, setState] = useState<DataType>({ list: [] });
  const [isLoad, setIsLoad] = useState(true);

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

  useEffect(() => {
    setState(data);
    setTimeout(() => {
      setIsLoad(false);
    }, 5000);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return isLoad ? <Loading /> : (
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
        <CardList />
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
  footer: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 20,
  },
});
