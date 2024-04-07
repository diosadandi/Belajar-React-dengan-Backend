import { useContext, useState } from "react"
import { ContextApplication } from "../../libs/config/contexts"
import useJWT from "../../libs/hooks/useJWT"
import { Modal, Form, Button } from "react-bootstrap"
import useHTTP from "../../libs/hooks/useHTTP"
import useMessage from "../../libs/hooks/useMessage"
import useChangeListener from "../../libs/hooks/useChangeListener"
import {UserInit, UserValidator } from "../../data/UserData"
import useValidator from "../../libs/hooks/useValidator"
import { BASE_URL } from "../../libs/config/settings"


const WidgetUserSignInModal = () => {
  const application = useContext(ContextApplication)
  const http = useHTTP()
  const jwt = useJWT()
  const message = useMessage()
  const changelistener = useChangeListener()

  const [user, setUser] = useState(UserInit)
  const userValidator = useValidator(UserValidator)

  const SignIn = () => {
    //pertama yg perlu dilakukan dalam sign in adalah me reset semua sign in
    userValidator.reset()

    //Base URL ini asalnay dari VITE_BASE_URL. penting untuk diubah ke backend kita melalui .env.local
    const url = `${BASE_URL}/user/signin/`

    http.publicHTTP.post(url, user)
    .then((Response)=>{
      jwt.set(Response.data.token)
      console.log(Response.data.token)
    })
    .catch((error)=>{
      userValidator.except(error)
    })

  }


  return(
    <>
    <Modal
    show = {!application.isAtheticated}
    centered = {true}
    onHide={()=>{}}
    backdrop = {"static"}   
    
    >

      <Modal.Header closeButton>
        <Modal.Title>Sign in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          {/* untuk email */}
          <Form.Label>Email</Form.Label>
          <Form.Control
          name="email"
          value={user.email}
          onChange={e => changelistener.onChangeText(e, user, setUser)}>
          </Form.Control>
        </Form.Group>

        {/* untuk password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
          name="password"
          type="password"
          value={user.password}
          onChange={e => changelistener.onChangeText(e, user, setUser)}>
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={SignIn}>Sign In</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default WidgetUserSignInModal;