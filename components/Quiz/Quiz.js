import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View, Animated } from 'react-native';

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
    rotate: new Animated.Value(0),
    showButtons: true,
  }

  componentWillUnmount() {
    this.state.rotate.removeAllListeners();
  }

  handleOnCorrectPress = () => {
    this.setState(prevState => ({
      correctCount: prevState.correctCount + 1,
      showButtons: false,
    }), () => this.animateToQuestion());
  }

  handleOnIncorrectPress = () => {
    this.setState(() => ({
      showButtons: false,
    }), () => this.animateToQuestion());
  }

  handleShowAnswer = () => {
    this.setState(() => ({
      showButtons: false,
    }), () => this.animateToAnswer());
  }

  handleOkPress = () => {
    this.props.navigation.goBack();
  }

  handleRestartPress = () => {
    this.setState({
      currentIdx: 0,
      correctCount: 0,
      showingQuestion: true,
      rotate: new Animated.Value(0),
      showButtons: true,
    });
  }

  animateToAnswer() {
    Animated.sequence([
      Animated.timing(this.state.rotate, { toValue: 90, duration: 200 }),
      Animated.timing(this.state.rotate, { toValue: 0, duration: 200 }),
    ]).start();

    this.state.rotate.removeAllListeners();
    this.state.rotate.addListener(({ value }) => {
      if (value === 90) {
        this.setState({ showingQuestion: false, showButtons: true });
      }
    });
  }

  animateToQuestion() {
    Animated.sequence([
      Animated.timing(this.state.rotate, { toValue: 90, duration: 200 }),
      Animated.timing(this.state.rotate, { toValue: 0, duration: 200 }),
    ]).start();

    this.state.rotate.removeAllListeners();
    this.state.rotate.addListener(({ value }) => {
      if (value === 90) {
        this.setState(prevState => ({
          currentIdx: prevState.currentIdx + 1,
          showingQuestion: true,
          showButtons: true,
        }));
      }
    });
  }

  renderButtons() {
    if (!this.state.showButtons) return null;
    if (this.state.showingQuestion) {
      return (
        <TouchableOpacity
          onPress={this.handleShowAnswer}
          style={styles.baseButton}
        >
          <Text style={styles.buttonText}>Answer</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.questionsContainer}>
        <TouchableOpacity
          style={styles.correctButton}
          onPress={this.handleOnCorrectPress}
        >
          <Text style={styles.buttonText}> Correct </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.incorrectButton}
          onPress={this.handleOnIncorrectPress}
        >
          <Text style={styles.buttonText}> Incorrect </Text>
        </TouchableOpacity>
      </View>
    );
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
    const rotateY = this.state.rotate.interpolate({
      inputRange: [0, 90],
      outputRange: ['0deg', '90deg'],
    });
    const currentQuestion = questions[currentIdx];
    return (
      <View style={styles.questionsContainer}>
        <Text style={styles.questionsLabel}>
          {currentIdx + 1}/{questions.length}
        </Text>

        <Animated.Text style={[styles.card, { transform: [{ rotateY }] }]}>
          { showingQuestion ? currentQuestion.question : currentQuestion.answer }
        </Animated.Text>
        { this.renderButtons() }
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
