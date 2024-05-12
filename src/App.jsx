import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./Pages/Home/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage/>}
        />
      </Routes>
    </BrowserRouter> 
  )
}

export default App
