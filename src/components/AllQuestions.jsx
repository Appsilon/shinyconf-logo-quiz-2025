import QuestionCard from './QuestionCard';
import questions from '../data/questions';
import { useState } from 'react';

export default function AllQuestions() {
    const [currentPage, nextPage] = useState(0);
    const [answers, setAnswers] = useState([])
    const [isSelected, setSelection] = useState(false)
    const [answer, setAnswer] = useState('')

    let question = questions[currentPage];
    const handleOption = event => {
        setAnswer(event.target.id)
        setSelection(true)
    }
    return (
      <QuestionCard 
        src={question.src}
        option_first={question.option_first}
        option_second={question.option_second}
        option_third={question.option_third}
        option_fourth={question.option_fourth}
        disabled={!isSelected}
        handleOption={handleOption}
        handleNext={() => {
            if (currentPage + 1 === questions.length) {
                nextPage(0);
            } else {
                setSelection(false)
                setAnswers([...answers, answer])
                console.log(answers)
                nextPage(currentPage + 1);
                
            }
            
        }}
      />  
    );
}