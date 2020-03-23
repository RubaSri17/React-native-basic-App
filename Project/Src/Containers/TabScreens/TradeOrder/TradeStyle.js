import {StyleSheet} from 'react-native';
import Colors from 'Src/Theme/Colors.js';

export default StyleSheet.create({
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    color: Colors.nameColor,
  },
  price: {
    fontSize: 18,
    color: Colors.PriceColor,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
  },
  addressStyle: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
    color: Colors.addressColor,
  },
});
