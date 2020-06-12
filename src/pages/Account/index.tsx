import React from 'react';

import { Container, Card, Title, ScheduleImage } from './styles';

import Header from '../../components/AddCountHeader';
import Footer from '../../components/AddAcountFooter';
import GreenButton from '../../components/GreenButton';

const schedule = require('../../assets/Graphic.png');

const Account: React.FC = () => {
  return (
    <Container>
      <Header />
      <Card>
        <Title>{`You don’t have set any account. \n Create one in seconds.`}</Title>
        <ScheduleImage source={schedule} />
        <GreenButton Title='Add account' To='AddAccount' />
      </Card>
      <Footer />
    </Container>
  );
};

export default Account;
