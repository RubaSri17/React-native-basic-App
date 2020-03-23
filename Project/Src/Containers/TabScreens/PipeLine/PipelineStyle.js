import {StyleSheet} from 'react-native';
import Colors from 'Src/Theme/Colors.js';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  image: {
    height: hp('40%'),
    width: wp('40%'),
    marginTop: hp('10%'),
    marginBottom: hp('10%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Container: {
    flex: 1,
  },
  box: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  flexContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  innerFlex: {
    flex: 2,
    backgroundColor: Colors.white,
  },
  priceStyle: {
    fontSize: 18,
    color: Colors.PriceColor,
    fontWeight: 'bold',
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: hp('2%'),
    marginLeft: 10,
    color: Colors.nameColor,
  },
  addressStyle: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    color: Colors.addressColor,
  },
  button: {
    backgroundColor: Colors.LogPageColor,
    width: 100,
    height: 30,
    paddingTop: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  firstSection: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  textStyle: {
    color: Colors.white,
    paddingLeft: 10,
  },
  separate: {
    height: 5,
    width: '100%',
  },
  ButtomStyles: {
    width: 100,
    height: 30,
    paddingTop: 4,
    marginTop: 15,
    borderRadius: 0,
    backgroundColor: Colors.LogPageColor,
    color: Colors.white,
  },
  imageStyle: {
    marginTop: 5,
    marginBottom: 9,
    height: 40,
    width: 40,
  },
  loaderStyle: {
    marginTop: 200,
  },
});
