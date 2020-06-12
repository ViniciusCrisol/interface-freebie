import React from 'react';
import { Feather } from '@expo/vector-icons';

const profile = require('../../assets/profile.png');

import {
  Container,
  Items,
  HeaderTitle,
  ProfileImage,
  Footer,
  FooterLabel,
} from './styles';

const AddCountHeader: React.FC = () => {
  return (
    <Container>
      <Items>
        <ProfileImage source={profile} />
        <HeaderTitle>Accounts</HeaderTitle>
        <Feather name='plus' size={30} color='#1c1c1c' />
      </Items>
      <Footer>
        <FooterLabel>Savings 2020</FooterLabel>
        <FooterLabel style={{ color: '#31D19E' }}>Savings 2020</FooterLabel>
        <FooterLabel>My Wallet 007</FooterLabel>
      </Footer>
    </Container>
  );
};

export default AddCountHeader;
