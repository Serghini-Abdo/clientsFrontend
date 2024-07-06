import React from 'react';
import { useSelector } from 'react-redux';
import authSlice from '../features/auth/authSlice';

const Home = () => {
  const {user}=useSelector((st)=>st.auth)
  console.log(user);
  return (
    <div>
      <h1>Home</h1>
      {user.payload}

    </div>
  );
};

export default Home;
