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

  render() {
    return (
      <View style={deckListStyles.container}>
        {
          this.props.decks && <FlatList
            data={this.props.decks}
            renderItem={({ item }) => <DeckItem key={item.title} deck={item} />}
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
