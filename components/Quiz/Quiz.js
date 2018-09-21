import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const ResultView = ({ onOkayPress, onRestartPress, result }) => (
  <View style={styles.resultContainer}>
    <Text style={styles.resultLabel}>Your result:</Text>
    <Text style={styles.resultPercentage}>{result}%</Text>
    <TouchableOpacity
      style={styles.baseButton}
      onPress={onOkayPress}
    >
      <Text style={styles.buttonText}>OK</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.baseButton}
      onPress={onRestartPress}
    >
      <Text style={styles.buttonText}>Restart Quiz</Text>
    </TouchableOpacity>
  </View>
);

ResultView.propTypes = {
  onOkayPress: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired,
  onRestartPress: PropTypes.func.isRequired,
};

class Quiz extends React.Component {
  state = {
    currentIdx: 0,
    correctCount: 0,
    showingQuestion: true,
  }

  handleOnCorrectPress = () => {
    this.setState(prevState => ({
      currentIdx: prevState.currentIdx + 1,
      correctCount: prevState.correctCount + 1,
      showingQuestion: true,
    }));
  }

  handleOnIncorrectPress = () => {
    this.setState(prevState => ({
      currentIdx: prevState.currentIdx + 1,
      showingQuestion: true,
    }));
  }

  handleShowAnswer = () => {
    this.setState({ showingQuestion: false });
  }

  handleOkPress = () => {
    this.props.navigation.goBack();
  }

  handleRestartPress = () => {
    this.setState({
      currentIdx: 0,
      correctCount: 0,
      showingQuestion: true,
    });
  }

  render() {
    const questions = this.props.navigation.state.params.questions || [];
    const { currentIdx, showingQuestion, correctCount } = this.state;
    if (currentIdx === questions.length) {
      return (
        <ResultView
          result={(correctCount / questions.length) * 100}
          onOkayPress={this.handleOkPress}
          onRestartPress={this.handleRestartPress}
        />
      );
    }

    const currentQuestion = questions[currentIdx];
    return (
      <View style={styles.questionsContainer}>
        <Text style={styles.questionsLabel}>
          {currentIdx + 1}/{questions.length}
        </Text>
        {
          showingQuestion
            ? (
              <View style={styles.questionsContainer}>
                <Text style={styles.card}>
                  { currentQuestion.question }
                </Text>
                <TouchableOpacity
                  onPress={this.handleShowAnswer}
                  style={styles.baseButton}
                >
                  <Text style={styles.buttonText}>Answer</Text>
                </TouchableOpacity>
              </View>
            )
            : (
              <View style={styles.questionsContainer}>
                <Text style={styles.card}>
                  { currentQuestion.answer }
                </Text>
                <TouchableOpacity
                  style={styles.incorrectButton}
                  onPress={this.handleOnCorrectPress}
                >
                  <Text style={styles.buttonText}> Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.correctButton}
                  onPress={this.handleOnIncorrectPress}
                >
                  <Text style={styles.buttonText}> Incorrect </Text>
                </TouchableOpacity>
              </View>
            )
        }
      </View>
    );
  }
}

Quiz.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        questions: PropTypes.arrayOf(PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        })).isRequired,
      }).isRequired,
    }).isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Quiz;
