import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CustomButton from 'Src/Components/Button/Button.js';
import Styles from 'Src/Containers/TabScreens/Clients/ClientsStyle';
import {createTransition, SlideLeft} from 'react-native-transition';
import Colors from 'Src/Theme/Colors.js';
import defaultString from 'Src/Constants/DefaultString.js';
import Logo from 'Src/Components/Image/Image';

const TransitionLeft = createTransition(SlideLeft);

export default class YourView extends Component {
  switchToLeft = () => {
    TransitionLeft.show(
      <View style={Styles.textStyle}>
        <Logo />
        <Text>This is Left view</Text>
      </View>,
    );
  };

  render() {
    return (
      <TransitionLeft>
        <View style={Styles.textStyle}>
          <Text>This the initial View</Text>
          <CustomButton
            onPress={() => this.switchToLeft()}
            name={defaultString.SWITCH_TO_LEFT}
            backgroundColor={Colors.blue}
          />
        </View>
      </TransitionLeft>
    );
  }
}
