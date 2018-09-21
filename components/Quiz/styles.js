import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  questionsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  questionsLabel: {
    fontSize: 16,
    marginBottom: 30,
    marginTop: 15,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 16,
  },
  resultPercentage: {
    fontSize: 70,
  },
  baseButton: {
    marginTop: 10,
    width: 200,
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: 'blue',
  },
  incorrectButton: {
    marginTop: 10,
    paddingTop: 6,
    width: 200,
    paddingBottom: 6,
    backgroundColor: 'red',
  },
  correctButton: {
    paddingTop: 6,
    marginTop: 10,
    width: 200,
    paddingBottom: 6,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    shadowOpacity: 0.4,
    shadowColor: 'gray',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    minHeight: 200,
    width: 300,
    fontSize: 18,
    textAlign: 'center',
    elevation: 4,
    textAlignVertical: 'center',
  },
});

export default styles;
