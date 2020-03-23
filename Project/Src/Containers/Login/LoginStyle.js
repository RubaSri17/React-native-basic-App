import {StyleSheet} from 'react-native';
import Colors from 'Src/Theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  alignText: {
    marginBottom: hp('2%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
  },
  textColor: {
    color: Colors.blue,
  },
  border: {
    borderColor: Colors.lineColor,
    borderWidth: 0.5,
    height: 1,
    width: wp('100%'),
    marginBottom: hp('3%'),
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  policyBlock: {
    flexDirection: 'row',
    height: hp('10%'),
    width: wp('70%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textAlignForgotEmail: {
    marginLeft: wp('15%'),
    marginBottom: hp('3%'),
    fontSize: 14,
  },
  textAlignDontHaveAcc: {
    paddingLeft: wp('8%'),
  },
  textBoxCustom: {
    borderWidth: 0,
  },
  loaderStyle: {
    marginTop: hp('40%'),
  },
});
