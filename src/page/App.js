import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './config'

const App = () => (
  <Router>
    <Routes>
      {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
    </Routes>
  </Router>
)

export default App
