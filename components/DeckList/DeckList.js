import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import DeckItem from './DeckItem';
import { deckListStyles } from './styles';

import { listDecks } from '../../actions/decks';

class DeckList extends React.Component {
  componentDidMount() {
    this.props.loadDecks();
  }

  handleOnDeckItemPress = (deck) => {
    this.props.navigation.navigate('DeckView', { deck });
  }

  render() {
    return (
      <View style={deckListStyles.container}>
        {
          this.props.decks && <FlatList
            data={this.props.decks}
            renderItem={({ item }) => (
              <DeckItem
                key={item.title}
                deck={item}
                onPress={() => this.handleOnDeckItemPress(item)}
              />
            )}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: Object.values(state.decksById),
});

const mapDispatchToProps = dispatch => ({
  loadDecks: () => dispatch(listDecks()),
});

DeckList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  loadDecks: PropTypes.func.isRequired,
  decks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({})),
  })),
};

DeckList.defaultProps = {
  decks: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
