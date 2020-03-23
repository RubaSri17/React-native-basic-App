import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Style from 'Src/Components/Button/ButtonStyle.js';

export default class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={[Style.buttonStyle, this.props.customButtomStyle]}
        onPress={() => this.props.onPress()}>
        <Text style={Style.color}> {this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  customButtomStyle: PropTypes.object,
  onPress: PropTypes.func,
};
