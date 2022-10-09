import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    width: '50%',
    padding: 10,
  },
  content: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
    color: '#000',
  },
  birth: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
  },
});

export default styles;
