import React from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from 'react-native';
import styles from 'Src/Containers/TabScreens/PipeLine/PipelineStyle';
import CustomButton from 'Src/Components/Button/Button';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from 'Src/Theme/Colors';
import String from 'Src/Constants/DefaultString';
import Logo from 'Src/Components/Image/Image';
import NavKey from 'Src/Constants/NavigationKey';
import IconKey from 'Src/Constants/Icon';
import {connect} from 'react-redux';
import userloginAction from 'Src/Stores/Action';

/**
 * display list of investors
 */
export class Pipeline extends React.Component {
  constructor() {
    super();
    this.state = {
      apiList: [],
      page: 1,
      totalPages: 0,
      isActive: false,
      innitialLoader: true,
    };
  }
  componentDidMount() {
    this.getToken();
  }

  render() {
    return (
      <View style={styles.Container}>
        <Logo customImageStyle={styles.imageStyle} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.innitialLoader}>
          <ActivityIndicator
            style={styles.loaderStyle}
            size={100}
            animating={this.state.innitialLoader}
          />
        </Modal>
        <FlatList
          data={this.state.apiList}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          onEndReached={() => this.onEndReached()}
          onEndReachedThreshold={0.1}
          renderItem={({item}) =>
            item.myShareDetails === undefined ? (
              <View style={styles.box}>
                <View style={styles.flexContainer}>
                  <View style={styles.innerFlex}>
                    <Text style={styles.addressStyle}>
                      {' '}
                      {item.hasOwnProperty('myShareDetails')
                        ? item.name
                        : item.investorName}
                    </Text>
                  </View>
                  <View style={styles.firstSection}>
                    <CustomButton
                      customButtomStyle={styles.ButtomStyles}
                      name={String.TRADE_ORDER}
                      onPress={() => {
                        this.props.navigation.navigate(NavKey.TRADE_ORDER, {
                          name: item.investorName,
                        });
                      }}
                    />
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textStyle}>
                        <MaterialIcon
                          name={IconKey.BELL_RING}
                          color={Colors.white}
                          size={15}
                        />
                        {String.REMIND}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.box}>
                <View style={styles.flexContainer}>
                  <View style={styles.innerFlex}>
                    <Text style={styles.priceStyle}>
                      {item.hasOwnProperty('myShareDetails')
                        ? '$' + item.myShareDetails.totalAmountWithTax
                        : 'Invester Name'}
                    </Text>
                    <Text style={styles.nameStyle}>
                      {item.hasOwnProperty('myShareDetails')
                        ? item.myShareDetails.investorName
                        : null}
                    </Text>
                    <Text style={styles.addressStyle}>
                      {' '}
                      {item.hasOwnProperty('myShareDetails')
                        ? item.name
                        : item.investorName}
                    </Text>
                  </View>
                  <View style={styles.firstSection}>
                    <CustomButton
                      customButtomStyle={styles.ButtomStyles}
                      name={String.TRADE_ORDER}
                      onPress={() => {
                        this.props.navigation.navigate(NavKey.TRADE_ORDER, {
                          name: item.myShareDetails.investorName,
                          price: item.myShareDetails.totalAmountWithTax,
                          address: item.name,
                        });
                      }}
                    />
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textStyle}>
                        <MaterialIcon
                          name={IconKey.BELL_RING}
                          color={Colors.white}
                          size={15}
                        />
                        {String.REMIND}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }
        />
        <View>
          <ActivityIndicator animating={this.state.isActive} />
        </View>
      </View>
    );
  }
  /**
   * to seprate list
   */
  FlatListItemSeparator = () => {
    return <View style={styles.separate} />;
  };

  /**
   * initiate api call and get api response
   */
  async getToken() {
    this.props.fetchList(this.props.token, this.state.page, listCallBack => {
      this.setState({
        totalPages: listCallBack.totalPages,
        isActive: false,
        innitialLoader: false,
      });
      this.setState({
        apiList: [...this.state.apiList, ...listCallBack.filteredShares],
      });
    });
  }
  /**
   * onEndReached function to increace page number
   */
  onEndReached = () => {
    this.setState({page: this.state.page + 1, isActive: true});
    if (this.state.totalPages > this.state.page) {
      this.getToken();
    } else {
      console.log('end', this.state.page);
      this.setState({isActive: false});
    }
  };
}

const mapDispatchToProps = dispatch => ({
  fetchList: (token, page, listCallBack) =>
    dispatch(userloginAction.fetchList(token, page, listCallBack)),
});
const mapStateToProps = state => ({
  token: state.user.token,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pipeline);
