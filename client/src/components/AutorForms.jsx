import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


const AutorsErrores = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Please enter a minimum of 3 characters')
        .max(50, 'Very long text! ')
        .required('Required'),
});
const AutorForms = ({ initialValues, onSubmit}) => {
    return (
        <Formik
            enableReinitialize={true} //PARA ACTUALIZAR
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={AutorsErrores}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <div className='row border w-50'>
                        <div className='mt-3 mr-3 mb-3 pl-5 '>
                            <label><strong>Name:</strong></label>
                            <Field name="name" className="form-control" placeholder="Add Name" />
                            {touched.name && errors.name && <div className='ms-3 mt-1 text-danger'>{errors.name}</div>}
                        </div>
                    </div>
                    <Link className='btn btn-primary btn-lg mt-5 pr-5 ' to={`/`}>Cancel</Link>
                    <button className='btn btn-primary btn-lg mt-5 pr-5 ms-3' disabled={!(isValid && dirty)} >Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default AutorForms