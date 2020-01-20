import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Content, ListSimpleV1, Header} from '../../../components';

const FormListCompScreen = props => {
  const componentList = [
    {title: 'Form', screenName: 'FormScreen', param: 1},
  ];

  // ACTION
  const goToDetail = (screen, param) => {
    props.navigation.navigate(screen, {data: {type: param}});
  };

  return (
    <Container>
      <Header padder backButton={true}>
        Form Component
      </Header>
      <ListSimpleV1 data={componentList} clickAction={goToDetail} />
    </Container>
  );
};

export default withNavigation(FormListCompScreen);
