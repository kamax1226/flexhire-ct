import React, { useState, useCallback } from 'react';
import { Card, Input, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import useAuth from 'app/hooks/useAuth';

const Login: React.FC = () => {
  const { login } = useAuth();

  const [key, setKey] = useState<string>('');

  const handleChange = useCallback((event) => {
    const { name, value } = event.currentTarget;
    if (name === 'apiKey') {
      setKey(value);
    }
  }, [key]);

  const handleLogin = () => {
    if (key.length > 0) {
      login({ apiKey: key });
      toast.success('API KEY is valid!');
    } else {
      toast.error('Fill out all input fields!');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h3 className="login-title">Sign in to Flexhire</h3>
        <Input className="login-input" type="text" placeholder="Input your api key" value={key} name="apiKey" onChange={handleChange} autoFocus />
        <Button className="login-btn" onClick={() => handleLogin()}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
