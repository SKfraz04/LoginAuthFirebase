import Navbar from "../Components/navbar";
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}


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