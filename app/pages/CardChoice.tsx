// app/CardChoice.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // useNavigation 훅 가져오기
import { MaterialIcons } from '@expo/vector-icons'; // MaterialIcons 가져오기

const cardImage = require('../../assets/images/card-back.png'); // 카드 뒷면 이미지 경로

export default function CardChoice() {
  const navigation = useNavigation(); // useNavigation 훅 사용
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const handleCardSelect = (index: number) => {
    if (selectedCards.includes(index)) {
      setSelectedCards(selectedCards.filter(card => card !== index));
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, index]);
    } else {
      Alert.alert("알림", "3개의 카드만 선택할 수 있습니다.");
    }
  };

  const handleCompleteSelection = () => {
    Alert.alert("알림", "여기에는 결과 페이지로 넘어갈것입니다");
    // 결과 페이지로 넘어가는 로직 추가
  };

  return (
    <View style={styles.container}>
      {/* 뒤로 가기 버튼 */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>마음이 이끄는 카드 세장을 선택하세요</Text>
      <View style={styles.cardContainer}>
        {Array.from({ length: 9 }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleCardSelect(index)}>
            <Image 
              source={cardImage} 
              style={[
                styles.card, 
                selectedCards.includes(index) && styles.selectedCard
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
      {selectedCards.length === 3 && (
        <TouchableOpacity style={styles.button} onPress={handleCompleteSelection}>
          <Text style={styles.buttonText}>선택 완료</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // 배경색을 검정색으로 변경
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40, // 필요한 경우 이 값을 조정하여 위치를 변경하세요
    left: 20, // 필요한 경우 이 값을 조정하여 위치를 변경하세요
    zIndex: 1, // 버튼이 다른 요소 위에 렌더링되도록 zIndex를 설정합니다
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // 글자색을 흰색으로 변경
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 100,
    height: 150,
    margin: 10,
    borderRadius: 7, // 카드의 모서리를 둥글게 수정
  },
  selectedCard: {
    borderWidth: 3,
    borderColor: '#e2e6fe', // 선택한 카드 효과 (노란색 테두리)
  },
  button: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // 버튼 글자색을 흰색으로 변경
    fontSize: 18,
  },
});
