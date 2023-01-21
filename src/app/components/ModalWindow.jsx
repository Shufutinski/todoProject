import React from 'react';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import FormTextarea from './FormTextarea';

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
					<FormTextarea />	
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