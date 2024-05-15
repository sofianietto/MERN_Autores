import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from '../../components/DeleteButton';

const Autors = () => {
    const [autors, setAutors] = useState([]);//un arreglo vacio
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autor`); //ruta
            setAutors(respuesta.data);
        }
        getData();

    }, [])

    const quitarAutor = (autorID) => {
        setAutors(autors.filter((autor) => autor._id !== autorID));
    }

    return (
        <>
            <Link to="/autors/agregar">Add an author</Link>
            <h5 className='text-primary'>We have quotes by:</h5>
            <table className='table table-striped table-hover table-bordered w-50'>
                <thead className='w-25'>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {autors.map((autor, index) => <tr key={index}>
                        <td><Link to={`/autors/${autor._id}`}>{autor.name}</Link></td>
                        <td>
                            <Link className='btn btn-secondary' to={`/autors/${autor._id}/editar`}>Edit</Link>
                            <DeleteButton id_autor={autor._id} succesCallback={quitarAutor} />
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default Autors