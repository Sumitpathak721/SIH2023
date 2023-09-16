import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importing Oauth
import Oauth from "./Oauth.js";

// Importing routes
import Auth from './Pages/Auth/Auth.js';
import Verify from './Pages/Auth/verify.js';
import ResetPassword from './Pages/Auth/ResetPassword.js';


function MainRoutes(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/verify/:UserID/ResetPassword" element={<ResetPassword />} />
        <Route path="/verify/:UserID" element={<Verify />} />
        <Route path="/*" element={<AppRoutes/>}/>
        {/* your all pages route routes */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}
function AppRoutes() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
        Oauth(token)
        .then((result) => {
          setUserInfo(result);
        })
        .catch((error) => {
          // Handle error if needed
          console.log(error);
        });
    }
  
  }, []);

  return (
    <div>
      
        
        
          <Routes>
            {/* <Route path="/verify/:UserID/ResetPassword" element={<ResetPassword />} /> */}
            {/* <Route path="/verify/:UserID" element={<Verify />} /> */}
            <Route path="/" element={<h1>Home Page</h1>} />
            {userInfo && (
              <>
                <Route path="/profile" element={<h1>Profile</h1>} />
              </>
            )}
            <Route path="/auth" element={<Auth />} />
            <Route path="/*" element={<h1>404 page not found</h1>}/>
          </Routes>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainRoutes/>);