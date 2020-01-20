import React, {useState, useEffect, useRef} from 'react';
import {Animated, TextInput, StyleSheet} from 'react-native';
import {GLOBALSTYLES, COLORS} from '../../theme';
import {View} from './../index';

const InputFloatingLabel = props => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = new Animated.Value(0);
  const animatedIsFocusedRef = useRef(animatedIsFocused);

  const labelStyle = {
    position: 'absolute',
    left: 0,
    top: animatedIsFocusedRef.current.interpolate({
      inputRange: [0, 1],
      outputRange: [29, 0],
    }),
    fontSize: animatedIsFocusedRef.current.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: animatedIsFocusedRef.current.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.gray, COLORS.primary],
    }),
  };
  useEffect(() => {
    Animated.timing(animatedIsFocusedRef.current, {
      toValue: isFocused || props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }, [isFocused]);

  const handleFocus = status => {
    setIsFocused(status);
  };

  return (
    <View style={{paddingTop: 18, marginBottom: 10}}>
      <Animated.Text style={labelStyle}>{props.label}</Animated.Text>
      <TextInput
        {...props}
        style={{
          ...styles.inputMaterial,
          borderBottomColor: isFocused ? COLORS.primary : COLORS.gray,
        }}
        value={props.value}
        onChangeText={text => {
          props.onChangeText(text);
        }}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputMaterial: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 1,
    color: '#000',
    ...GLOBALSTYLES.fontNormal,
  },
});

InputFloatingLabel.defaultProps = {
  style: {},
  children: null,
  borderColor: COLORS.primary,
  label: '',
  value: '',
  onChangeText: () => console.log('use onChangeText to get the value'),
};

export default InputFloatingLabel;
