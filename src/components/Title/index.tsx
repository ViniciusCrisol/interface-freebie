import React from 'react';

import { Container } from './styles';

interface Text {
  Text: string;
}

const Title: React.FC<Text> = ({ Text }) => {
  return <Container>{Text}</Container>;
};

export default Title;
