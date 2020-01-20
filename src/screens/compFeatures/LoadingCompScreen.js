import React from 'react';
import {withNavigation} from 'react-navigation';
import {COLORS} from './../../theme';
import {
  Container,
  Content,
  LoadingActivity,
  Header,
  H3,
  View,
} from './../../components';

const LoadingCompScreen = props => {
  return (
    <Container>
      <Content padder>
        <Header backButton={true}>Loading Component</Header>
        <View mb>
          <H3>Default</H3>
          <LoadingActivity />
          <H3>Normal</H3>
          <LoadingActivity color={COLORS.primary} />
          <LoadingActivity color={COLORS.secondary} />
          <LoadingActivity color={COLORS.success} />
          <LoadingActivity color={COLORS.warning} />
          <LoadingActivity color={COLORS.danger} />
          <LoadingActivity color={COLORS.gray} />
          <LoadingActivity color={COLORS.dark} />
          <LoadingActivity color={COLORS.light} />
          <LoadingActivity color={COLORS.white} />
          <LoadingActivity color={COLORS.black} />
          <H3>Small</H3>
          <LoadingActivity color={COLORS.primary} size={'small'} />
          <LoadingActivity color={COLORS.secondary} size={'small'} />
          <LoadingActivity color={COLORS.success} size={'small'} />
          <H3>Background</H3>
          <LoadingActivity color={COLORS.warning} size={'large'} bg={true} />
          <LoadingActivity color={COLORS.danger} size={'small'} bg={true} />
        </View>
      </Content>
    </Container>
  );
};

export default withNavigation(LoadingCompScreen);
