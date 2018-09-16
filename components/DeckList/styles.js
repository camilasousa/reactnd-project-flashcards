import { StyleSheet } from 'react-native';


export const deckItemStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  title: {
    fontSize: 24,
  },
  number: {
    fontSize: 16,
  },
});

export const deckListStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
