import React from 'react';
import {SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PropTypes from 'prop-types';
import {GLOBALSTYLES} from './../../theme';

const Content = props => {
  return (
    <SafeAreaView {...props} style={{flex: props.fullScreen ? 1 : 0}}>
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={props.disableKBDismissScroll ? null : {x: 0, y: 0}}
        keyboardShouldPersistTaps={props.keyboardShouldPersistTaps || 'handled'}
        {...props}
        contentContainerStyle={{
          paddingHorizontal: props.padder
            ? GLOBALSTYLES.container.paddingHorizontal
            : undefined,
          flex: props.fullScreen ? 1 : 0,
        }}>
        {props.children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

Content.propTypes = {
  disableKBDismissScroll: PropTypes.bool,
  keyboardShouldPersistTaps: PropTypes.string,
  padder: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default Content;
