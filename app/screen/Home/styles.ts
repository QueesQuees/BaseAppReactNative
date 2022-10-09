import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor: 'rgba(0, 255, 180, 0.5)',
  },
  btnRandom: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 100,
    marginBottom: 20,
  },
  btnRandomText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
