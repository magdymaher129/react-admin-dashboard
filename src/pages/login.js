import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login = (props) => {
  return (
    <div>
       <Modal show={props.loginshow} onClose={props.handleLoginClose} onHide={props.handleLoginClose}  >
          <Modal.Header  style={{backgroundColor:'#dc3545',color:'#fff',margin:'-1px'}}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
             
             
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter User Email..."
                  
                  autoFocus
                />
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Passwowrd</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
               
                />
              </Form.Group>
            </Form>
             </Modal.Body>
          <Modal.Footer>
           
      
           
            <Button variant="secondary" onClick={props.handleLoginClose}>
              Login
            </Button>
          
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Login
