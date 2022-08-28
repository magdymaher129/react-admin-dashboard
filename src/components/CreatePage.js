import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const CreatePage = (props) => {
    

 

  
    return (
      <div >
      
      
    
  
        <Modal show={props.show} onClose={props.handleClose} onHide={props.handleClose}  >
          <Modal.Header  style={{backgroundColor:'#dc3545',color:'#fff',margin:'-1px'}}>
            <Modal.Title >Add Page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Page Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter page title"
                  autoFocus
                />
              </Form.Group>
         
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Page Body</Form.Label>
                <CKEditor 
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              </Form.Group>
             
            </Form>
             </Modal.Body>
          <Modal.Footer>
           
      
           
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button   variant="success" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default CreatePage
