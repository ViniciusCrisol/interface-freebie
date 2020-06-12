import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Label,
  PhoneImage,
  Header,
  Footer,
  LoginButton,
  LoginText,
  RegisterButton,
  RegisterText,
} from './styles';

const phone = require('../../assets/mockup.png');

const InitialPage: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToRegister() {
    navigation.navigate('Register');
  }

  return (
    <Container
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={['#F07590', '#FFB382']}
    >
      <Header>
        <Title>Welcome to Budget Planner</Title>
        <Label>
          Take control of your money by tracking your expenses, adding goals
        </Label>
      </Header>

      <PhoneImage source={phone} />

      <Footer start={[0, 0.6]} end={[0, 0.2]} colors={['#F4868D', '#F4868D33']}>
        <LoginButton>
          <LoginText>Login</LoginText>
        </LoginButton>
        <RegisterButton onPress={handleNavigateToRegister}>
          <RegisterText>Register</RegisterText>
        </RegisterButton>
      </Footer>
    </Container>
  );
};

export default InitialPage;
