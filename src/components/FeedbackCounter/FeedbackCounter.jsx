import {useState} from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Statistics/Notification';

const FeedbackCounter = () => {
    const [feedBack, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    })
    
    const handleFeedback = options => {
        setFeedback(prevState => ({ ...prevState, [options]: prevState[options] + 1 }));
    }
    const countTotalFeedback = () => {
        return feedBack.bad + feedBack.good + feedBack.neutral;
    }
    const countPositiveFeedbackPercentage = () => {
        return Math.floor(feedBack.good / (feedBack.good + feedBack.neutral + feedBack.bad) * 100)
    }

    
        
        if (feedBack.good > 0 || feedBack.neutral > 0 || feedBack.bad > 0) {
            return (
                <>
                    <FeedbackOptions options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={handleFeedback}
                    />                
       
                    <Statistics
                        good={feedBack.good}
                        neutral={feedBack.neutral}
                        bad={feedBack.bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                </>
            )
        } else {
            return (
                <>
                    <FeedbackOptions options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={handleFeedback} />
                    <Notification message={'There is no feedback'}></Notification>
                </>
            )
        }
    }



export default FeedbackCounter;