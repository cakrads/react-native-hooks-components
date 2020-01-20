import React from 'react';
import {withNavigation} from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container, Content, View, Header, H2, Text} from './../../components';

const IconsScreen = props => {
  return (
    <Container>
      <Content padder>
        <Header backButton>Icon</Header>
        <H2>Font Awesome</H2>
        <View mb>
          <Text>
            <FontAwesome name="tag" size={23} />
            {'    '}
            <FontAwesome name="tasks" size={23} />
            {'    '}
            <FontAwesome name="bars" size={23} />
            {'    '}
            <FontAwesome name="image" size={23} />
            {'    '}
            <FontAwesome name="book" size={23} />
            {'    '}
            <FontAwesome name="file-o" size={23} />
            {'    '}
            <FontAwesome name="image" size={23} />
            {'    '}
            <FontAwesome name="th-list" size={23} />
            {'    '}
            <FontAwesome name="rotate-right" size={23} />
            {'    '}
            <FontAwesome name="star" size={23} />
            {'    '}
          </Text>
        </View>
        <H2>Ionicons</H2>
        <View mb>
          <Text>
            <Ionicons name="ios-add" size={23} />
            {'    '}
            <Ionicons name="ios-add-circle" size={23} />
            {'    '}
            <Ionicons name="ios-add-circle-outline" size={23} />
            {'    '}
            <Ionicons name="ios-airplane" size={23} />
            {'    '}
            <Ionicons name="ios-alarm" size={23} />
            {'    '}
            <Ionicons name="ios-download" size={23} />
            {'    '}
            <Ionicons name="md-bookmarks" size={23} />
            {'    '}
            <Ionicons name="logo-android" size={23} />
            {'    '}
            <Ionicons name="logo-angular" size={23} />
            {'    '}
            <Ionicons name="logo-apple" size={23} />
            {'    '}
            <Ionicons name="logo-bitbucket" size={23} />
            {'    '}
            <Ionicons name="logo-bitcoin" size={23} />
            {'    '}
          </Text>
        </View>
        <H2>Material</H2>
        <View mb>
          <Text>
            <MaterialIcons name="3d-rotation" size={23} />
            {'    '}
            <MaterialIcons name="ac-unit" size={23} />
            {'    '}
            <MaterialIcons name="access-alarm" size={23} />
            {'    '}
            <MaterialIcons name="access-alarms" size={23} />
            {'    '}
            <MaterialIcons name="access-time" size={23} />
            {'    '}
            <MaterialIcons name="accessibility" size={23} />
            {'    '}
            <MaterialIcons name="accessible" size={23} />
            {'    '}
            <MaterialIcons name="account-balance" size={23} />
            {'    '}
            <MaterialIcons name="account-balance-wallet" size={23} />
            {'    '}
            <MaterialIcons name="account-box" size={23} />
            {'    '}
          </Text>
        </View>
      </Content>
    </Container>
  );
};

Text.defaultProps = {
  style: {fontFamily: 'OpenSans'},
};

export default withNavigation(IconsScreen);
