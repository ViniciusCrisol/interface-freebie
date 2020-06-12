import React from 'react';
import { Keyboard } from 'react-native';

import { Container, HeaderTitle, Card, Label, Input, Form } from './styles';

import GoBackButton from '../../components/GoBackButton';
import GreenButton from '../../components/GreenButton';

const AddManualAccount: React.FC = () => {
  return (
    <Container
      start={{ x: 1, y: 0.4 }}
      end={{ x: 0, y: 0 }}
      colors={['#F07590', '#FFB382']}
    >
      <GoBackButton white />
      <HeaderTitle>Add manual account</HeaderTitle>

      <Card>
        <Form>
          <Label>Details</Label>

          <Input placeholder='Account name' />
          <Input keyboardType='numeric' placeholder='Current ballance' />
        </Form>
        <GreenButton Title='Add account' To='Success' />
      </Card>
    </Container>
  );
};

export default AddManualAccount;
