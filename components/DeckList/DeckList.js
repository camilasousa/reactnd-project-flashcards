import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const DeckList = ({ decks }) => (
  <View>
    {
      decks.map(deck => <Text key={deck.id}>{deck.id}</Text>)
    }
  </View>
);

const mapStateToProps = state => ({
  decks: Object.values(state.decksById),
});

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(DeckList);
