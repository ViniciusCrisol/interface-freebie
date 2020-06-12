import React from 'react';

import { Container, ItemsContainer } from './styles';

import GoBackButton from '../../components/GoBackButton';
import Title from '../../components/Title';
import GreenButton from '../../components/GreenButton';
import Cards from '../../components/AddAccountCards';

const AddAccount: React.FC = () => {
  return (
    <Container>
      <GoBackButton />
      <ItemsContainer>
        <Title Text='Add account' />
        <Cards />
      </ItemsContainer>

      <GreenButton Title='Continue' To='Account' />
    </Container>
  );
};

export default AddAccount;
