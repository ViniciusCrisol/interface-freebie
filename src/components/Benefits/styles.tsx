import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 10px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;

  margin-left: 10px;
  padding: 5px 5px 5px 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #1c1c1c;
`;

export const Label = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #606060;

  margin-top: 5px;
`;
