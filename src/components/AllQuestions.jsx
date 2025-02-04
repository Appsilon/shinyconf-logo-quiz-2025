import QuestionCard from './QuestionCard';
import questions from '../data/questions';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Container, Image, Row } from 'react-bootstrap';
import GaugeComponent from 'react-gauge-component';

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
        <Container className='d-flex justify-content-center'>
          <Row>
            <Image src="appsilon.svg" style={{width: 200, height: 60, marginTop: "58px"}}/>
            <Image src="shinyconf2025.webp" style={{width: 300, height: 60, marginTop: "58px"}}/>
          </Row>
        </Container>
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
        nextIcon={currentPage + 1 === questions.length ? "bi bi-check-circle-fill" : "bi bi-arrow-right-square-fill"}
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
        <Modal.Body 
              style={{
                fontSize: "28px", 
                fontFamily: "Titillium Web"
              }}>Quiz complete! Are you ready for your score? 😉
        </Modal.Body>
        <Modal.Footer>
        <Button 
              type='button' 
              variant="outline-primary finish-btn"
              size='lg'
              onClick={calculateMarks}
              style={{fontFamily: "Titillium Web", fontSize: "24px"}}>
            <i className="bi bi-calculator-fill"/> Calculate
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size='md' show={showResult}>
        <Modal.Header 
            className='d-flex justify-content-center' 
            style={{fontFamily: "Titillium Web", fontSize: "32px", fontWeight: "500"}}>
              Score &nbsp; <i className="bi bi-card-checklist"></i>
        </Modal.Header>
        <Modal.Body>
        <GaugeComponent
            value={(marks/questions.length)*100}
            type="radial"
            labels={{
              tickLabels: {
                type: "inner",
                ticks: [
                  { value: 20 },
                  { value: 40 },
                  { value: 60 },
                  { value: 80 },
                  { value: 100 }
                ]
              }
            }}
            arc={{
              colorArray: ['#EA4228','#5BE12C'],
              subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
              padding: 0.02,
              width: 0.3,
            }}
            pointer={{
              elastic: true,
              animationDelay: 0
            }}
        />
        </Modal.Body>
        <Modal.Footer>
        <Button 
              type='button' 
              variant="outline-primary retake-btn"
              size='lg'
              onClick={resetQuiz}
              style={{fontFamily: "Titillium Web", fontSize: "24px"}}>
            <i className="bi bi-repeat"/> Retake Quiz!
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <a 
          href='https://www.appsilon.com' 
          target='_blank' 
          className='d-flex justify-content-center'
          style={{
            fontFamily: "Titillium Web", 
            fontSize: "24px", 
            textDecoration: "none",
            color: "#94AFCF"
          }}
        >www.appsilon.com
        </a>
      </Row>
      </>
    );
}