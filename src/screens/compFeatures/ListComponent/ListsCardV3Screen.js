import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Header, ListsCardV3} from '../../../components';
import LISTMOVIE from './../../../api/DummyData';

const ListsCardV3Screen = props => {
  // ACTION
  const clickAction = param => {
    console.log(param);
  };

  return (
    <Container>
      <Header padder backButton>
        List Card V3 Component
      </Header>
      <ListsCardV3 data={LISTMOVIE} clickAction={clickAction} />
    </Container>
  );
};

export default withNavigation(ListsCardV3Screen);
