import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const DeleteButton = ({id_autor, succesCallback}) => {
    const eliminarAutor = async (autorID) => {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/autor/${autorID}`);
            succesCallback(autorID);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ops!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
    }

    const confirmarEliminar = (autorID) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarAutor(autorID);
            }
        })
    }

    return (
        <button className='btn btn-secondary ms-2' onClick={() => { confirmarEliminar(id_autor) }}>Delete</button>
    )
}

export default DeleteButton