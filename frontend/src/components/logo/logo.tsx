import React, {useState} from 'react';
import {useAppSelector} from "../../redux/store";
//@ts-ignore
import styles from './logo.module.css';

const Logo = ({ width, animation } : { width: string, animation: boolean }) => {
  const theme = useAppSelector(state => state.themeSlice.theme);

  return (
    <svg className={`${width} ${animation ? styles.scene : null}`} viewBox="0 0 192 185" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <g className={animation ? styles.rotate1 : null}>
        <circle cx="98" cy="91" r="79.5" stroke="#195DAE" className={animation ? styles.circle1 : null}/>
        <circle cx="100" cy="89" r="79.5" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle1 : null} />
        <circle cx="96" cy="93" r="79.5" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle2 : null} />
        <circle cx="96" cy="95" r="79.5" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle3 : null} />
      </g>
      <g className={animation ? styles.rotate2 : null}>
        <path d="M175.5 92.5001C175.5 106.213 166.694 118.701 152.302 127.786C137.916 136.867 118.012 142.5 96 142.5C73.9883 142.5 54.0839 136.867 39.6984 127.786C25.3063 118.701 16.5 106.213 16.5 92.5001C16.5 78.7871 25.3063 66.2989 39.6984 57.214C54.0839 48.1331 73.9883 42.5001 96 42.5001C118.012 42.5001 137.916 48.1331 152.302 57.214C166.694 66.2989 175.5 78.7871 175.5 92.5001Z" stroke="#195DAE" className={animation ? styles.circle1 : null} />
        <path d="M177.5 90.5001C177.5 104.213 168.694 116.701 154.302 125.786C139.916 134.867 120.012 140.5 98 140.5C75.9883 140.5 56.0839 134.867 41.6984 125.786C27.3063 116.701 18.5 104.213 18.5 90.5001C18.5 76.7871 27.3063 64.2989 41.6984 55.214C56.0839 46.1331 75.9883 40.5001 98 40.5001C120.012 40.5001 139.916 46.1331 154.302 55.214C168.694 64.2989 177.5 76.7871 177.5 90.5001Z" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle2 : null} />
        <path d="M173.5 94.5001C173.5 108.213 164.694 120.701 150.302 129.786C135.916 138.867 116.012 144.5 94 144.5C71.9883 144.5 52.0839 138.867 37.6984 129.786C23.3063 120.701 14.5 108.213 14.5 94.5001C14.5 80.7871 23.3063 68.2989 37.6984 59.214C52.0839 50.1331 71.9883 44.5001 94 44.5001C116.012 44.5001 135.916 50.1331 150.302 59.214C164.694 68.2989 173.5 80.7871 173.5 94.5001Z" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle3 : null} />
      </g>
      <g className={animation ? styles.rotate3 : null}>
        <path d="M152.215 148.715C142.518 158.412 127.461 161.015 110.86 157.262C94.2669 153.511 76.2093 143.42 60.6447 127.855C45.08 112.291 34.9887 94.2331 31.2377 77.6398C27.4851 61.039 30.0885 45.9816 39.785 36.285C49.4816 26.5885 64.539 23.985 81.1398 27.7377C97.7331 31.4887 115.791 41.58 131.355 57.1447C146.92 72.7093 157.011 90.7669 160.762 107.36C164.515 123.961 161.912 139.018 152.215 148.715Z" stroke="#195DAE" className={animation ? styles.circle1 : null} />
        <path d="M155.043 148.715C145.347 158.412 130.289 161.015 113.689 157.262C97.0954 153.511 79.0378 143.42 63.4731 127.855C47.9084 112.291 37.8171 94.2331 34.0661 77.6398C30.3135 61.039 32.9169 45.9816 42.6134 36.285C52.31 26.5885 67.3675 23.985 83.9682 27.7377C100.562 31.4887 118.619 41.58 134.184 57.1447C149.748 72.7093 159.84 90.7669 163.591 107.36C167.343 123.961 164.74 139.018 155.043 148.715Z" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle2 : null} />
        <path d="M149.387 148.715C139.69 158.412 124.633 161.015 108.032 157.262C91.4385 153.511 73.3809 143.42 57.8162 127.855C42.2516 112.291 32.1603 94.2331 28.4093 77.6398C24.6566 61.039 27.26 45.9816 36.9566 36.285C46.6532 26.5885 61.7106 23.985 78.3113 27.7377C94.9047 31.4887 112.962 41.58 128.527 57.1447C144.092 72.7093 154.183 90.7669 157.934 107.36C161.687 123.961 159.083 139.018 149.387 148.715Z" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle3 : null} />
      </g>
      <g className={animation ? styles.rotate4 : null}>
      <circle cx="94" cy="93" r="79.5" stroke="#195DAE" className={animation ? styles.circle1 : null} />
      <circle cx="92" cy="91" r="79.5" stroke={`${theme === 'light' ? "#1B1B1B" : "#FFFFFF"}`} className={animation ? styles.circle2 : null} />
      <circle cx="90" cy="89" r="79.5" stroke="#195DAE" className={animation ? styles.circle3 : null} />
      </g>
    </svg>
  );
};

export default Logo;
