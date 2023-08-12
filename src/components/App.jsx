import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const feedbackPositive = () => {
    const total = goodFeedback + badFeedback + neutralFeedback;
    return Math.round((goodFeedback * 100) / total) || 0;
  };

  const total = countTotalFeedback();
  const positiveFeedback = feedbackPositive();
  // приймає параметр `option`, який представляє тип відгуку
  // передається при виклику методу і вказує, який тип відгуку був вибраний.
  // setState приймає новий стан та оновлює поточний
  // prevState попередній стан

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBadFeedback(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Section title="Please live feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={total}
            positivePercentage={positiveFeedback}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
};
export default App;
