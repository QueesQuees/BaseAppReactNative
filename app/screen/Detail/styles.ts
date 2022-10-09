import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 30,
    textAlign: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  btnGoback: {
    backgroundColor: '#ccc',
    width: 80,
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  titleScreen: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  fullName: {
    paddingLeft: 10,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressContent: {
    paddingTop: 10,
  },
});

export default styles;
