import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';
import TextInputStyle from 'Src/Components/TextBox/TextBoxStyle.js';

export default class CustomTextInput extends React.Component {
  render() {
    return (
      <TextInput
        style={[TextInputStyle.CustomTextInput, this.props.customTextBoxstyle]}
        secureTextEntry={this.props.secureTextEntry}
        placeholder={this.props.placeholder}
        placeholderTextColor={this.props.placeholderTextColor}
        keyboardType={this.props.keyboardType}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}

CustomTextInput.propTypes = {
  customTextBoxstyle: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
};
