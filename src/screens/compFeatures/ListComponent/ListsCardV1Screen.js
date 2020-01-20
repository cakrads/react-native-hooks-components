import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Header, ListsCardV1} from '../../../components';
import LISTMOVIE from './../../../api/DummyData';

const ListsCardV1Screen = props => {
  // ACTION
  const clickAction = param => {
    console.log(param);
  };

  return (
    <Container>
      <Header padder backButton>
        List Card V1 Component
      </Header>
      <ListsCardV1 data={LISTMOVIE} clickAction={clickAction} />
    </Container>
  );
};

export default withNavigation(ListsCardV1Screen);
