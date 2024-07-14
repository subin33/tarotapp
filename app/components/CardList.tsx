// CardList.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import data from '../../data.json';
import { StackParamList } from '../navigation/StackNavigator'; // StackNavigator 파일에서 타입 정의 가져오기

type ImageMap = {
  [key: string]: any;
};

const imageMap: ImageMap = {
  money: require('../../assets/images/money.png'),
  love: require('../../assets/images/love.png'),
};

const CardList = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  return (
    <>
      {data.list.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.section}
          onPress={() => navigation.navigate('CardPage', { item })}
        >
          <Image 
            source={imageMap[item.image]} 
            style={styles.icon}
          />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionContent}>{item.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default CardList;
