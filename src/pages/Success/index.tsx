import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Title, Label, Content } from './styles';

import GreenButton from '../../components/GreenButton';

const Success: React.FC = () => {
  return (
    <Container>
      <Content>
        <Feather name='check-circle' size={70} color='#2DC897' />
        <Title>{`Your account has been \n successfully added!`}</Title>
        <Label>
          Lorem ipsum dollor sit ament pallentesque adeipiscing elit enim minim
          ven ultricies eget, tempor sit amet, ante.
        </Label>
      </Content>
      <GreenButton To='Premium' Title='Done' />
    </Container>
  );
};

export default Success;
