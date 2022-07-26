import React, {useState} from 'react';
import {AuthService, signUpData} from "../services/authService";
import {useAppDispatch} from "../redux/store";
import {useNavigate} from "react-router-dom";
import Logo from "../components/logo/logo";

const SignUp = () => {
  const [signUpData, setSignUp] = useState<signUpData>({ email: '', password: '', userName: '' });
  const [btnHover, setBtnHover] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <section className="sm:w-[400px] w-[250px] h-1/2 flex flex-col justify-center items-center bg-white duration-200 p-5 drop-shadow-[0_35px_35px_rgba(25,93,174,1)] hover:drop-shadow-none  dark:bg-[#1b1b1b]">
      <div className="flex justify-center items-center pb-10">
        <Logo width="w-3/5" animation={true} />
      </div>
      <div className="w-full">
        <div className=" flex justify-center items-center pb-2">
          <label className="w-[130px]" htmlFor="email">E-MAIL</label>
          <input
            id="email"
            type="text"
            value={signUpData.email}
            onChange={(e) => setSignUp({ ...signUpData, email: e.target.value })}
            className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae] dark:border-[#ffffff]"
          />
        </div>
        <div className="flex justify-center items-center pb-2">
          <label className="w-[130px]" htmlFor="password">PASSWORD</label>
          <input
            id="password"
            type="text"
            value={signUpData.password}
            onChange={(e) => setSignUp({ ...signUpData, password: e.target.value })}
            className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae] dark:border-[#ffffff]"
          />
        </div>
        <div className="flex justify-center items-center">
          <label className="w-[130px]" htmlFor="username">USERNAME</label>
          <input
            id="username"
            type="text"
            value={signUpData.userName}
            onChange={(e) => setSignUp({ ...signUpData, userName: e.target.value })}
            className="w-full text-sm bg-transparent border border-solid border-[#1B1B1B] p-1 focus:border-[#195dae] dark:border-[#ffffff]"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => dispatch(AuthService.signUp(signUpData))}
            onMouseOver={() => setBtnHover(1)}
            onMouseLeave={() => setBtnHover(0)}
            className={`${btnHover === 1 ? 'w-2/3' : 'w-1/2'} h-10 text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
          >Sign Up</button>
          <button
            onClick={() => navigate('/')}
            onMouseOver={() => setBtnHover(2)}
            onMouseLeave={() => setBtnHover(0)}
            className={`${btnHover === 2 ? 'w-2/3' : 'w-1/2'} h-10 flex justify-center items-center text-[#195dae] border border-solid border-[#195dae] rounded-xl duration-200 mt-5 ml-1 hover:bg-[#195dae] hover:text-white`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" className="mr-2" fill={`${btnHover === 2 ? '#ffffff' : '#195dae'}`} viewBox="0 0 448 512">
            <path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/>
            </svg>
            <span>Home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
