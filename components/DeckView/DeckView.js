import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

const DeckView = ({ navigation, deck }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {deck.title}
    </Text>
    <Text style={styles.number}>
      {deck.questions ? deck.questions.length : 0} decks
    </Text>

    <TouchableOpacity
      style={styles.addCardButton}
      onPress={() => navigation.navigate('AddQuestion', { deckKey: deck.title })}
    >
      <Text style={styles.buttonText}>
        Add Card
      </Text>
    </TouchableOpacity>

    {
      deck.questions && deck.questions.length > 0
        ? (
          <TouchableOpacity
            style={styles.startQuizButton}
            onPress={() => navigation.navigate('Quiz', { questions: deck.questions })}
          >
            <Text style={styles.buttonText}>
              Start Quiz
            </Text>
          </TouchableOpacity>
        )
        : null
    }
  </View>
);


const mapStateToProps = (state, ownProps) => {
  const { deck } = ownProps.navigation.state.params;
  return {
    deck: state.decksById[deck.title],
  };
};

DeckView.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        deck: PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default connect(mapStateToProps)(DeckView);
