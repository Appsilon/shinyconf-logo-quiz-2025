import QuestionCard from './QuestionCard';
import questions from '../data/questions';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

export default function AllQuestions() {
    const [currentPage, nextPage] = useState(0);
    const [answers, setAnswers] = useState([])
    const [isSelected, setSelection] = useState(false)
    const [showModal, setShow] = useState(false)
    const [showResult, setResult] = useState(false)
    const [answer, setAnswer] = useState('')
    const [marks, setMarks] = useState(0)

    const calculateMarks = () => {
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].answer === answers[i]) {
                setMarks(prevMarks => prevMarks + 1)       
            } 
        }
        setShow(false)
        setResult(true)
    }

    let question = questions[currentPage];
    const handleOption = event => {
        setAnswer(event.target.id)
        setSelection(true)
    }
    const resetQuiz = () => {
        setShow(false)
        setResult(false)
        setSelection(false)
        setMarks(0)
        setAnswer('')
        setAnswers([])
        nextPage(0)
    }

    return (
        <>
      <QuestionCard 
        src={question.src}
        option_first={question.option_first}
        option_second={question.option_second}
        option_third={question.option_third}
        option_fourth={question.option_fourth}
        disabled={!isSelected}
        finishButtonHidden={currentPage + 1 === questions.length ? false : true}
        nextButtonHidden={false}
        nextButtonText={currentPage + 1 === questions.length ? "Done" : "Next"}
        nextIcon={currentPage + 1 === questions.length ? "bi bi-check-circle-fill" : "bi bi-fast-forward-fill"}
        handleOption={handleOption}
        handleNext={() => {
            if (currentPage + 1 === questions.length) {
                setAnswers(prevAnswers => [...prevAnswers, answer])
                setShow(true)
            } else {
                setSelection(false)
                setAnswers(prevAnswers => [...prevAnswers, answer])
                nextPage(currentPage + 1);
            }
        }}
      />  
      <Modal show={showModal} size='md'>
        <Modal.Body style={{fontSize: "28px"}}>Quiz complete! Are you ready for your score? 😉</Modal.Body>
        <Modal.Footer>
        <Button 
              type='button' 
              variant="outline-primary finish-btn"
              size='lg'
              onClick={calculateMarks}
          >
            <i className="bi bi-calculator-fill"/> Calculate
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size='md' show={showResult}>
        <Modal.Body>You received {marks}/{questions.length}</Modal.Body>
        <Modal.Footer>
        <Button 
              type='button' 
              variant="outline-primary retake-btn"
              size='lg'
              onClick={resetQuiz}
          >
            <i className="bi bi-repeat"/> Retake Quiz!
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}