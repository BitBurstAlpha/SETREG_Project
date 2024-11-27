import '../styles/globals.css';  // Global styles
import { useState } from 'react';  // Example hook import
import { SessionProvider } from 'next-auth/react';  // If using NextAuth.js for authentication

function MyApp({ Component, pageProps }) {
  // You can manage global state or perform other setup here
  const [theme, setTheme] = useState("light");

  return (
    <SessionProvider session={pageProps.session}>
      <div className={`theme-${theme}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;