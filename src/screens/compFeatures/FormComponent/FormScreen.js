import React, {useState} from 'react';
import {withNavigation} from 'react-navigation';
import {
  Header,
  InputNormal,
  InputFloatingLabel,
  InputFixedLabel,
  TextareaFloatingLabel,
  Container,
  View,
  Text,
  Content,
} from '../../../components';

const FormScreen = props => {
  const [inputNormalValue, setInputNormalValue] = useState('');
  const [inputFixedValue, setInputFixedValue] = useState('');
  const [inputFloatingValue, setInputFloatingValue] = useState('');
  const [inputFloatingNumberValue, setInputFloatingNumberValue] = useState('');
  const [textareaFloatingValue, setTextareaFloatingValue] = useState('');

  return (
    <Container>
      <Content padder>
        <Header backButton={true}>Form Component</Header>
        <View mb>
          <InputNormal
            value={inputNormalValue}
            onChangeText={x => setInputNormalValue(x)}
          />
          <Text>Value: {inputNormalValue}</Text>
        </View>
        <View mb>
          <InputFixedLabel
            label="fixed label"
            value={inputFixedValue}
            onChangeText={x => setInputFixedValue(x)}
          />
          <Text>Value: {inputFixedValue}</Text>
        </View>
        <View mb>
          <InputFloatingLabel
            label="floating label"
            value={inputFloatingValue}
            onChangeText={x => setInputFloatingValue(x)}
          />
          <Text>Value: {inputFloatingValue}</Text>
        </View>
        <View mb>
          <InputFloatingLabel
            keyboardType={'numeric'}
            label="floating label number"
            value={inputFloatingNumberValue}
            onChangeText={x => setInputFloatingNumberValue(x)}
          />
          <Text>Value: {inputFloatingNumberValue}</Text>
        </View>
        <View mb>
          <TextareaFloatingLabel
            label="floating label textarea"
            value={textareaFloatingValue}
            onChangeText={x => setTextareaFloatingValue(x)}
          />
          <Text>Value: {textareaFloatingValue}</Text>
        </View>
      </Content>
    </Container>
  );
};

export default withNavigation(FormScreen);
