import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const CreateUser = (props) => {
  return (
    <div >
      
      
    
  
        <Modal show={props.usershow} onClose={props.handleUserClose} onHide={props.handleUserClose}  >
          <Modal.Header  style={{backgroundColor:'#dc3545',color:'#fff',margin:'-1px'}}>
            <Modal.Title >Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter User Name..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="enter User email..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter User address..."
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Job</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter User Job..."
                  autoFocus
                />
              </Form.Group>
             
            </Form>
             </Modal.Body>
          <Modal.Footer>
           
      
           
            <Button variant="secondary" onClick={props.handleUserClose}>
              Close
            </Button>
            <Button   variant="success" onClick={props.handleUserClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default CreateUser
