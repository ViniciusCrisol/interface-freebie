import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  margin-top: 25px;
`;

export const Card = styled(LinearGradient)`
  height: 90px;

  padding: 20px;

  margin-top: 15px;
  border-radius: 10px;

  flex-direction: row;
`;

export const CardContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

export const Label = styled.Text`
  margin-top: 5px;

  color: white;
  font-size: 12px;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;

  margin: 0 15px 0 0;

  background-color: rgba(255, 255, 255, 0.2);

  border-radius: 20px;

  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.TouchableOpacity``;
