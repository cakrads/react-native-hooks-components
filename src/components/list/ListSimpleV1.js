import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {View, Text} from './../index';
import {GLOBALSTYLES, COLORS} from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListsSimpleV1 = props => {
  const ItemList = ({data}) => {
    let screenName = data.screenName ? data.screenName : props.goToscreen;
    let param = data.param ? data.param : data.id;
    return (
      <TouchableOpacity onPress={() => props.clickAction(screenName, param)}>
        <View style={styles.list}>
          {data.iconName && data.iconName != '' ? (
            <Text style={styles.icon}>
              <Icon name={data.iconName} size={styles.icon.fontSize} />
            </Text>
          ) : null}
          <Text style={styles.listTitle}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      {...props}
      data={props.data}
      renderItem={({item}) => <ItemList data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    paddingHorizontal: GLOBALSTYLES.container.paddingHorizontal,
    paddingVertical: 10,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
  },
  icon: {
    ...GLOBALSTYLES.H2,
    padding: 10,
    paddingTop: 15,
    paddingRight: 20,
  },
  listTitle: {
    ...GLOBALSTYLES.H2,
  },
});

ListsSimpleV1.propsDefault = {
  goToscreen: null,
};

ListsSimpleV1.propTypes = {
  data: PropTypes.array,
  goToscreen: PropTypes.string,
};

export default ListsSimpleV1;
