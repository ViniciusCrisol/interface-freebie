import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Content, Title, Label } from './styles';

import GreenButton from '../../components/GreenButton';

const Benefits: React.FC = () => {
  return (
    <>
      <Container>
        <Feather name='check' color='#FD7F80' size={30} />

        <Content>
          <Title>Consectetuer adipiscing</Title>
          <Label>
            Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi quam
            lectus, facilisis.
          </Label>
        </Content>
      </Container>
      <Container>
        <Feather name='check' color='#FD7F80' size={30} />

        <Content>
          <Title>Consectetuer adipiscing</Title>
          <Label>
            Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi quam
            lectus, facilisis.
          </Label>
        </Content>
      </Container>
      <Container>
        <Feather name='check' color='#FD7F80' size={30} />

        <Content>
          <Title>Consectetuer adipiscing</Title>
          <Label>
            Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi quam
            lectus, facilisis.
          </Label>
        </Content>
      </Container>
      <Container>
        <Feather name='check' color='#FD7F80' size={30} />

        <Content>
          <Title>Consectetuer adipiscing</Title>
          <Label>
            Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi quam
            lectus, facilisis.
          </Label>
        </Content>
      </Container>

      <GreenButton Title='Get premium' To='AddAccount' />
    </>
  );
};

export default Benefits;
