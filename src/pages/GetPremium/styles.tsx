import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;

  align-items: center;
  justify-content: space-between;

  padding: 40px 20px;
`;

export const Header = styled.View`
  margin-top: 120px;
`;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  color: white;
  text-align: center;
`;

export const HeaderLabel = styled.Text`
  margin-top: 15px;

  font-weight: normal;
  font-size: 14px;
  color: white;
  text-align: center;
`;

export const Card = styled.View`
  width: 90%;
  height: 475px;

  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

export const CardHeader = styled.View`
  border-bottom-color: #c6c6c6;
  border-bottom-width: 1px;

  padding-bottom: 10px;
`;

export const CardHeaderLabel = styled.Text`
  color: #8a8a8a;
  text-transform: uppercase;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`;

export const CardHeaderTitle = styled.Text`
  color: #1c1c1c;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

export const AskText = styled.Text`
  font-size: 14px;
  color: white;
`;
