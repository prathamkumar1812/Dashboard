
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import{Home, Details} from './pages'
function App() {

  return (
    <>   
    
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>} />
        </Route>      
      </Routes>
     
    </>
  )
}

export default App
