import Products from './Pages/Products/Products'
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import AddProducts from './Pages/AddProduct/AddProducts'

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/add-products' element={<AddProducts />} />
      </Routes>
    </Router>
  )
}

export default App