import React from 'react';

import { Container, Items, Label } from './styles';

import Title from '../../components/Title';
import PremiumCards from '../../components/PremiumCards';

const Premium: React.FC = () => {
  return (
    <Container>
      <Items>
        <Title Text='Upgrade to Premium' />
        <PremiumCards />
      </Items>

      <Label>Cancel any time in AppleStore</Label>
    </Container>
  );
};

export default Premium;
