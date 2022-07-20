import BusDetail from "./busDetail/BusDetail"
import BusList from "./busList/BusList"
import { Navigate } from 'react-router-dom'

const defaultPath = '/busList'

const routes = [
    { element: <BusList />, path: "/busList" },
    { element: <BusDetail />, path: "/busDetail" },
    { element: <Navigate to={defaultPath} replace={true} />, path: "/" }
]

export { routes }