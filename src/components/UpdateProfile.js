import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    // this is to prevent reload of a page as reloading of a page is the default behavior
    e.preventDefault()
      // for the confirmation of the password
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match")
    }
      //promises handles the actions given to it
    const promises = []
    //disables the 'upload button'
    setLoading(true)
  
      //for the updation of the email
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    // for the updation of the password
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
      //executing the promises
    Promise.all(promises)
      .then(() => {
        //redirecting to homepage
        history.push("/")
      })
      .catch(() => {
        //handling the error
        alert("Failed to update account")
      })
      .finally(() => {
        //enabling the update button
        setLoading(false)
      })
  }

  return (
    <>
    <Header />
      <Card className="align-items-right" style={{ height: '55vh',width:"50vw", marginLeft:"25%" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Update
            </Button>
          </Form>
          <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
        </Card.Body>
      </Card>
      <Footer />
    </>
  )
}