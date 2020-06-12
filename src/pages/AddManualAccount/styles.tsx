import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;

  justify-content: flex-end;
`;

export const HeaderTitle = styled.Text`
  position: absolute;
  top: 70px;

  width: 100%;

  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export const Card = styled.View`
  background-color: white;
  height: 80%;

  padding: 40px 20px;

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  justify-content: space-between;
`;

export const Form = styled.View`
  flex: 1;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #8a8a8a;
`;

export const Input = styled.TextInput`
  margin-top: 20px;

  border: 1px solid #bbb;
  padding: 15px 20px;
`;
