
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
// import NavBar from './Components/Navbar';
// import AllRoutes from './Routes/AllRoutes';
import Home from './Routes/Home';
import Navbar from './Routes/Navbar';
import Signin from './Routes/Signin';
import AllRoutes from './Routes/AllRoutes';
import Signup from './Routes/Signup';

function App() {
  return (
    <div className="App">
      {/* <div className="App-header" > */}
      <BrowserRouter>
      <ChakraProvider>
        <AllRoutes/>
        {/* <Signin/> */}
        {/* <Signup/> */}
      </ChakraProvider>
      </BrowserRouter>
     </div>
    // </div>
  );
}

export default App;
{/* <BrowserRouter><NavBar/> <AllRoutes/></BrowserRouter> */}