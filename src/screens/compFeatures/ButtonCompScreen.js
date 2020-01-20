import React from 'react';
import {withNavigation} from 'react-navigation';
import {Container, Content, Header, View, Button} from './../../components';

const ButtonScreen = props => {
  const handleAction = () => {
    console.log('button clicked');
  };

  return (
    <Container>
      <Content padder>
        <Header backButton>Button Component</Header>
        <View mb>
          <Button onPress={handleAction}>Default</Button>
        </View>
        <View mb>
          <Button primary onPress={handleAction}>
            Primary
          </Button>
        </View>
        <View mb>
          <Button secondary onPress={handleAction}>
            Secondary
          </Button>
        </View>
        <View mb>
          <Button primary bordered>
            Bordered
          </Button>
        </View>
        <View mb>
          <Button link>Normal Link Text</Button>
        </View>
      </Content>
    </Container>
  );
};

export default withNavigation(ButtonScreen);
