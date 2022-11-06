import { Card } from "react-bootstrap";


function CardComponent({ image, title, type }) {

    return (

        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <b>{title}</b>
                <p>{type}</p>
            </Card.Body>
        </Card>

    )
}
export default CardComponent;