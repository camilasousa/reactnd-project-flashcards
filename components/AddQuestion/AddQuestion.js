import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import { addQuestion } from '../../actions/decks';

import styles from './styles';

class AddQuestion extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  handleOnPress = () => {
    this.props.dispatchAddQuestion(this.props.deckKey, this.state)
      .then(() => this.goBack());
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Question"
          editable
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <TextInput
          style={styles.input}
          placeholder="Answer"
          editable
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleOnPress}
        >
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchAddQuestion: (deckKey, question) => dispatch(addQuestion(deckKey, question)),
});

const mapStateToProps = (state, ownProps) => ({
  deckKey: ownProps.navigation.state.params.deckKey,
});

AddQuestion.propTypes = {
  deckKey: PropTypes.string.isRequired,
  dispatchAddQuestion: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    state: PropTypes.shape({
      params: PropTypes.shape({
        deckKey: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
