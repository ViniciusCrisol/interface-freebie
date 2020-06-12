import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SubmitButton, ButtonText, ButtonBackground } from './styles';

interface Title {
  Title: string;
  To: string;
}

const GreenButton: React.FC<Title> = ({ Title, To }) => {
  const navigation = useNavigation();

  function handleNavgigate() {
    navigation.navigate(To);
  }

  return (
    <SubmitButton onPress={handleNavgigate} activeOpacity={0.6}>
      <ButtonBackground colors={['#2DC897', '#7EF192']}>
        <ButtonText>{Title}</ButtonText>
      </ButtonBackground>
    </SubmitButton>
  );
};

export default GreenButton;
