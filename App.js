import React, { useState } from 'react';
import Login from './components/Login/login'

 

export default function App() {
  const [user, setUser] = useState(null);

 

 
  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />
  }
}