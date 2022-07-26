import React, {useEffect} from 'react';
import {Player} from "@lottiefiles/react-lottie-player";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {setTheme} from "../redux/slices/themeSlice";
import Logo from "../components/logo/logo";

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.themeSlice.theme);

  return (
    <header className="fixed w-full h-[50px] flex justify-between border-b overflow-hidden px-5 dark:bg-[#1b1b1b]">
      <h1 className="flex justify-center items-center">
        <Logo width="w-10" animation={false} />
      </h1>
      <div className="flex justify-center items-center">
        <svg onClick={() => (dispatch(setTheme(`${theme === 'light' ? 'dark' : 'light'}`)))} xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 1920 980" opacity="1" className="translate-x-1/2 cursor-pointer">
          <g transform="matrix(0.6690531969070435,-0.41572022438049316,0.41572022438049316,0.6690531969070435,500,500)">
            {theme === 'light'
              ?
              <path fill="rgb(255,202,36)" fillOpacity="1" d=" M345.97900390625,0 C345.97900390625,-191.07899475097656 191.0800018310547,-345.97900390625 0,-345.97900390625 C-191.0780029296875,-345.97900390625 -345.9779968261719,-191.07899475097656 -345.9779968261719,0 C-345.9779968261719,191.07899475097656 -191.0780029296875,345.97900390625 0,345.97900390625 C191.0800018310547,345.97900390625 345.97900390625,191.07899475097656 345.97900390625,0z"></path>
              :
              <path fill="rgb(255,255,255)" fillOpacity="1" d=" M-123.74800109863281,5.078000068664551 C-123.74800109863281,-186.00100708007812 0.25300005078315735,-346.3479919433594 0,-345.97900390625 C-177.4810028076172,-353.9649963378906 -345.9779968261719,-191.07899475097656 -345.9779968261719,0 C-345.9779968261719,191.07899475097656 -197.79299926757812,329.0429992675781 0,345.97900390625 C2.8389999866485596,346.22198486328125 -123.74800109863281,196.15699768066406 -123.74800109863281,5.078000068664551z"></path>
            }
          </g>
        </svg>
      </div>
    </header>
    );
};

export default Header;
