import React, { useState } from 'react';
import { exchangeToken } from './api';
import Button from './components/button';
import Input from './components/input';
import Label from './components/label';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [client_id, set_client_id] = useState<string>('')
  const [client_secret, set_client_secret] = useState<string>('')
  const [fb_exchange_token, set_fb_exchange_token] = useState<string>('')
  const [access_token, set_access_token] = useState<string>()

  const handleOk = async () => {
    if (!client_id) {
      return toast('Please input client id!');
    }
    if (!client_secret) {
      return toast('Please input client secret!');
    }
    if (!fb_exchange_token) {
      return toast('Please input short live token!');
    }
    var response = await exchangeToken({
      client_id,
      client_secret,
      fb_exchange_token
    })
    if (response.data.error) {
      toast(`Error: ${response.data.error}`, {type:"error"});
    }
    set_access_token(response.data.access_token);
  }

  return (
    <div className='app'>
      <div className='container'>
        <Label>Client ID:</Label>
        <Input onChange={(e: any) => set_client_id(e.target.value)} />
        <Label>Client Scecret:</Label>
        <Input onChange={(e: any) => set_client_secret(e.target.value)} />
        <Label>Short Live Token</Label>
        <Input onChange={(e: any) => set_fb_exchange_token(e.target.value)} />
        <div className='mb-4'>
          <Button onClick={handleOk}>Exchange token</Button>
        </div>
        <Label>Result</Label>
        <textarea className='form-control'>{access_token}</textarea>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        icon="🚀"
      />
    </div>
  );
}

export default App;
