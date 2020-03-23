import React from 'react';
import CustomButton from 'Src/Components/Button/Button.js';
import styles from 'Src/Containers/Login/LoginStyle';
import CustomTextInput from 'Src/Components/TextBox/TextBox';
import Logo from 'Src/Components/Image/Image';
import defaultString from 'Src/Constants/DefaultString';
import NavKey from 'Src/Constants/NavigationKey';
import {regexEmail} from 'Src/Utils/InputValidation';
import userAction from 'Src/Stores/Action';
import {connect} from 'react-redux';
import Container from 'Src/Theme/ApplicatioStyle';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import Colors from 'Src/Theme/Colors.js';
import NetInfo from '@react-native-community/netinfo';

/**
 * user can login and navigate to the home screen based on their valid email and password
 */
export class Login extends React.Component {
  state = {
    email: '',
    password: '',
    inputBorder: 0,
    inputBorderForPassword: 0,
    visibleLoader: false,
  };

  render() {
    return (
      <ScrollView style={Container.container}>
        <Logo />

        <CustomTextInput
          placeholder={defaultString.EMAIL}
          customTextBoxstyle={{borderWidth: this.state.inputBorder}}
          onChangeText={this.handleEmail}
          keyboardType="email-address"
          secureText={false}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.visibleLoader}>
          <ActivityIndicator
            style={styles.loaderStyle}
            size={100}
            animating={this.state.visibleLoader}
          />
        </Modal>

        <CustomTextInput
          customTextBoxstyle={{borderWidth: this.state.inputBorderForPassword}}
          placeholder={defaultString.PASSWORD}
          secureTextEntry={true}
          onChangeText={this.handlePassword}
        />
        <Text style={styles.textAlignForgotEmail}>
          <Text style={styles.textColor}>{defaultString.EMAIL} </Text>
          <Text>{defaultString.OR} </Text>
          <Text style={styles.textColor}>{defaultString.PASSWORD}</Text>
          <Text>{defaultString.QUSTION_MARK}</Text>
        </Text>
        <Text style={styles.border} />
        <CustomTextInput
          placeholder={defaultString.TWO_FA}
          customTextBoxstyle={styles.textBoxCustom}
        />
        <Text style={styles.alignText}>
          <Text>
            {defaultString.WHAT_IS}
            <Text style={styles.textColor}>{defaultString.TWO_FACTOR}</Text>
            <Text>{defaultString.QUSTION_MARK}</Text>
          </Text>
        </Text>
        <Text style={styles.border} />

        <CustomButton
          onPress={() =>
            this.login(
              this.state.email,
              this.state.password,
              this.setState({visibleLoader: true}),
            )
          }
          name={defaultString.LOG_IN}
          backgroundColor={Colors.blue}
        />

        <View style={styles.policyBlock}>
          <View style={styles.textAlignDontHaveAcc}>
            <Text style={styles.alignText}>{defaultString.DON}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.replace(NavKey.SIGN_UP);
              }}>
              <Text style={styles.textColor}>{defaultString.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  /**
   * @param {String} emailInput validate email
   */
  handleEmail = emailInput => {
    if (!regexEmail(emailInput)) {
      this.setState({email: emailInput, inputBorder: 1});
    } else {
      this.setState({email: emailInput, inputBorder: 0});
    }
  };

  /**
   * @param {String} passwordInput updates state object when user enters
   */
  handlePassword = passwordInput => {
    this.setState({inputBorderForPassword: 1});
    this.setState({password: passwordInput});
    if (passwordInput.length >= 8) {
      this.setState({inputBorderForPassword: 0});
    }
  };

  /**
   * @param {String} email
   * @param {String} password to generate Token and navigate screen
   */
  login(email, password) {
    if (email === '' && password === '') {
      this.setState({
        inputBorder: 1,
        inputBorderForPassword: 1,
      });
      this.setState({visibleLoader: false});
    } else if (email === '') {
      this.setState({visibleLoader: false});
      this.setState({
        inputBorder: 1,
      });
    } else if (password === '') {
      this.setState({visibleLoader: false});
      this.setState({
        inputBorderForPassword: 1,
      });
    } else if (
      this.state.inputBorder === 1 ||
      this.state.inputBorderForPassword === 1
    ) {
      this.setState({visibleLoader: false});
    } else {
      let loginData = {
        username: email,
        password: password,
      };

      NetInfo.fetch().then(state => {
        console.log('Is connected?', state.isConnected);
        if (state.isConnected) {
          this.props.fetchUser(loginData, callBack => {
            console.log('callBack', callBack.token);
            if (callBack.token != null) {
              this.props.action(true);
              this.setState({visibleLoader: false});
              this.props.navigation.replace(NavKey.HOME);
            } else if (callBack.code === 401) {
              Alert.alert(callBack.message);
              this.setState({visibleLoader: false});
            } else {
              Alert.alert(JSON.stringify(callBack.message));
              this.setState({visibleLoader: false});
            }
          });
        } else {
          Alert.alert(defaultString.CHECK_CONNECTION);
          this.setState({visibleLoader: false});
        }
      });
    }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (loginData, callBack) =>
    dispatch(userAction.fetchUser(loginData, callBack)),
  action: isValid => dispatch(userAction.setUserLogged(isValid)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
