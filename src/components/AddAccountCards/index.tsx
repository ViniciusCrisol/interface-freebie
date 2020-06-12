import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Card,
  Title,
  Label,
  CardContainer,
  IconContainer,
  ButtonContainer,
} from './styles';

const AddAccountCards: React.FC = () => {
  const navigation = useNavigation();

  function handleNavgigate() {
    navigation.navigate('AddManualAccount');
  }

  return (
    <Container>
      <ButtonContainer onPress={handleNavgigate} activeOpacity={0.6}>
        <Card
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#6D63EF', '#A1A3FF']}
        >
          <CardContainer>
            <Title>Bank account</Title>
            <Label>
              Automatically import cleared transactions from your personal bank
              account.
            </Label>
          </CardContainer>
          <IconContainer>
            <Feather name='dollar-sign' size={25} color='white' />
          </IconContainer>
        </Card>
      </ButtonContainer>

      <ButtonContainer onPress={handleNavgigate} activeOpacity={0.6}>
        <Card
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#EB6A9F', '#FBADB4']}
        >
          <IconContainer>
            <Feather name='edit-3' size={25} color='white' />
          </IconContainer>
          <CardContainer>
            <Title>Manual account</Title>
            <Label>
              Setup a current ballance and get total control by manually adding
              transactions.
            </Label>
          </CardContainer>
        </Card>
      </ButtonContainer>
    </Container>
  );
};

export default AddAccountCards;
