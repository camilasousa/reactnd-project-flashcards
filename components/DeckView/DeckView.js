import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const DeckView = ({ navigation }) => {
  const { deck } = navigation.state.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {deck.title}
      </Text>
      <Text style={styles.number}>
        {deck.questions ? deck.questions.length : 0} decks
      </Text>

      <TouchableOpacity style={styles.addCardButton}>
        <Text style={styles.addCardButtonText}>
          Add Card
        </Text>
      </TouchableOpacity>
    </View>
  );
};

DeckView.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        deck: PropTypes.shape({
          title: PropTypes.string.isRequired,
          questions: PropTypes.arrayOf(PropTypes.shape({})),
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DeckView;
