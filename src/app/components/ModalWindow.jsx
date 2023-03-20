import React from 'react';
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { GoAlert } from "react-icons/go";

import '../styles/style.css';

const ModalWindow = (props) => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
		reset
    } = useForm({
        mode: 'onChange'
    })

	const onSubmit = (data) => {
		reset();
		props.addTodo(data)
		props.callback()
	}

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
							<FormControl as='textarea' rows={3} {...register('textarea', {
								required: 'Don\'t leave the field empty',
								minLength: {
									value: 5,
									message: 'A little bit more letters, mon ami'
								}
							})} autoFocus />
							<div>
								{errors?.textarea && <p className='warning mt-1'><GoAlert /> {errors?.textarea?.message || 'Error!'}</p>}
							</div>
						</FormGroup>
					</Form>	
				</ModalBody>
				<ModalFooter>
					<Button variant='secondary' onClick={props.callback}>
					Close 
					</Button>
					<Button variant='primary' disabled={!isValid} onClick={handleSubmit(onSubmit)}>
					Save it!
					</Button>
				</ModalFooter>
            </Modal>
        </>
    )
}

export default ModalWindow;