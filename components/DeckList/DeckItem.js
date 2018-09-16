import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { deckItemStyles } from './styles';


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

export default DeckItem;
