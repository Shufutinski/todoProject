import React from 'react';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

const ModalWindow = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.callback} centered>
              <ModalHeader closeButton>
                <ModalTitle>
                  Add some task below
                </ModalTitle>
              </ModalHeader>
              <ModalBody>
                <Form>
                    <FormGroup className='mb-3' controlId='controlTextarea'>
                        <FormLabel>Write something here...</FormLabel>
                        <FormControl as='textarea' rows={3} autoFocus />
                    </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button variant='secondary' onClick={props.callback}>
                  Close
                </Button>
                <Button variant='primary' onClick={props.callback}>
                  Save it!
                </Button>
              </ModalFooter>
            </Modal>
        </>
    )
}

export default ModalWindow;