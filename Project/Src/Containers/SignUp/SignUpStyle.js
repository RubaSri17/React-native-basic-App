import {StyleSheet} from 'react-native';
import Colors from 'Src/Theme/Colors.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  alignText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 12,
    color: Colors.fcolor,
  },
  textColor: {
    color: Colors.blue,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 12,
  },
  grid: {
    height: hp('10%'),
    width: wp('95%'),
    marginTop: hp('2%'),
  },
  dropDown: {
    borderRadius: 5,
    height: 40,
    width: 270,
    paddingLeft: 10,
    backgroundColor: Colors.textBoxColor,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    fontSize: 12,
  },
  policyBlock: {
    flexDirection: 'row',
    height: hp('10%'),
    width: wp('70%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  redbox: {
    width: wp('65%'),
    height: hp('40%'),
  },
  redbox1: {
    width: wp('2%'),
    height: hp('5%'),
  },
  textAlignYourPass: {
    marginLeft: 63,
    color: Colors.blue,
    fontSize: 10,
  },
  textAlignechar: {
    fontSize: 10,
    color: Colors.fcolor,
  },
  dropDownStyleText: {
    fontSize: 14,
    color: Colors.fcolor,
    paddingTop: hp('1.5%'),
    alignItems: 'center',
  },
  dropDownStyle: {
    height: hp('20%'),
    width: wp('75%'),
    fontSize: 12,
  },
  iconStyle: {
    marginLeft: wp('13%'),
  },
  services: {
    color: Colors.blue,
    marginLeft: wp('7%'),
    fontSize: 12,
  },
  signInStyle: {
    paddingLeft: wp('25%'),
  },
});
