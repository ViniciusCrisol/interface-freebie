import React from 'react';

import {
  Container,
  Header,
  PictureContainer,
  ProfileImage,
  Label,
  Message,
} from './styles';

import GoBackButton from '../../components/GoBackButton';
import Title from '../../components/Title';
import GreenButton from '../../components/GreenButton';

const profile = require('../../assets/profile.png');

const Profile: React.FC = () => {
  return (
    <Container>
      <GoBackButton />

      <Header>
        <Title Text='More about you' />
        <PictureContainer>
          <Message>Upload your profile picture</Message>
          <ProfileImage source={profile} />
          <Label>Btw, you look great :)</Label>
        </PictureContainer>
      </Header>

      <GreenButton Title='Continue' To='Account' />
    </Container>
  );
};

export default Profile;
