import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";



class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (type) => {

    this.setState(prevState => {

      return {
        [type]: prevState[type] + 1,
      }
    }
  )
};

render() {
  
  const { good, neutral, bad} = this.state;

  const countTotalFeedback = () => {
    const result = good + neutral + bad 
    return result;
  }

  const countPositiveFeedbackPercentage = () => {
    const result = 100 / countTotalFeedback() * good;
    return Math.round(result);
  }


      return (
        <>
          <Section title="Please leave Feedback Options">

            <FeedbackOptions
              onLeaveFeedback={this.onLeaveFeedback}
            />

          </Section>
          
          <Section title="Statistics">

            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
              />
            
          </Section>

        </>
      );
    }
  }

export default App;