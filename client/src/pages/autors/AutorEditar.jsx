import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AutorForms from '../../components/AutorForms'
import Swal from 'sweetalert2'

const AutorEditar = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [autor, setAutor] = useState({}) //un obj vacio

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autor/${id}`);
            setAutor(respuesta.data);
        }
        getData();

    }, [id])

    const actualizarAutor = async (values, actions) => {
        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/autor/${id}`, values);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Brilliant!!',
                    text: `${respuesta.data.name} has been updated successfully`
                });
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
            <Link to="/">back to home</Link>
            <div>
                <h5 className='text-primary'>Editar this author</h5>
                <AutorForms
                    initialValues={autor}
                    onSubmit={actualizarAutor}
                />

            </div>
        </>
    )
}

export default AutorEditar