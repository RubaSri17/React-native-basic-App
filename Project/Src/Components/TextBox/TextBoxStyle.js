import {StyleSheet} from 'react-native';
import Color from 'Src/Theme/Colors.js';

export default StyleSheet.create({
  CustomTextInput: {
    height: 40,
    width: 260,
    backgroundColor: Color.textBoxColor,
    fontSize: 15,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 10,
    borderColor: Color.red,
    borderWidth: 1,
  },
});
