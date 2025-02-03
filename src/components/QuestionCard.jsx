import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import Option from './Option';

export default function QuestionCard(props) {
  return (
    <div 
        className='responsive-div shadow mb-5 bg-white rounded' 
        style={{
          width: "865px",
          height: "715px", 
          marginLeft: "auto", 
          marginRight: "auto", 
          marginTop: "65px",
          padding: "12px",
          paddingTop: 0,
          overflow: "hidden"
        }}
    >
      <Row style={{height: "141px"}} id='quiz-banner'>
        <p 
          className='d-flex justify-content-center align-items-center' 
          style={{fontSize: "64px", fontFamily: "Caladea"}}>Hex Logo Master
        </p>
      </Row>
    <Row className='d-flex justify-content-center'>
      <Image 
        className='img'
        src={props.src} 
        style={{width: "222px", marginBottom: "20px", marginTop: "40px"}}
      />
    </Row>
      <Row>
        <Col
          sm={6}
          className='d-flex justify-content-end'
          style={{paddingRight: "16.5px", paddingLeft: "8.5px"}}
        >
            <Option text={props.option_first} handleOption={props.handleOption} />
        </Col>
        <Col 
          sm={6}
          className='d-flex justify-content-start'
          style={{paddingLeft: "16.5px", paddingRight: "8.5px"}}
        >
            <Option text={props.option_second} handleOption={props.handleOption}/>
        </Col>
      </Row>
      <Row style={{marginTop: "17px"}}>
        <Col
          sm={6}
          className='d-flex justify-content-end'
          style={{paddingRight: "16.5px", paddingLeft: "8.5px"}}
        >
            <Option text={props.option_third} handleOption={props.handleOption}/>
        </Col>
        <Col
          sm={6}
          className='d-flex justify-content-start'
          style={{paddingLeft: "16.5px", paddingRight: "8.5px"}}
        >
            <Option text={props.option_fourth} handleOption={props.handleOption}/>
        </Col>
      </Row>
      <Row 
        className='d-flex justify-content-end align-items-center' 
        style={{height: "110px"}}
      > 
          <Button 
              type='button' 
              variant="outline-primary next-btn responsive-btn"
              style={{
                width: "120px", 
                borderRadius: "4px", 
                fontFamily: "Titillium Web",
                fontSize: "24px",
                marginTop: "10px",
                marginRight: "42px"
              }}
              size='lg'
              onClick={props.handleNext}
              disabled={props.disabled}
              hidden={props.nextButtonHidden}>
             {props.nextButtonText}&nbsp;<i className={props.nextIcon}/>
          </Button>
      </Row>
    </div>
  );
}
