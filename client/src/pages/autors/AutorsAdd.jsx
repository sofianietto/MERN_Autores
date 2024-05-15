import React from 'react'
import AutorForms from '../../components/AutorForms'
import Swal from 'sweetalert2'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AutorsAdd = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: '',
    }

    const crearAutor = async (values, actions) => {
        try {
            const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/autor`, values);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Genial!!',
                    text: `${respuesta.data.name} has been added successfully`
                });
                actions.resetForm(initialValues);
                navigate('/')
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }


    return (
        <>
            <Link to="/">Home</Link>
            <h5 className='text-primary'>Add a new author: </h5>
            <AutorForms
                initialValues={initialValues}
                onSubmit={crearAutor}
            />
        </>
    )
}

export default AutorsAdd