import SignUp from "./signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
    
    </Routes>
    

    </BrowserRouter>
    
  );
}

export default App;
