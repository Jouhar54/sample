import { Routes, Route } from "react-router";
import Basic from "./pages/formik/Validation";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Basic />} >
        </Route>
      </Routes>
    </>
  )
}

export default App