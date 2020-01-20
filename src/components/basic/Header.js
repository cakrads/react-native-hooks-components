import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation';
import {GLOBALSTYLES, COLORS} from '../../theme';
import {Text} from '../index';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = props => {
  const BackButtonHeader = () => {
    const BackButton = () => {
      return (
        <Text>
          <Icon
            name={Platform.OS == 'ios' ? 'chevron-left' : 'long-arrow-left'}
            size={GLOBALSTYLES.H2.fontSize}
            color={COLORS.primary}
          />
          {'     '}
        </Text>
      );
    };
    return (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text numberOfLines={1} style={{...GLOBALSTYLES.H2}}>
          {props.backButton ? <BackButton /> : null}
          {props.children}
        </Text>
      </TouchableOpacity>
    );
  };

  const TextHeader = () => {
    return <Text style={{...GLOBALSTYLES.H2}}>{props.children}</Text>;
  };

  const LogoHeader = () => {
    return (
      <Image
        source={props.logo}
        style={{height: props.logoH, width: props.logoW}}
      />
    );
  };

  const SearchBtn = () => {
    return (
      <View>
        <TouchableOpacity
          style={{paddingHorizontal: 10, backgroundColor: COLORS.backgroundColor}}
          onPress={() => props.navigation.navigate(props.searchScreen)}>
          <Text style={GLOBALSTYLES.H2}>
            <Icon
              name={'search'}
              size={GLOBALSTYLES.H2.fontSize}
              color={COLORS.text}
            />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={{
        marginBottom: 15,
        marginTop: props.logo ? 15 : 5,
        marginHorizontal: props.padder ? 20 : 0,
        flexDirection: 'row',
        ...props.style,
      }}>
      <View style={{flex: 1}}>
        {props.logo ? (
          <LogoHeader />
        ) : props.backButton ? (
          <BackButtonHeader />
        ) : (
          <TextHeader />
        )}
      </View>
      {props.searchBtn ? <SearchBtn /> : null}
    </View>
  );
};

Header.defaultProps = {
  backButton: false,
  logo: false,
  logoH: 40,
  logoW: 150,
  searchBtn: false,
  searchScreen: '',
};

Header.propsType = {
  backButton: PropTypes.bool,
};

export default withNavigation(Header);
