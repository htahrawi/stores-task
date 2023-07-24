import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";
import ErrorNotFoundPage from "../pages/ErrorNotFoundPage";
import StoresPage from "../pages/StoresPage";
import StorePage from "../pages/StorePage";
import AddStorePage from "../pages/AddStorePage";
import EditStorePage from "../pages/EditStorePage";

export const routes = [
    {
        path: '*',
        element: <Navigate to={PATHS.ERRORS.NOT_FOUND} />,
    },
    {
        path: PATHS.ERRORS.NOT_FOUND,
        element: <ErrorNotFoundPage />
    },
    {
        index: true,
        element: <Navigate to={PATHS.STORES.ROOTE} replace />
    },
    {
        path: PATHS.STORES.ROOTE,
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <StoresPage />
            },
            {
                path: PATHS.STORES.VIEW_STORE,
                element: <StorePage />
            },
            {
                path: PATHS.STORES.ADD_STORE,
                element: <AddStorePage />
            },
            {
                path: PATHS.STORES.EDIT_STORE,
                element: <EditStorePage />
            }
        ]
    },
]