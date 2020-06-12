import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  height: 80px;

  background-color: #fff6;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #c6c6c6;

  margin-top: 5px;
`;

export const PlusButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  border-radius: 33px;
  overflow: hidden;
`;

export const ButtonBackground = styled(LinearGradient)`
  flex: 1;

  align-items: center;
  justify-content: center;
`;
