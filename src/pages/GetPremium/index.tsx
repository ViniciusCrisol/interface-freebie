import React from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderLabel,
  Card,
  CardHeader,
  CardHeaderLabel,
  CardHeaderTitle,
  AskText,
} from './styles';

import GoBackButton from '../../components/GoBackButton';
import Benefits from '../../components/Benefits';

const GetPremium: React.FC = () => {
  return (
    <Container
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#F07590', '#FFB382']}
    >
      <GoBackButton white />

      <Header>
        <HeaderTitle>Bachelor Plan</HeaderTitle>
        <HeaderLabel>
          {`Start your 30 day free tiral. Reduced from \n a limited time from 6.99/month`}
        </HeaderLabel>
      </Header>

      <Card>
        <CardHeader>
          <CardHeaderLabel>monthly</CardHeaderLabel>
          <CardHeaderTitle>$6.99/mo</CardHeaderTitle>
        </CardHeader>
        <Benefits />
      </Card>
      <AskText>Questions? Read the FAQ</AskText>
    </Container>
  );
};

export default GetPremium;
