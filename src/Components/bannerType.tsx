import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function BannerType(props: {
  typeImg: any;
  cardTitle: string;
  cardText: string;
  dimension:string;
  buttonText: string;
  darkMode: boolean;
  onButtonClick: (cardTitle: string) => void;
}) {
  const handleTemplate = () => {
    props.onButtonClick(props.cardTitle);
  };
  
  return (
    <>
      <Card
        className={props.darkMode ? 'bg-dark text-light' : 'bg-light'}
        style={{ width: 'auto' }}
      >
        <Card.Img variant="top" src={props.typeImg} />
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <Card.Text>{props.cardText}</Card.Text>
          <Card.Text>{props.dimension}</Card.Text>
          <Button onClick={handleTemplate} variant={props.darkMode ? 'light' : 'dark'}>
            {props.buttonText}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default BannerType;
