import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FacebookProvider } from './contexts/facebook-context';
import { Header } from './layout/header';

function App() {

  const [access_token, setAccessToken] = useState<string>('')
  const [hidden, setHidden] = useState<boolean>(false)

  useEffect(() => {
    let token = localStorage.getItem('access_token')?.toString() || '';
    if (token) {
      setHidden(true)
      setAccessToken(token)
    }
  }, [])

  const handleInit = () => {
    localStorage.setItem('access_token', access_token)
    setHidden(true)
  }

  const test = () => {
    axios.get(`https://graph.facebook.com/me?fields=id,name&access_token=${access_token}`).then(response => {
      console.log(response.data)
    })
  }

  return (
    <FacebookProvider value={{ access_token: access_token }}>
      <Header />
      <div className="app">
        <div className="fixed inset-0 bg-gray-800 w-screen h-screen" hidden={hidden}>
          <input type="text" onChange={(e: any) => setAccessToken(e.target.value)} defaultValue={access_token} />
          <button onClick={handleInit}>Init</button>
        </div>
        <button onClick={test}>Test</button>
      </div>
    </FacebookProvider>
  );
}

export default App;
