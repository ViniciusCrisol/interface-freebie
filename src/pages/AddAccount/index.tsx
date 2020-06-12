import React from 'react';

import { Container, ItemsContainer } from './styles';

import GoBackButton from '../../components/GoBackButton';
import Title from '../../components/Title';
import Cards from '../../components/AddAccountCards';

const AddAccount: React.FC = () => {
  return (
    <Container>
      <GoBackButton />
      <ItemsContainer>
        <Title Text='Add account' />
        <Cards />
      </ItemsContainer>
    </Container>
  );
};

export default AddAccount;
