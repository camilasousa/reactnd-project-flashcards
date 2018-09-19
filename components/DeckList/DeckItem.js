import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import { deckItemStyles } from './styles';


const DeckItem = ({ deck, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={deckItemStyles.container}>
      <Text style={deckItemStyles.title}>{deck.title}</Text>
      <Text style={deckItemStyles.number}>
        {deck.questions ? deck.questions.length : 0} questions
      </Text>
    </View>
  </TouchableOpacity>
);

DeckItem.propTypes = {
  onPress: PropTypes.func,
  deck: PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

DeckItem.defaultProps = {
  onPress: null,
};

export default DeckItem;
