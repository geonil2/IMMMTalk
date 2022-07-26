import React, {useEffect, useRef} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Chats from "../pages/chats";
import PrivateRoute from "../components/privateRoute";
import {useAppSelector} from "../redux/store";

const Main = () => {
  const { data } = useAppSelector(state => state.authSlice);
  const navigate = useNavigate();

  useEffect(() => {
    if (data.id) {
      navigate('/chats')
    }
  }, [data])

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center text-[#1b1b1b] bg-white dark:text-[#FFFFFF] dark:bg-[#1b1b1b]">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chats" element={<PrivateRoute path="/chats" element={<Chats />}/>} />
      </Routes>
    </main>
  );
};

export default Main;
