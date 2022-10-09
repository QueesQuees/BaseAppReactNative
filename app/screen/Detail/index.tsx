// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {goBack} from '../../navigation/rootNavigation';
import styles from './styles';
// import {RootStackParamList} from '../../navigation';
// import {DETAIL} from '../../navigation/screenName';

const Detail: React.FC = ({route, navigation}) => {
  console.log(route?.params?.item);
  let data = route?.params?.item;
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.btnGoback} onPress={() => goBack()}>
          <Text>Go back</Text>
        </TouchableOpacity>
        <Text style={styles.titleScreen}>Detail</Text>

        <Image
          style={styles.avatar}
          source={{
            uri: data?.item?.avatar,
          }}
          resizeMode={'cover'}
        />
        <Text style={styles.fullName}>
          Full Name: {data.item?.first_name + ' ' + data.item?.last_name}
        </Text>
        <Text>Gender: {data?.item?.gender}</Text>
        <Text>Phone Number: {data?.item?.phone_number}</Text>
        <Text>User Name: {data?.item?.username}</Text>
        <Text>Date of Birth: {data?.item?.date_of_birth}</Text>
        <Text>Email: {data?.item?.email}</Text>
        <Text>Credit card: {data?.item?.credit_card?.cc_number}</Text>
        <View style={styles.addressContent}>
          <Text>Address: </Text>
          <Text>-City: {data?.item?.address?.city}</Text>
          <Text>-Country: {data?.item?.address?.country}</Text>
          <Text>-Street address: {data?.item?.address?.street_address}</Text>
          <Text>-Zip code: {data?.item?.address?.zip_code}</Text>
        </View>
      </View>
    </>
  );
};

export default Detail;
