import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import STORES_COLUMNS from '../../constant/stores';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths'
const StoresPage = () => {
  const [stores, setStores] = useState([]);
  const [isLoading, setIdLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStores() {
      try {
        const { data } = await axios.get('https://some-data.onrender.com/stores')
        setStores(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIdLoading(false)
      }
    }
    fetchStores();
  }, [])
  const storeView = (id) => {
    navigate(PATHS.STORES.VIEW_STORE.replace(':id', id))
  }
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`https://some-data.onrender.com/stores/${id}`)
      setStores(stores.filter(store => store.id !== id))
    } catch (error) {
      console.log(error.message)
    }
  }
  const editHandler = (id) => {
    navigate(PATHS.STORES.EDIT_STORE.replace(':id', id))
  }
  return (
    <div>
      <button name='add-btn' onClick={() => navigate(PATHS.STORES.ADD_STORE)}>Add Store</button>
      {
        !isLoading &&
        <Table
          columns={STORES_COLUMNS(deleteHandler, editHandler)}
          data={stores}
          onRowClicked={(id) => { storeView(id) }}
          isLoading={isLoading}
        />
      }
    </div>
  )
}

export default StoresPage