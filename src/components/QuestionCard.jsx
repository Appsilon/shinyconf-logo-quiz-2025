import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import Option from './Option';

export default function QuestionCard(props) {
  return (
    <div 
        className='shadow p-3 mb-5 bg-white rounded' 
        style={{width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: "200px" }}
    >
    <Row className='d-flex justify-content-center'>
      <Image 
        src={props.src} 
        style={{width: "200px", marginBottom: "20px", marginTop: "40px"}}
      />
    </Row>
      <Row className='d-flex justify-content-center'>
        <Col
          style={{width: "250px"}}
          sm={6}
        >
            <Option text={props.option_first} handleOption={props.handleOption} />
        </Col>
        <Col 
          style={{width: "250px"}}
          sm={6}
        >
            <Option text={props.option_second} handleOption={props.handleOption}/>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col 
          style={{width: "250px"}}
          sm={6}
        >
            <Option text={props.option_third} handleOption={props.handleOption}/>
        </Col>
        <Col 
          style={{width: "250px"}}
          sm={6}
        >
            <Option text={props.option_fourth} handleOption={props.handleOption}/>
        </Col>
      </Row>
      <Row style={{marginBottom: "40px"}} className='d-flex justify-content-center'> 
          <Button 
              type='button' 
              variant="outline-primary next-btn"
              style={{
                width: "120px", 
                borderRadius: "50px", 
                fontFamily: "Montserrat",
                marginTop: "10px"
              }}
              size='lg'
              onClick={props.handleNext}
              disabled={props.disabled}
          >
            <i className="bi bi-fast-forward-fill"/> Next
          </Button>
      </Row>
    </div>
  );
}
