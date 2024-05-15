import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const AutorDetalle = () => {
    const { id } = useParams()
    const [autor, setAutor] = useState({}) //un obj vacio

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autor/${id}`);
            setAutor(respuesta.data);
        }
        getData();
    }, [id])

    return (
        <>
            <Link to="/">back to home</Link>
            <div className="card" style={{ width: "30rem" }}>
                <div className="card-header">
                    <div className='card-body d-flex justify-content-between'>
                        <h5 className="card-title">Author: {autor.name}</h5>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AutorDetalle