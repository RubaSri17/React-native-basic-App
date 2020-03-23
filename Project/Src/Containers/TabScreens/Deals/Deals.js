import React, {Component} from 'react';
import {PermissionsAndroid, Text, Alert, View, SectionList} from 'react-native';
import Contacts from 'react-native-contacts';
import styles from 'Src/Containers/TabScreens/Deals/DealsStyle';
import defaultString from 'Src/Constants/DefaultString';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, SearchBar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import mainFlex from 'Src/Theme/ApplicatioStyle';
import DefaultString from '../../../Constants/DefaultString';

export default class Deal extends Component {
  state = {
    isSearch: false,
    search: '',
    count: 0,
    titlesArray: [],
    contacts: [],
  };

  componentDidMount() {
    this.requestContact();
  }

  Search = () => {
    this.setState({
      isSearch: true,
    });
  };

  updateSearch = search => {
    this.setState({search});
    this.requestContact();
  };

  render() {
    return (
      <View style={mainFlex.container}>
        {!this.state.isSearch ? (
          <View style={styles.headerStyle}>
            <View style={styles.contactsTextStyle}>
              <Text style={styles.contacts}>CONTACTS</Text>
            </View>
            <View style={styles.searchIconStyle}>
              <Icon name="search" size={25} onPress={this.Search} />
            </View>
          </View>
        ) : (
          <View style={styles.searcgBarStyle}>
            <SearchBar
              placeholder={DefaultString.TYPE_HERE}
              onChangeText={this.updateSearch}
              value={this.state.search}
              inputContainerStyle={styles.searchBarContainerStyle}
            />
          </View>
        )}

        <View style={styles.contactsFlex}>
          <View style={styles.contactsListStyle}>
            {this.state.contacts ? (
              <SectionList
                sections={this.state.contacts}
                ref={ref => {
                  if (ref) {
                    this.list = ref;
                  }
                }}
                renderSectionHeader={({section}) => (
                  <View style={styles.profileColor}>
                    <Text style={styles.title}>{section.title}</Text>
                  </View>
                )}
                renderItem={({item}) => (
                  <View style={styles.flex}>
                    <View style={styles.profileIcon}>
                      <Avatar
                        rounded
                        icon={{name: 'user', type: 'font-awesome'}}
                      />
                    </View>
                    <View>
                      <Text style={styles.contactName}>{item.displayName}</Text>
                      {item.phoneNumbers.map((number, index) => (
                        <Text key={index} style={styles.contactNumber}>
                          {number.number}
                        </Text>
                      ))}
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            ) : null}
          </View>
          <View style={styles.alphabetFlex}>
            {this.state.titlesArray.map((item, index) => (
              <TouchableOpacity onPress={this.getScrollSection}>
                <Text style={styles.alphabetText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    );
  }
  getScrollSection = index => {
    alert(index);
    // console.log('//////////////', index);
    if (this.list) {
      this.list.scrollToLocation({
        animated: true,
        itemIndex: -1,
        sectionIndex: 1,
        viewPosition: 0,
      });
    }
  };
  FlatListItemSeparator = () => {
    return <View style={styles.separate} />;
  };

  async getContact(count) {
    await this.setState({count: count});
  }
  async requestContact() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: defaultString.TITLE_CONTACT,
          message: defaultString.MESSAGE_FOR_CONTACTS,
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Contacts.getAll((err, contacts) => {
          if (err) {
            console.error(defaultString.NOT_GRANTED);
          } else {
            console.log(defaultString.CONTACTS, contacts);
            if (contacts && contacts.length > 0) {
              contacts.sort((a, b) => {
                var nameA = a.displayName.toLowerCase(),
                  nameB = b.displayName.toLowerCase();
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
            }
            let contactsArray = [];
            let group = {};
            let count = 0;

            for (let i = 0; i < contacts.length; i++) {
              if (this.state.isSearch) {
                if (
                  contacts[i].displayName
                    .toLowerCase()
                    .indexOf(this.state.search.toLowerCase()) !== -1
                ) {
                  let char = contacts[i].displayName.charAt(0);
                  if (!group[char]) {
                    group[char] = [];
                  }
                  group[char].push(contacts[i]);
                }
                count++;
              } else {
                let char = contacts[i].displayName.charAt(0);
                if (!group[char]) {
                  group[char] = [];
                }
                group[char].push(contacts[i]);
                count++;
              }
            }
            const titles = [];
            Object.keys(group).forEach((key, index) => {
              contactsArray.push({
                title: key,
                data: group[key],
                index: count,
              });
              titles.push(key);
            });
            this.setState({titlesArray: titles});
            this.setState({contacts: contactsArray});
          }
        });
      } else {
        Alert.alert(defaultString.NOT_GRANTED);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
