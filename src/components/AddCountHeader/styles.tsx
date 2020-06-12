import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  height: 90px;

  margin-top: ${`${Constants.statusBarHeight + 20}px`};

  padding: 0 20px;
`;

export const Items = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;
`;

export const Footer = styled.View`
  width: 100%;

  margin-top: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLabel = styled.Text`
  color: #606060;
  font-size: 12px;
`;
