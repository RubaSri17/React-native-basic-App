import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {View, Image, ScrollView, Alert, PermissionsAndroid} from 'react-native';
import styles from 'Src/Containers/TabScreens/Profile/ProfileStyle';
import {connect} from 'react-redux';
import NavKey from 'Src/Constants/NavigationKey';
import AwesomeButton from 'react-native-really-awesome-button';
import Color from 'Src/Theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import DefaultString from 'Src/Constants/DefaultString';
var RNFS = require('react-native-fs');

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileData: '',
    };
  }
  componentDidMount() {
    this.requestFileWrite();
  }
  componentWillMount() {
    RNFS.readFile(RNFS.ExternalDirectoryPath + '/Demo.png', 'base64').then(
      file => {
        console.log(file);
        this.setState({fileData: file});
      },
    );
  }

  chooseImage = () => {
    let options = {
      title: DefaultString.SELECT,
      quality: 0.2,
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log(DefaultString.CANCEL_IMAGE_PICKER);
      } else {
        this.setState({
          fileData: response.data,
        });
        var path = RNFS.ExternalDirectoryPath + '/Demo.png';

        RNFS.writeFile(path, response.data, 'base64')
          .then(success => {
            console.log(DefaultString.FILE_WRITTEN, success);
          })
          .then(
            RNFS.readDir(RNFS.ExternalDirectoryPath).then(result => {
              console.log(RNFS.ExternalDirectoryPath.name);
            }),
          )
          .then(
            RNFS.readFile(path, 'base64').then(file => {
              console.log(file);
            }),
          )
          .then(
            RNFS.read(path, 0, 0, 'base64').then(res => {
              console.log('..................', res.data);
            }),
          )
          .catch(err => {
            console.log(err.message);
          });
      }
    });
  };

  renderFileData() {
    if (this.state.fileData) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + this.state.fileData}}
          style={styles.images}
          resizeMode="stretch"
        />
      );
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.flexForImage}>
          {this.state.fileData === '' ? null : this.renderFileData()}

          <View style={styles.flexForIcon}>
            <Icon
              name="camera"
              color={Color.black}
              size={30}
              marginLeft={180}
              onPress={this.chooseImage}
            />
          </View>
        </View>
        <View>
          <View style={styles.ImageSections}>
            <View>{}</View>
          </View>

          <View style={styles.btnParentSection} />
        </View>
        <View style={styles.text}>
          <AwesomeButton
            style={styles.button}
            onPress={this.alertBox.bind(this)}
            height={40}
            width={150}
            borderRadius={20}
            raiseLevel={5}
            springRelease={true}
            backgroundColor={Color.blue}>
            Logout
          </AwesomeButton>
        </View>
      </ScrollView>
    );
  }

  /**
   * clear token and navigate to login page
   */
  check() {
    this.props.clear();
    this.props.navigation.navigate(NavKey.LOG_IN);
  }

  async requestFileWrite() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: DefaultString.TITLE,
          message: DefaultString.MESSAGE_FOE_EXTERNAL_STORAGE,
        },
      );
    } catch (err) {
      console.log(err);
    }
  }

  alertBox() {
    Alert.alert(
      DefaultString.ALERT,
      DefaultString.EXIT,
      [
        {
          text: DefaultString.CANCEL,
          onPress: () => console.log(DefaultString.CANCEL),
        },
        {text: DefaultString.OK, onPress: () => this.check()},
      ],
      {cancelable: false},
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch({type: DefaultString.LOG_OUT_PAGE}),
});

export default connect(
  null,
  mapDispatchToProps,
)(Profile);
