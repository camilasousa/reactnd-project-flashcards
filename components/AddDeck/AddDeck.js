import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../../actions/decks';

import styles from './styles';

class AddDeck extends React.Component {
  state = {
    title: null,
  };

  handleOnPress = () => {
    this.props.dispatchAddDeck({
      title: this.state.title,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Title"
          editable
          onChangeText={title => this.setState({ title })}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleOnPress}>
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchAddDeck: deck => dispatch(addDeck(deck)),
});

AddDeck.propTypes = {
  dispatchAddDeck: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddDeck);
