import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from './styles';

interface ButtonColor {
  white?: boolean;
}

const GoBackButton: React.FC<ButtonColor> = ({ white }) => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <BackButton onPress={handleNavigateBack}>
      <Feather
        name='arrow-left'
        size={20}
        color={white ? 'white' : '#1c1c1c'}
      />
    </BackButton>
  );
};

export default GoBackButton;
