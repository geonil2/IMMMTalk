import React, {useEffect, useState} from 'react';
import {AuthService, loginData} from "../services/authService";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useNavigate} from "react-router-dom";
import Logo from "../components/logo/logo";

const SignIn = () => {
  const [loginData, setLoginData] = useState<loginData>({ email: '', password: '' });
  const [btnHover, setBtnHover] = useState(0);
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector(state => state.authSlice);
  const navigate = useNavigate();

  useEffect(() => {
    !data.id && loading === false ? setLoginData({ email: '', password: '' }) : navigate('/chats');
  }, [data])

  return (
    <section className="sm:w-[400px] w-[250px] h-1/2 flex flex-col justify-center items-center bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)] hover:drop-shadow-none dark:bg-[#1b1b1b]">
      <div className="flex justify-center items-center pb-10">
        <Logo width="w-3/5" animation={true} />
      </div>
      <div className="w-full">
        <div className=" flex justify-center items-center pb-2">
          <label className="w-[130px]" htmlFor="email">E-MAIL</label>
          <input
            id="email"
            type="email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae] dark:border-[#ffffff]"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="w-[130px]" htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae] dark:border-[#ffffff]"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => dispatch(AuthService.signIn(loginData))}
            onMouseOver={() => setBtnHover(1)}
            onMouseLeave={() => setBtnHover(0)}
            className={`${btnHover === 1 ? 'w-2/3' : 'w-1/2'} h-10 text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
          >Sign In</button>
          <button
            onClick={() => navigate('/signup')}
            onMouseOver={() => setBtnHover(2)}
            onMouseLeave={() => setBtnHover(0)}
            className={`${btnHover === 2 ? 'w-2/3' : 'w-1/2'} h-10 text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
          >Sign Up</button>
        </div>
      </div>
        {/*<button onClick={() => dispatch(signOut())}>Sign out</button>*/}
        {/*<div>{loading ? 'loading' : null}</div>*/}
        {/*<div>{data ? data.username : null}</div>*/}
        {/*<div>{error ? error : null}</div>*/}
    </section>
  );
};

export default SignIn;
