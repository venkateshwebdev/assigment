import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import UserDataContext from './Context/usersDataContext';

function App() {
  const [userData,setUserData] = useState([])
  const [isLoading,setIsLoading] = useState(false)
    return (
    <div className="App">
      <UserDataContext.Provider value={{userData,setUserData,isLoading,setIsLoading}}>
      <Navbar />
      <Home />
      </UserDataContext.Provider> 
    </div>
  );
}

export default App;
