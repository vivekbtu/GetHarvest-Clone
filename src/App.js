
import './App.css';
// import Home from './Routes/Home';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
// import NavBar from './Components/Navbar';
// import AllRoutes from './Routes/AllRoutes';
import Home from './Routes/Home';
import Navbar from './Routes/Navbar';

function App() {
  return (
    <div className="App">
      {/* <div className="App-header" > */}
      <BrowserRouter>
      <ChakraProvider>
        {/* <Navbar/> */}
        <Home/>
      </ChakraProvider>
      </BrowserRouter>
     </div>
    // </div>
  );
}

export default App;
{/* <BrowserRouter><NavBar/> <AllRoutes/></BrowserRouter> */}