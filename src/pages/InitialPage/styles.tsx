import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

export const Label = styled.Text`
  text-align: center;
  color: white;
  font-size: 16px;
  line-height: 26px;

  margin-top: 20px;
`;

export const PhoneImage = styled.Image``;

export const Header = styled.View`
  margin-top: 120px;
  padding: 0 30px;
`;

export const Footer = styled(LinearGradient)`
  position: absolute;
  bottom: 0;

  height: 300px;
  width: 100%;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;

  padding: 30px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 130px;
  height: 50px;

  border: 1px solid white;
  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;

export const LoginText = styled.Text`
  color: white;
  font-size: 18px;
`;

export const RegisterButton = styled.TouchableOpacity`
  width: 130px;
  height: 50px;

  border-radius: 25px;
  background-color: white;

  align-items: center;
  justify-content: center;
`;

export const RegisterText = styled.Text`
  color: #1c1c1c;
  font-size: 18px;
`;
