import React, { useState, useCallback, useEffect } from 'react';
import { Card, Input, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from 'app/hooks/useAuth';

export default function Login() {
  const history = useHistory();
  const { login, apiKey } = useAuth();

  const [key, setKey] = useState<string>('');

  const handleChange = useCallback((event) => {
    const { name, value } = event.currentTarget;
    if (name === 'apiKey') {
      setKey(value);
    }
  }, [key]);

  // const getCurrentUser = () => useLazyLoadQuery(
  //   graphql`
  //     query LoginQuery {
  //       currentUser {
  //         firstName
  //         lastName
  //       }
  //     }
  //   `, {

  //   },
  // );

  const handleLogin = () => {
    if (key.length > 0) {
      const result = login({ apiKey: key });
      console.log(result);
      toast.success('API KEY is valid!');
    } else {
      toast.error('Fill out all input fields!');
    }
  };

  // const handleLogin = useCallback(async () => {
  //   if (key.length > 0) {
  //     const result = await login({ apiKey: key });
  //     console.log(result);
  //     toast.success('API KEY is valid!');
  //     getCurrentUser();
  //   } else {
  //     toast.error('Fill out all input fields!');
  //   }
  // }, [history, key]);

  return (
    <div className="login-container">
      <Card className="login-card">
        <h3 className="login-title">Sign in to Flexhire</h3>
        <Input className="login-input" type="text" placeholder="Input your api key" value={key} name="apiKey" onChange={handleChange} autoFocus />
        <Button className="login-btn" onClick={() => handleLogin()}>Login</Button>
      </Card>
    </div>
  );
}
