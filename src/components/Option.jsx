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
                style={{
                    width: "374px", 
                    height: "73px", 
                    margin: 0, 
                    fontFamily: "Titillium Web", 
                    borderRadius: "4px",
                    fontSize: "24px"
                }}
            >
                {props.text}
            </Button>
        </>
    );
} 