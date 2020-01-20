import React from 'react';
import {withNavigation} from 'react-navigation';
import {ListSimpleV1, Header, Container, Content} from './../../../components';

const DetailListCompScreen = props => {
  const componentList = [
    {title: 'Detail V1', screenName: 'DetailCompScreen', param: 1},
  ];

  // ACTION
  const goToDetail = (screen, param) => {
    props.navigation.navigate(screen, {data: {type: param}});
  };

  return (
    <Container>
      <Header padder backButton>
        List Detail Screen
      </Header>
      <ListSimpleV1 data={componentList} clickAction={goToDetail} />
    </Container>
  );
};

export default withNavigation(DetailListCompScreen);
