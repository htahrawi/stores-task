// import React from 'react'
import { useRoutes } from 'react-router-dom'
// import { PATHS } from './paths'
// import StorePage from '../pages/StorePage'
// import StoresPage from '../pages/StoresPage'
// import AddStorePage from '../pages/AddStorePage'
// import EditStorePage from '../pages/EditStorePage'
// import ErrorNotFoundPage from '../pages/ErrorNotFoundPage'
import {routes} from './routes'
const Router = () => {
    const router = useRoutes(
        routes
    )
    return router;
}

/*** 
 * 
return (
    <Routes>
    <Route path={PATHS.HOME} element={<Navigate to={PATHS.STORES.ROOTE} />} />
    <Route path={PATHS.STORES.ROOTE} element={<Outlet />}>
    <Route index element={<StoresPage />} />
    <Route path={PATHS.STORES.VIEW_STORE} element={<StorePage />} />
    <Route path={PATHS.STORES.ADD_STORE} element={<AddStorePage />} />
    <Route path={PATHS.STORES.EDIT_STORE} element={<EditStorePage />} />
    </Route>
    <Route path='*' element={<h1>PAGE NOT FOUND</h1>}  />
    </Routes>
    )
}
*/

export default Router