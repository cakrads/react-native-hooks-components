import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Text, ListSimpleV1, Header} from './../components';

const componentList = [
  {iconName: 'tasks', title: 'Button', screenName: 'ButtonCompScreen'},
  {iconName: 'bars', title: 'Card', screenName: 'CardCompScreen'},
  {iconName: 'file-o', title: 'Form', screenName: 'FormScreen'},
  {iconName: 'rocket', title: 'Icons', screenName: 'IconsScreen'},
  {iconName: 'th-list', title: 'List', screenName: 'ListingCompScreen'},
  {iconName: 'rotate-right', title: 'Loading', screenName: 'LoadingCompScreen'},
  {iconName: 'book', title: 'Screen', screenName: 'ScreenListCompScreen'},
];

const ListComponents = props => {
  const navData = props.navigation.getParam('data');
  // ACTION
  const goToDetail = screen => {
    props.navigation.navigate(screen);
  };

  return (
    <Container>
      <Header padder>Component List</Header>
      <ListSimpleV1 data={componentList} clickAction={goToDetail} />
    </Container>
  );
};

Text.defaultProps = {
  style: {fontFamily: 'OpenSans'},
};

export default withNavigation(ListComponents);
