import React from 'react';
import {Text, View} from 'react-native';
import CustomButton from 'Src/Components/Button/Button';
import styles from 'Src/Containers/TabScreens/TradeOrder/TradeStyle';
import Strings from 'Src/Constants/DefaultString';

/**
 * display slected investor details
 */
export default class TradeOrder extends React.Component {
  render() {
    const name = this.props.navigation.getParam('name');
    const price = this.props.navigation.getParam('price');
    const address = this.props.navigation.getParam('address');
    const {goBack} = this.props.navigation;
    return (
      <View>
        {price === undefined ? null : (
          <Text style={styles.price}>
            {Strings.PRICE}:{price}
          </Text>
        )}
        <Text style={styles.name}>
          {Strings.NAME}: {name}
        </Text>
        {address === undefined ? null : (
          <Text style={styles.addressStyle}>
            {Strings.ADDRESS}: {address}
          </Text>
        )}
        <CustomButton onPress={() => goBack()} name={Strings.GO_BACK} />
      </View>
    );
  }
}
