import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useGetMoviesQuery} from '../../services/random.service';
import OneCard from '../../component/OneCard/oneCard';
import styles from './styles';

const Home: React.FC = ({navigation}) => {
  const {data, refetch} = useGetMoviesQuery({});

  const [refetchActionm, setRefetchAction] = useState(false);

  const handleRefetch = useCallback(() => setRefetchAction(true), []);

  useEffect(() => {
    if (refetchActionm) {
      refetch();
      setRefetchAction(false);
    }
  }, [refetch, refetchActionm]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btnRandom}
          onPress={() => handleRefetch()}>
          <Text style={styles.btnRandomText}>Fetch Random</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={item => {
            return <OneCard item={item} navigation={navigation} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
