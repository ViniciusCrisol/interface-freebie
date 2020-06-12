import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Card,
  LabelTop,
  Title,
  Label,
  Content,
  IconContainer,
  Button,
} from './styles';

const PremiumCards: React.FC = () => {
  const navigation = useNavigation();

  function handleNavgigate() {
    navigation.navigate('GetPremium');
  }

  return (
    <Container>
      <Button onPress={handleNavgigate} activeOpacity={0.6}>
        <Card colors={['#FFB382', '#EB6A9F']}>
          <Content>
            <LabelTop>bachelor</LabelTop>
            <Title>1 month - $6.99 </Title>
            <Label>
              Ut enim ad minim veniam, quis nostrud exercitation ultrices nulla
              quis nibh.
            </Label>
          </Content>
          <IconContainer>
            <Feather name='chevron-right' size={40} color='white' />
          </IconContainer>
        </Card>
      </Button>

      <Button onPress={handleNavgigate} activeOpacity={0.6}>
        <Card colors={['#FFA26B', '#FFD387']}>
          <Content>
            <LabelTop>bachelor</LabelTop>
            <Title>6 months - $5.99 </Title>
            <Label>
              Ut enim ad minim veniam, quis nostrud exercitation ultrices nulla
              quis nibh.
            </Label>
          </Content>
          <IconContainer>
            <Feather name='chevron-right' size={40} color='white' />
          </IconContainer>
        </Card>
      </Button>

      <Button onPress={handleNavgigate} activeOpacity={0.6}>
        <Card colors={['#8A63E5', '#E9B0FF']}>
          <Content>
            <LabelTop>bachelor</LabelTop>
            <Title>12 months - $3.99 </Title>
            <Label>
              Ut enim ad minim veniam, quis nostrud exercitation ultrices nulla
              quis nibh.
            </Label>
          </Content>
          <IconContainer>
            <Feather name='chevron-right' size={40} color='white' />
          </IconContainer>
        </Card>
      </Button>
    </Container>
  );
};

export default PremiumCards;
