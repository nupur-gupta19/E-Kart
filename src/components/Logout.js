import React, { useState } from "react"
import { Card, Button, Alert,Navbar,Collapse,Nav,NavItem } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

class SiteBar extends React.Component {
  constructor(props) {
      super(props) 
      this.state = {
          isOpen: false
      }
         this.toggle = this.toggle.bind(this);
  }
  toggle() {
      this.setState(prevState => {
          return {
              isOpen: !prevState.isOpen
          }
      });
  }
  render() {
      let btnTxt = this.state.isOpen ? 'Login' : 'Logout'
      return (
          <React.Fragment>
              <Navbar color="faded"  light expand="md">
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <Button color="light" onClick={this.toggle}>{btnTxt}</Button>
                          </NavItem>
                      </Nav>
                  </Collapse>
              </Navbar>
          </React.Fragment>
      );
  }
}
export default SiteBar;





// export default function Dashboard() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
//   const history = useHistory()

//   async function handleLogout() {
//     setError("")

//     try {
//       await logout()
//       history.push("/")
//     } catch {
//       setError("Failed to log out")
//     }
//   }

//   return (
//     <>
      
//       <div className="w-100 text-center mt-2">
//         <Button variant="link" onClick={handleLogout}>
//           Log Out
//         </Button>
//       </div>
//     </>
//   )
// }