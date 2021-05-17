import React from 'react'
import { Form, Button, Card } from "react-bootstrap"
import { Link} from "react-router-dom"
import Header from './Header'

function ContactUs() {
    return (
        <>
        <Header />
        <Card className="align-items-center shadow-lg mt-lg-5 mt-sm-5 mt-md-5" style={{ height: '60vh',width:"50vw", marginLeft:"25%" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Contact Us</h2>
          <Form >
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"  required placeholder="Enter Name"/>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"  required placeholder="Enter Email"/>
            </Form.Group>
            <Form.Group id="message">
              <Form.Label>Email</Form.Label>
              <Form.Control as="textarea" rows="3" required placeholder="Type a message"/>
            </Form.Group>
            <Button  className="w-100 mt-3" type="submit">
              Submit
            </Button>
            </Form>
            </Card.Body>
      </Card>
        </>
    )
}
export default ContactUs;