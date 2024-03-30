import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export default function HomeForm () {

    const FormDaySelector = () => {
        return (
        <Container id="daySelector-container" fluid>
            <Row>
                <Col><div className="day-button">Monday</div></Col>
                <Col><div className="day-button">Tuesday</div></Col>
                <Col><div className="day-button">Wednesday</div></Col>
                <Col><div className="day-button">Thursday</div></Col>
                <Col><div className="day-button">Friday</div></Col>
                <Col><div className="day-button">Saturday</div></Col>
                <Col><div className="day-button">Sunday</div></Col>
            </Row>


        </Container>)
            
    }

  



    return(
    <div id="home-wrapper">
        <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Add to schedule</Form.Label>
                <Form.Control type="email" placeholder="Enter event" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTime">
                <Form.Label>Time for reminder</Form.Label>
                <Form.Control type="password" placeholder="Time" />
            </Form.Group>
            <FormDaySelector />




            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recurring" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
        )
}