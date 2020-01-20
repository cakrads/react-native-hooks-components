import React from 'react';
import {
  Container,
  Content,
  Header,
  H1,
  H2,
  H3,
  H4,
  Text,
  View,
} from '../../components';

const TypographyCompScreen = props => {
  return (
    <Container>
      <Content padder>
        <Header backButton>Typography Component</Header>
        <View mb>
          <Header>Header Normal</Header>
          <Header
            logo={require('./../../assets/images/logo-horizontal-sm.png')}
            logoW={154}
            logoH={40}
            searchBtn
            searchScreen="SearchMovieScreen"
          />
          <Header padder backButton>
            With Back Button and Padder
          </Header>
        </View>
        <View mb>
          <H1>H1</H1>
          <H2>H2</H2>
          <H3>H3</H3>
          <H4>H4</H4>
          <H1 primary>H1 Primary</H1>
          <H1 secondary>H1 Secondary</H1>
        </View>
        <View mb>
          <Text>Normal Text</Text>
        </View>
      </Content>
    </Container>
  );
};

export default TypographyCompScreen;
