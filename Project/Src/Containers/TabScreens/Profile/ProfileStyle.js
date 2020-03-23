import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  text: {
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  images: {
    flex: 1,
    width: hp('70%'),
    height: wp('73%'),
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSection: {
    width: 225,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flexForIcon: {
    position: 'absolute',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.05,
    width: wp('15%'),
    height: hp('10%'),
    borderRadius: wp('20%'),
    marginLeft: hp('25%'),
    marginTop: hp('39%'),
  },
});
