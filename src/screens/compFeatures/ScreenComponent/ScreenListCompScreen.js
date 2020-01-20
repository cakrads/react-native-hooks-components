import React from 'react';
import {withNavigation} from 'react-navigation';
import {ListSimpleV1, Header, Container} from '../../../components';

const ScreenListCompScreen = props => {
  const componentList = [
    {title: 'Detail Pages', screenName: 'DetailListCompScreen', param: 1},
    {title: 'Empty Pages', screenName: 'EmptyScreenCompScreen', param: 1},
    {title: 'Loading Pages', screenName: 'LoadingScreenCompScreen', param: 1},
  ];

  // ACTION
  const goToDetail = (screen, param) => {
    props.navigation.navigate(screen, {data: {type: param}});
  };

  return (
    <Container>
      <Header padder backButton>
        List Screen
      </Header>
      <ListSimpleV1 data={componentList} clickAction={goToDetail} />
    </Container>
  );
};

export default withNavigation(ScreenListCompScreen);
