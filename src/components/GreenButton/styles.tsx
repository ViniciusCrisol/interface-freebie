import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  overflow: hidden;
  border-radius: 25px;
`;

export const ButtonBackground = styled(LinearGradient)`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
