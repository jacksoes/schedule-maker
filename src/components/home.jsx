import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Color } from 'p5';

export default function HomeForm() {

    const [days, setDays] = useState([]);
    const [colors, setColors] = useState(["white", "white", "white", "white", "white", "white", "white"])




    const handleDaySelection = (event) => {
        const daySelected = event.currentTarget
        const dayText = daySelected.innerText

        if (!(days.includes(dayText))) {
            setDays(prevDays => [...prevDays, dayText])

            setColors(prevColors => {
                switch (dayText) {
                    case "Monday":
                        prevColors[0] = "red"
                        break;
                    case "Tuesday":
                        prevColors[1] = "red"
                        break;
                    case "Tuesday":
                        prevColors[2] = "red"
                        break;
                    case "Tuesday":
                        prevColors[3] = "red"
                        break;
                    case "Tuesday":
                        prevColors[4] = "red"
                        break;
                    case "Tuesday":
                        prevColors[5] = "red"
                        break;
                    case "Tuesday":
                        prevColors[6] = "red"
                        break;
                }
            

                return prevColors;
            }

            )




        }


        console.log(days)
        console.log(colors)




    }


    const FormDaySelector = () => {
        return (
            <Container id="daySelector-container" fluid>
                <Row>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[0] }}>Monday</div></Col>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[1] }}>Tuesday</div></Col>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[2] }}>Wednesday</div></Col>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[3] }}>Thursday</div></Col>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[4] }}>Friday</div></Col>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[5] }}>Saturday</div></Col>
                    <Col><div className="day-button" onClick={handleDaySelection} style={{ background: colors[6] }}>Sunday</div></Col>
                </Row>


            </Container>)

    }





    return (
        <div id="home-wrapper">
            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Add to schedule</Form.Label>
                    <Form.Control type="email" placeholder="Enter event" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTime">
                    <Form.Label>Time for reminder</Form.Label>
                    <Form.Control type="time" placeholder="Time" />
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