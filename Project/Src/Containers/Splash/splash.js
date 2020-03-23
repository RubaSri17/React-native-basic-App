import React from 'react';
import Logo from 'Src/Components/Image/Image';
import {View} from 'react-native';
import NavKey from 'Src/Constants/NavigationKey';
import Styles from 'Src/Containers/Splash/SplashStyle';
import {connect} from 'react-redux';

/**
 * navigate bettween two screen based on token
 */
export class Splash extends React.Component {
  constructor() {
    super();
  }
  /**
   * function call to iniate screen
   */
  componentDidMount() {
    this.getInitialScreen();
  }

  render() {
    return (
      <View>
        <Logo customImageStyle={Styles.image} />
      </View>
    );
  }

  /**
   * Navigate to next Screen Based On isvaliduser feild
   */
  async getInitialScreen() {
    console.log('isvaliduser', this.props.isValidUser);
    const isValidUser = this.props.isValidUser ? true : false;
    if (!isValidUser) {
      this.props.navigation.replace(NavKey.LOG_IN);
    } else {
      this.props.navigation.replace(NavKey.HOME);
    }
  }
}

const mapStateToProps = state => ({
  isValidUser: state.user.isValid,
});

export default connect(
  mapStateToProps,
  null,
)(Splash);
