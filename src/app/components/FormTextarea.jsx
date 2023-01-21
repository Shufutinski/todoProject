import React from 'react';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormTextarea = () => {
  return (
    <Form>
        <FormGroup className='mb-3' controlId='controlTextarea'>
            <FormLabel>Write something here...</FormLabel>
            <FormControl as='textarea' rows={3} autoFocus />
        </FormGroup>
    </Form>
  )
}

export default FormTextarea;