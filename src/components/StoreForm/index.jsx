import React, { useState } from 'react'
import './style.css'
const INPUTS_STRUCTURE = [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "Store Name"
    },
    {
        id: "cities",
        name: "cities",
        type: 'textarea',
        label: "Cities"
    }
]
const StoreForm = ({ handleSubmitProp = () => { }, storeFromProps }) => {
    const [store, setStore] = useState(storeFromProps ? storeFromProps : { name: '', cities: [] })
    const handleNameChange = (e) => {
        const { value } = e.target;
        setStore({ ...store, name: value })
    }
    const handleCitiesChange = (e) => {
        const { value } = e.target;
        let arr = value.replace('\n', ',')
        console.log("THE TYPE OD CITIES IS ", arr);
        setStore({ ...store, cities: arr })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(store);
        handleSubmitProp(store)
    }
    return (
        <form  >
            {
                INPUTS_STRUCTURE.map((input, index) => (
                    <div key={index}>
                        <label>{input.label}: </label>
                        {
                            input.type === 'textarea' ?
                                <textarea
                                    onChange={handleCitiesChange}
                                    name={input.name}
                                    id={input.id}
                                    rows={10}
                                    cols={30}
                                    value={store[input.id]}
                                    placeholder='Enter one City in every line'
                                ></textarea>
                                :
                                <input
                                    onChange={handleNameChange}
                                    type={input.type}
                                    name={input.name}
                                    id={input.id}
                                    value={store[input.id]}
                                />
                        }
                    </div>
                ))
            }
            <div className="actions_container">
                <button onClick={(store) => submitHandler(store)} name='submit-btn' type="submit">Submit</button>
            </div>
        </form>
    )
}

export default StoreForm