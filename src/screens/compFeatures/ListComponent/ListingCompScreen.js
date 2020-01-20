import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, ListSimpleV1, Header} from '../../../components';

const ListingCompScreen = props => {
  const componentList = [
    {title: 'List Card V1', screenName: 'ListsCardV1Screen', param: 1},
    {title: 'List Card V2', screenName: 'ListsCardV2Screen', param: 1},
  ];

  // ACTION
  const goToDetail = (screen, param) => {
    props.navigation.navigate(screen, {data: {type: param}});
  };

  return (
    <Container>
      <Header padder backButton>
        List Component (ListSimpleV1)
      </Header>
      <ListSimpleV1 data={componentList} clickAction={goToDetail} />
    </Container>
  );
};

export default withNavigation(ListingCompScreen);
