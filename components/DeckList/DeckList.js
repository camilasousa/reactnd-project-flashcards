import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { deckItemStyles, deckListStyles } from './styles';

const DeckItem = ({ deck }) => (
  <View style={deckItemStyles.container}>
    <Text style={deckItemStyles.title}>{deck.title}</Text>
    <Text style={deckItemStyles.number}>
      {deck.questions ? deck.questions.length : 0} decks
    </Text>
  </View>
);

DeckItem.propTypes = {
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

const DeckList = ({ decks }) => (
  <View style={deckListStyles.container}>
    {
      decks.map(deck => <DeckItem key={deck.title} deck={deck} />)
    }
  </View>
);

const mapStateToProps = state => ({
  decks: Object.values(state.decksById),
});

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({})),
  })).isRequired,
};

export default connect(mapStateToProps)(DeckList);
