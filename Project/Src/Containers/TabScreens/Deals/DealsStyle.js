import {StyleSheet} from 'react-native';
import color from 'Src/Theme/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  contacts: {
    fontSize: 20,
  },
  headerStyle: {
    height: hp('8%'),
    flexDirection: 'row',
  },
  contactsTextStyle: {
    width: wp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searcgBarStyle: {
    width: wp('100%'),
    flexDirection: 'row',
  },
  searchIconStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  separater: {
    flex: 1,
    flexDirection: 'row',
  },
  profileColor: {
    backgroundColor: color.LogPageColor,
    opacity: 0.5,
  },
  title: {
    marginTop: hp('0.5%'),
    marginLeft: wp('15%'),
    fontSize: 28,
  },
  flex: {
    flex: 2,
    flexDirection: 'row',
    height: 70,
    width: 200,
  },
  searchBarContainerStyle: {
    width: wp('100%'),
  },
  profileIcon: {
    height: hp('9%'),
    width: wp('15%'),
    marginLeft: wp('10%'),
    marginTop: hp('3%'),
  },
  contactName: {
    fontSize: 15,
    marginTop: hp('3%'),
  },
  conatctNumber: {
    fontSize: 15,
  },
  contactsFlex: {
    height: hp('100%'),
    flexDirection: 'row',
  },
  contactsListStyle: {
    width: wp('96%'),
  },
  alphabetFlex: {
    width: wp('5%'),
    marginLeft: 7,
  },
  alphabetText: {
    marginTop: hp('2%'),
  },
});
