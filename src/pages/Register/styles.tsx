import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding: 40px 20px;

  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;

  margin-top: 140px;
`;

export const Label = styled.Text`
  margin-top: 80px;

  font-size: 16px;
  color: #1c1c1c;
`;

export const Input = styled.TextInput`
  margin-top: 20px;

  border: 1px solid #bbb;
  padding: 15px 20px;
`;
