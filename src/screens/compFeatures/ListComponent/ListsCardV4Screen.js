import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Header, ListsCardV4} from '../../../components';
import LISTMOVIE from './../../../api/DummyData';

const ListsCardV4Screen = props => {
  // ACTION
  const clickAction = param => {
    console.log(param);
  };

  return (
    <Container>
      <Header padder backButton>
        List Card V4 Component
      </Header>
      <ListsCardV4 data={[...LISTMOVIE, ...LISTMOVIE]} clickAction={clickAction} />
    </Container>
  );
};

export default withNavigation(ListsCardV4Screen);
