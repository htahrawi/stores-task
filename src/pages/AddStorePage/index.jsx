import React from 'react'
import StoreForm from '../../components/StoreForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '../../router/paths'

const AddStorePage = () => {
    const navigate = useNavigate()
    const submitHandler = async (body) => {
        console.log('Submitted')
        try {
            await axios.post('https://some-data.onrender.com/stores',body)
            navigate(PATHS.STORES.ROOTE)
        } catch (error) {
            console.log(error.message);
            console.log("FAILD TO ADD");
        }
    }
    return (
        <div>
            ADD STORE PAGE
            <StoreForm
                handleSubmitProp={submitHandler}
            />
        </div>
    )
}

export default AddStorePage