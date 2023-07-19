import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PATHS } from '../../router/paths'

const StorePage = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const [store, setStore] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getStore() {
            try {
                const { data } = await axios.get(`https://some-data.onrender.com/stores/${id}`)
                setStore(data);
            } catch (error) {
                console.log(error.message);
            } finally{
                setIsLoading(false)
            }
        }
        getStore();
    }, [])
    return (
        <div>
            {!isLoading ?
                <>
                    <h1>Store Page</h1>
                    <h2>{store?.name}</h2>
                    <h5>{store?.id}</h5>
                    <h2>{store?.cities?.map((city, index) => <p key={index}>{city}</p>)}</h2>
                    <div className="actions_container">
                        <button name='edit-btn' onClick={() => navigate(PATHS.STORES.EDIT_STORE.replace(':id', id))}>Edit</button>
                    </div>
                </>
                : <h1>Loading ...</h1>
            }
        </div>

    )
}

export default StorePage