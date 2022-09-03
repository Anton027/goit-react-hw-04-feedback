
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

import { useState } from 'react';
import { Notification } from './Notification/Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (name) => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }
  const  countTotalFeedback = () => {
    return (
      good +
      neutral +
      bad
    )
  }
  const  countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
    
  }
  
  return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{good,neutral,bad}}
          handleIncrement={handleIncrement}
          />
        </Section>
        <Section title='Statistic'>
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={
                countPositiveFeedbackPercentage()
              }
            />
          ) : <Notification 
            message="There is no feedback" />
          }
        </Section>
        
        <GlobalStyle />
      </>
    );
}