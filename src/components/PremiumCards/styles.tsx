import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity``;

export const Card = styled(LinearGradient)`
  height: 130px;

  margin-top: 15px;
  border-radius: 24px;

  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;

  padding: 20px;
`;

export const IconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const LabelTop = styled.Text`
  color: white;
  font-size: 11px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Label = styled.Text`
  color: white;
  font-size: 14px;

  margin-top: 5px;
`;
