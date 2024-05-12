import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "./Pages/Home/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthGoogleProvider } from "./Context/LoginContext/authGoogle";
import { AuthPage } from "./Pages/Auth/AuthPage";

function App() {
  
  return (
    <AuthGoogleProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/window-admin"
            element={<Homepage/>}
          />
        </Routes>

        <Routes>
          <Route
            path="/auth-admin"
            element={<AuthPage/>}
          />
        </Routes>
      </BrowserRouter>
    </AuthGoogleProvider>
     
  )
}

export default App
