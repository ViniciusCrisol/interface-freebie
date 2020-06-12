import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Card,
  LabelTop,
  Title,
  Label,
  Content,
  IconContainer,
} from './styles';

const PremiumCards: React.FC = () => {
  return (
    <Container>
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

      <Card colors={['#FFA26B', '#FFD387']}>
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

      <Card colors={['#8A63E5', '#E9B0FF']}>
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
    </Container>
  );
};

export default PremiumCards;
