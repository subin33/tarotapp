import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import data from '../../data.json';

type ImageMap = {
  [key: string]: any;
};

const imageMap: ImageMap = {
  money: require('../../assets/images/money.png'),
  love: require('../../assets/images/love.png'),
};

const CardList = () => {
  return (
    <>
      {data.list.map((item, index) => (
        <View key={index} style={styles.section}>
          <Image 
            source={imageMap[item.image]} 
            style={styles.icon}
          />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <Text style={styles.sectionContent}>{item.desc}</Text>
          </View>
        </View>
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
