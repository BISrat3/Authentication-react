import React, {useState, useEffect, useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from'./components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  const ctx =useContext(AuthContext)
  // useEffect(() => {

  //   const storeUserLoggedInformation = localStorage.getItem('isLoggedIn')

  //   if(storeUserLoggedInformation === '1'){
  //     setIsLoggedIn(true)
  //   }
  // }, [])

  // const loginHandler = (email, password)=>{
  //   // We should check email and password
  //   // But it's just a dummy demo 
  //   localStorage.setItem('isLoggedIn', '1')
  //   setIsLoggedIn(true)
  // }

  // const logoutHandler = () =>{
  //   localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false)
  // }
  return (
    // <AuthContext.Provider value ={  
    //    {isLoggedIn : isLoggedIn,
    //     onLogout: logoutHandler
    // }}>
        // </AuthContext.Provider>
    <React.Fragment>
      <MainHeader/>
        <main>
          {!ctx.isLoggedIn && <Login/>}
          {!ctx.isLoggedIn && <Home/>}
        </main>
    </React.Fragment>
  );
}

export default App;
