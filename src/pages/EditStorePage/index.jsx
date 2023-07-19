import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import StoreForm from '../../components/StoreForm'
import axios from 'axios'
import {PATHS} from '../../router/paths'
const EditStorePage = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [store, setStore] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getStore() {
            try {
                const { data } = await axios.get(`https://some-data.onrender.com/stores/${id}`);
                setStore(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        getStore();
    })
    const handleUpdateStore = (updatedStore) => {
        if (updatedStore !== store) {
            async function updateStore() {
                try {
                    await axios.put(`https://some-data.onrender.com/stores/${id}`, updatedStore);
                    navigate(PATHS.STORES.ROOTE)
                } catch (error) {
                    console.log(error.message);
                }
            }
            updateStore();
        }else{ 
            alert("No changes made");
        }
    }
    return (
        <div>EditStorePage {id}
            {!isLoading ?
                <StoreForm
                    storeFromProps={store}
                    handleSubmitProp={handleUpdateStore}
                />
                :
                <h1>IS LOADING ...</h1>}

        </div>
    )
}

export default EditStorePage