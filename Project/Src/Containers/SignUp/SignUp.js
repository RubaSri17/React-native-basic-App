import React from 'react';
import {Text, TouchableOpacity, ScrollView, View, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Col, Row, Grid} from 'react-native-easy-grid';
import ModalDropdown from 'react-native-modal-dropdown';
import CircleCheckBox from 'react-native-circle-checkbox';
import CustomButton from 'Src/Components/Button/Button.js';
import styles from 'Src/Containers/SignUp/SignUpStyle';
import Colors from 'Src/Theme/Colors';
import CustomTextInput from 'Src/Components/TextBox/TextBox';
import defaultString from 'Src/Constants/DefaultString';
import Logo from 'Src/Components/Image/Image';
import NavKey from 'Src/Constants/NavigationKey';
import Icons from 'Src/Constants/Icon';
import Container from 'Src/Theme/ApplicatioStyle';
import {
  regexEmail,
  regPass,
  regLower,
  regUpper,
  regDigit,
  regSplChar,
} from 'Src/Utils/InputValidation';

/**
 * signup activity will done  by user with valid email and password
 */
export default class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    lengthColor: Colors.red,
    lowerCaseColor: Colors.red,
    upperCaseColor: Colors.red,
    digitColor: Colors.red,
    specialCharColor: Colors.red,
    passwordLength: Icons.CLOSE,
    lowercase: Icons.CLOSE,
    uppercase: Icons.CLOSE,
    digit: Icons.CLOSE,
    specialChar: Icons.CLOSE,
    passwordBorder: 0,
    confirmPasswordBorder: 0,
    emailBorder: 0,
    isEmail: false,
    isPassword: false,
    isConfirmPassword: false,
    isRadio: false,
    checked: false,
    inputBorder: 0,
  };

  render() {
    return (
      <ScrollView style={Container.container}>
        <Logo />
        <CustomTextInput
          placeholder={defaultString.EMAIL}
          onChangeText={this.handleEmail}
          keyboardType="email-address"
          customTextBoxstyle={{borderWidth: this.state.emailBorder}}
        />
        <CustomTextInput
          customTextBoxstyle={{borderWidth: this.state.passwordBorder}}
          placeholder={defaultString.PASSWORD}
          onChangeText={this.handleChange}
          secureTextEntry={true}
        />
        <CustomTextInput
          placeholder={defaultString.CONFIRM_PASSWORD}
          customTextBoxstyle={{borderWidth: this.state.confirmPasswordBorder}}
          onChangeText={this.handleConfirmPassword}
          secureTextEntry={true}
        />

        <Text style={styles.textAlignYourPass}>{defaultString.CONTAIN}</Text>

        <Grid style={styles.grid}>
          <Col size={0.5}>
            <Row size={0.6}>
              <Icon
                name={this.state.passwordLength}
                size={15}
                color={this.state.lengthColor}
                style={styles.iconStyle}
              />
              <Text style={styles.textAlignechar}>{defaultString.CHAR}</Text>
            </Row>
            <Row>
              <Icon
                name={this.state.uppercase}
                size={15}
                color={this.state.upperCaseColor}
                style={styles.iconStyle}
              />
              <Text style={styles.textAlignechar}>{defaultString.UPPER}</Text>
            </Row>
          </Col>
          <Col size={0.4}>
            <Row size={0.5}>
              <Icon
                name={this.state.lowercase}
                size={15}
                color={this.state.lowerCaseColor}
                style={styles.iconStyle}
              />
              <Text style={styles.textAlignechar}>{defaultString.LOWER}</Text>
            </Row>
            <Row>
              <Icon
                name={this.state.digit}
                size={15}
                color={this.state.digitColor}
                style={styles.iconStyle}
              />
              <Text style={styles.textAlignechar}>{defaultString.DIGIT}</Text>
            </Row>
          </Col>
          <Col>
            <Row size={0.2} />
            <Row>
              <Icon
                name={this.state.specialChar}
                size={15}
                color={this.state.specialCharColor}
                style={styles.iconStyle}
              />
              <Text style={styles.textAlignechar}>
                {defaultString.SPECIAL_CHAR}
              </Text>
            </Row>
          </Col>
        </Grid>

        <ModalDropdown
          style={styles.dropDown}
          dropdownStyle={styles.dropDownStyle}
          textStyle={styles.dropDownStyleText}
          options={[
            defaultString.AFGHANISTAN,
            defaultString.INDIA,
            defaultString.US,
          ]}
          defaultValue={defaultString.AFGHANISTAN}
        />

        <View style={styles.policyBlock}>
          <View style={styles.redbox1}>
            <CircleCheckBox
              checked={this.state.checked}
              onToggle={this.RadioToggle}
              outerColor={Colors.blue}
              innerColor={Colors.blue}
              outerSize={20}
              innerSize={12}
              filterSize={16}
            />
          </View>
          <View style={styles.redbox}>
            <Text style={styles.alignText}>
              {defaultString.AGREE}
              <Text style={styles.textColor}> {defaultString.TERMS}</Text>
            </Text>
            <Text style={styles.services}>
              {defaultString.SERVICES}
              <Text style={styles.alignText}> {defaultString.AND}</Text>{' '}
              {defaultString.PRIVACY}
            </Text>
          </View>
        </View>
        <CustomButton
          onPress={() => this.signUp()}
          name={defaultString.SIGN_UP}
          backgroundColor={Colors.blue}
        />

        <Text style={styles.alignText}>
          {defaultString.ALREADY_HAVE_ACCOUNT}
        </Text>
        <View style={styles.policyBlock}>
          <View style={styles.signInStyle}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.replace(NavKey.LOG_IN);
              }}>
              <Text style={styles.textColor}>{defaultString.SIGN_IN}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.alignText}> {defaultString.INSTEAD}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

  /**
   * @param {String} email validate email
   */
  handleEmail = emailInput => {
    if (!regexEmail(emailInput)) {
      this.setState({email: emailInput, emailBorder: 1});
    } else {
      this.setState({email: emailInput, emailBorder: 0, isEmail: true});
    }
  };

  /**
   * @param {String} pswd set border color based on handlepassword function
   */
  changeColor = pswd => {
    this.setState({passwordBorde: 1});
    if (regPass(pswd)) {
      this.setState({passwordBorder: 0, isPassword: true});
    } else {
      this.setState({passwordBorder: 1, isPassword: false});
    }
  };

  /**
   * @param {String} pswd to handle password validation functions
   */
  handleChange = pswd => {
    this.handlePassword(pswd);
    this.changeColor(pswd);
  };

  /**
   * @param {String} pswd validate password
   */
  handlePassword = pswd => {
    this.setState({password: pswd});
    if (pswd.length >= 8) {
      this.setState({passwordLength: Icons.CHECK, lengthColor: Colors.black});
    } else {
      this.setState({passwordLength: Icons.CLOSE, lengthColor: Colors.red});
    }

    if (regLower(pswd)) {
      this.setState({lowercase: Icons.CHECK, lowerCaseColor: Colors.black});
    } else {
      this.setState({lowercase: Icons.CLOSE, lowerCaseColor: Colors.red});
    }

    if (regUpper(pswd)) {
      this.setState({uppercase: Icons.CHECK, upperCaseColor: Colors.black});
    } else {
      this.setState({uppercase: Icons.CLOSE, upperCaseColor: Colors.red});
    }

    if (regDigit(pswd)) {
      this.setState({digit: Icons.CHECK, digitColor: Colors.black});
    } else {
      this.setState({digit: Icons.CLOSE, digitColor: Colors.red});
    }

    if (regSplChar(pswd)) {
      this.setState({specialChar: Icons.CHECK, specialCharColor: Colors.black});
    } else {
      this.setState({specialChar: Icons.CLOSE, specialCharColor: Colors.red});
    }
    if (this.state.confirmPassword === pswd) {
      this.setState({confirmPasswordBorder: 0, isConfirmPassword: true});
    } else {
      this.setState({confirmPasswordBorder: 1, isConfirmPassword: false});
    }
  };

  /**
   * @param {String} confirmpswd validate confirm password
   */
  handleConfirmPassword = confirmpswd => {
    this.setState({confirmPassword: confirmpswd});
    if (this.state.password === confirmpswd) {
      this.setState({confirmPasswordBorder: 0, isConfirmPassword: true});
    } else {
      this.setState({confirmPasswordBorder: 1, isConfirmPassword: false});
    }
  };

  /**
   * signup based on state values
   */
  signUp = () => {
    if (
      this.state.isEmail &&
      this.state.isPassword &&
      this.state.isConfirmPassword &&
      this.state.isRadio
    ) {
      Alert.alert(defaultString.SIGN_UP_SUCESS);
    } else if (
      !this.state.isEmail &&
      !this.state.isPassword &&
      !this.state.isConfirmPassword
    ) {
      this.setState({
        emailBorder: 1,
        passwordBorder: 1,
        confirmPasswordBorder: 1,
      });
    } else if (!this.state.isEmail && !this.state.isPassword) {
      this.setState({emailBorder: 1, passwordBorde: 1});
    } else if (
      this.state.isPassword &&
      !this.state.isEmail &&
      !this.state.isConfirmPassword
    ) {
      this.setState({emailBorder: 1, confirmPasswordBorder: 1});
    } else if (
      this.state.isEmail &&
      this.state.isPassword &&
      !this.state.isConfirmPassword
    ) {
      this.setState({confirmPasswordBorder: 1});
    } else if (
      this.state.isEmail &&
      !this.state.isPassword &&
      !this.state.isConfirmPassword
    ) {
      this.setState({passwordBorde: 1, confirmPasswordBorder: 1});
    } else if (
      this.state.isPassword &&
      this.state.isConfirmPassword &&
      !this.state.isEmail
    ) {
      this.setState({emailBorder: 1});
    } else if (!this.state.isEmail) {
      this.setState({emailBorder: 1});
    } else if (!this.state.isPassword) {
      this.setState({passwordBorde: 1});
    } else if (!this.state.isRadio) {
      Alert.alert(defaultString.AGREE_ALERT);
    } else if (!this.state.isConfirmPassword) {
      this.setState({confirmPasswordBorder: 1});
    } else {
      Alert.alert(defaultString.CHECK_YOUR_DETAILS);
    }
  };

  /**
   * handle radio button
   */
  RadioToggle = () => {
    if (this.state.checked === false) {
      this.setState({checked: true, isRadio: true});
    } else {
      this.setState({checked: false});
    }
  };
}
