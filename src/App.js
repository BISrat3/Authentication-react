import React, {useState, useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from'./components/MainHeader/MainHeader';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    const storeUserLoggedInformation = localStorage.getItem('isLoggedIn')

    if(storeUserLoggedInformation === '1'){
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password)=>{
    // We should check email and password
    // But it's just a dummy demo 
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () =>{
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler}>
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler}/>}
          {!isLoggedIn && <Home onLogin={logoutHandler}/>}
        </main>
      </MainHeader>
    </React.Fragment>
  );
}

export default App;
