import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import {navigate} from '../../navigation/rootNavigation';
// import {DETAIL} from '../../navigation/screenName';
import styles from './styles';

interface Props {
  item: any;
  navigation: any;
}

const OneCard: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      key={props?.item?.index}
      style={styles.container}
      onPress={() => props?.navigation.navigate('Detail', {item: props?.item})}>
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{
            uri: props?.item?.item?.avatar,
          }}
          resizeMode={'cover'}
        />
        <View>
          <Text style={styles.fullName}>
            {props?.item?.item?.first_name + ' ' + props?.item?.item?.last_name}
          </Text>
          <Text style={styles.birth}>{props?.item?.item?.date_of_birth}</Text>
          <Text style={styles.birth}>{props?.item?.item?.gender}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OneCard;
