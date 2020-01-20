import React, {useState, useEffect, useRef} from 'react';
import {Animated, TextInput, StyleSheet} from 'react-native';
import {GLOBALSTYLES, COLORS} from './../../theme';
import {Text, View} from './../index';

const InputNormal = props => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = new Animated.Value(0);
  const animatedIsFocusedRef = useRef(animatedIsFocused);

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
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 10,
        borderBottomColor: isFocused ? COLORS.primary : COLORS.gray,
      }}>
      <TextInput
        {...props}
        style={{
          ...styles.inputMaterial,
          flex: 1,
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
    paddingVertical: 10,
    paddingHorizontal: 1,
    color: '#000',
    ...GLOBALSTYLES.fontNormal,
  },
});

InputNormal.defaultProps = {
  style: {},
  children: null,
  borderColor: COLORS.primary,
  label: '',
  value: '',
  onChangeText: () => console.log('use onChangeText to get the value'),
};

export default InputNormal;
