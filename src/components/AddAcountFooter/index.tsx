import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Button,
  TextButton,
  PlusButton,
  ButtonBackground,
} from './styles';

const AddAcountFooter: React.FC = () => {
  return (
    <Container>
      <Button>
        <Feather name='credit-card' size={20} color='#C6C6C6' />
        <TextButton>Accounts</TextButton>
      </Button>
      <Button>
        <Feather name='clipboard' size={20} color='#C6C6C6' />
        <TextButton>Budget</TextButton>
      </Button>
      <PlusButton>
        <ButtonBackground colors={['#2DC897', '#7EF192']}>
          <Feather name='plus' size={40} color='white' />
        </ButtonBackground>
      </PlusButton>
      <Button>
        <Feather name='paperclip' size={20} color='#C6C6C6' />
        <TextButton>Reports</TextButton>
      </Button>
      <Button>
        <Feather name='dollar-sign' size={20} color='#C6C6C6' />
        <TextButton>Dashboard</TextButton>
      </Button>
    </Container>
  );
};

export default AddAcountFooter;
