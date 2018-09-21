import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';


const ResultView = ({ onOkayPress, onRestartPress, result }) => (
  <View>
    <Text>Your result: {result}%</Text>
    <TouchableOpacity onPress={onOkayPress}>
      <Text>OK</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onRestartPress}>
      <Text>Restart Quiz</Text>
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
      <View>
        <Text>{currentIdx + 1}/{questions.length}</Text>
        {
          showingQuestion
            ? (
              <View>
                <Text>
                  { currentQuestion.question }
                </Text>
                <TouchableOpacity onPress={this.handleShowAnswer}>
                  <Text>Answer</Text>
                </TouchableOpacity>
              </View>
            )
            : (
              <View>
                <Text>
                  { currentQuestion.answer }
                </Text>
                <TouchableOpacity onPress={this.handleOnCorrectPress}>
                  <Text> Correct </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleOnIncorrectPress}>
                  <Text> Incorrect </Text>
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
