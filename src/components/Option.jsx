import Button from 'react-bootstrap/Button';

export default function Option(props) {
    return (
        <>
            <Button 
                variant="outline-primary option-btn" 
                size='lg' 
                key={props.text}
                id={props.text}
                onClick={props.handleOption}
                style={{width: "200px", margin: "10px", fontFamily: "Montserrat", borderRadius: "50px"}}
            >
                {props.text}
            </Button>
        </>
    );
} 