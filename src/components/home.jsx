import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
                        prevColors[0] = "green"
                        break;
                    case "Tuesday":
                        prevColors[1] = "green"
                        break;
                    case "Wednesday":
                        prevColors[2] = "green"
                        break;
                    case "Thursday":
                        prevColors[3] = "green"
                        break;
                    case "Friday":
                        prevColors[4] = "green"
                        break;
                    case "Saturday":
                        prevColors[5] = "green"
                        break;
                    case "Sunday":
                        prevColors[6] = "green"
                        break;
                }

                return prevColors;
            })
        }
        else {
            setDays(days.filter(d => d !== dayText))


            setColors(prevColors => {
                switch (dayText) {
                    case "Monday":
                        prevColors[0] = "white"
                        break;
                    case "Tuesday":
                        prevColors[1] = "white"
                        break;
                    case "Wednesday":
                        prevColors[2] = "white"
                        break;
                    case "Thursday":
                        prevColors[3] = "white"
                        break;
                    case "Friday":
                        prevColors[4] = "white"
                        break;
                    case "Saturday":
                        prevColors[5] = "white"
                        break;
                    case "Sunday":
                        prevColors[6] = "white"
                        break;

                }
                return prevColors;
            })


        }
      



    }


    

    //TODO: add form input into this state
    const [data, setData] = useState([])

    const handleScheduleAdd = (event) =>
    {

        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)

        const textInput = event.target[0].value
        const timeInput = event.target[1].value
        const recurringStatus = event.target[2].value
        
        const dataObject = {
            item: textInput,
            time: timeInput,
            reccuring: recurringStatus,
            selectedDays: days
        }

        setData(prevData => [...prevData, dataObject])
        console.log(dataObject)

    }

  

    const dataShowcase = () => data.map((dataItem, index) =>
    (<div key={index} class="remove-object-container">
        <Form>
        <Container>
            <Row>
                <Col>{dataItem.item}</Col>
                <Col>{dataItem.item}</Col>
                <Col>{dataItem.item}</Col>
                <Col>{dataItem.item}</Col>
                <Col>{dataItem.item}</Col>
            </Row>
        </Container>
        </Form>
        </div>)
        )

 

    

    useEffect( () => {
        console.log(days)
    }, [days]) 

    useEffect( () => {
        console.log(data)
    }, [data]) 

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

    return (<>
        <div id="home-wrapper">
            <Form className="form" onSubmit={handleScheduleAdd}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Add to schedule</Form.Label>
                    <Form.Control type="text" placeholder="Enter event" />
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
        <div className="container-flex-col">
            {dataShowcase()}
            
        </div>
        </>)

    
}

//problem: need task information to be stored in a useState of array.

/* solution:
assign the 3 variables to a object and add it to the State-array.

*/