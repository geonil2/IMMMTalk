import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from './redux/store';
import Header from "./layouts/header";
import Main from "./layouts/main";
import {getTheme} from "./redux/slices/themeSlice";

function App() {
  const [employerId, setEmployerId] = useState(0);
  const dispatch = useAppDispatch();
  const { loading, error, data } = useAppSelector(state => state.authSlice);

  useEffect(() => {
    dispatch(getTheme());
  }, [])

  return (
      <>
      <Header />
      <Main />
      </>
  );
}

export default App;
