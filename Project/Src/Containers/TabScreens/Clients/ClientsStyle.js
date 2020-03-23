import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  textStyle: {
    flex: 1,
    alignItems: 'center',
    marginTop: hp('40%'),
  },
});
