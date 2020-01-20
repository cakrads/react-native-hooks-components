import React from 'react';
import {View, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Header, Container, Text} from '../../../components';

const EmptyScreenCompScreen = props => {
  return (
    <Container>
      <Header padder backButton>
        Blank Screen
      </Header>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./../../../assets/images/no-data.png')}
          style={{width: 250, height: 190, marginBottom: 20}}
        />
        <Text>Sorry, there are no content here.</Text>
      </View>
    </Container>
  );
};

export default withNavigation(EmptyScreenCompScreen);
