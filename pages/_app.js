import React, { useState } from "react";
import Navbar from "../Components/navbar";
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";
import "../styles/navbar.css"


const MyApp = ({ Component, pageProps }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContextProvider value={{ isLoggedIn, handleLogout }}>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
};

export default MyApp;



// import "../styles/globals.css";
// import Navbar from "../Components/navbar";
// import { AuthContextProvider } from "../context/AuthContext";
// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <AuthContextProvider>
//       <Navbar>
//         <Component {...pageProps} />
//       </Navbar>
//     </AuthContextProvider>
//   );
// }

// export default MyApp;