import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Header, ListsCardV2} from '../../../components';
import LISTMOVIE from './../../../api/DummyData';

const ListsCardV2Screen = props => {
  // ACTION
  const clickAction = param => {
    console.log(param);
  };

  return (
    <Container>
      <Header padder backButton>
        List Card V2 Component
      </Header>
      <ListsCardV2 data={LISTMOVIE} clickAction={clickAction} />
    </Container>
  );
};

export default withNavigation(ListsCardV2Screen);
