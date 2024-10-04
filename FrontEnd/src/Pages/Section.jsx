import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section() {
  return (
    <Container class="padding: $spacer !important" >
      <Row>
        <Col>
        <h3 width="100px" class="p-3 text-primary-emphasis ">“We have set ourselves an ambitious target of becoming a $1 Trillion economy by 2030”</h3>
        <h4>- Thiru. M.K. Stalin</h4>
        <p>Hon'ble Chief Minister of Tamil Nadu</p>
        </Col>
        <Col>
        <img width="200px" src="https://startuptn.in/images/cmimage.png"></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Section;