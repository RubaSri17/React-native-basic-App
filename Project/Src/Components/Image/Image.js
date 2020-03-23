import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';
import ImageStyle from 'Src/Components/Image/ImageStyle';

export default class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('Src/Assets/Images/Logo.png')}
        style={[ImageStyle.imageStyle, this.props.customImageStyle]}
      />
    );
  }
}

Logo.propTypes = {
  customImageStyle: PropTypes.object,
};
