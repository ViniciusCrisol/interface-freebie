import React from 'react';

import { Container, Form, Label, Input } from './styles';

import GreenButton from '../../components/GreenButton';
import GoBackButton from '../../components/GoBackButton';
import Title from '../../components/Title';

const Register: React.FC = () => {
  return (
    <Container>
      <GoBackButton />
      <Form>
        <Title Text="Let's get started" />
        <Label>What is your mobile number?</Label>

        <Input keyboardType='numeric' placeholder='Mobile number' />
      </Form>

      <GreenButton To='Account' Title='Continue' />
    </Container>
  );
};

export default Register;
