import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 40,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 30,
  },
  input: {
    fontSize: 16,
    marginBottom: 16,
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: 'blue',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
