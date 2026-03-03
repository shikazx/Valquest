import { Outlet, Navigate } from "react-router-dom"

function PublicRoutes () {
    const user = false

    return user ? <Navigate to="/dashboard"/> : <Outlet/>
}

export default PublicRoutes