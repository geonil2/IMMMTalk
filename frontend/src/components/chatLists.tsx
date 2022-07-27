import React from 'react';
import {useAppSelector} from "../redux/store";
import {chatsSlice} from "../redux/slices/chatsSlice";
import ChatThumbnail from "./chatThumbnail";

const ChatLists = () => {
  const { loading, data, error } = useAppSelector(state => state.chatsSlice);

  return (
    <section className="sm:w-[400px] w-full h-full bg-white duration-200 drop-shadow-[0_10px_10px_rgba(25,93,174,0.5)] dark:bg-[#1b1b1b] p-5 md:mr-10">
      <div className="flex justify-start items-center w-full h-[35px] text-sm bg-[#1b1b1b10] rounded py-2 px-3 mb-5">
        <label htmlFor="search" className="w-4 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1b1b1b70">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
          </svg>
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="w-full text-sm bg-transparent p-1 focus:outline-none appearance-none"
        />
      </div>
      <ul className="h-[calc(100%_-_3.438rem)] scrollbar overflow-y-scroll">
        {data.map(list => (
          <ChatThumbnail list={list} />
        ))}
      </ul>
    </section>
  );
};

export default ChatLists;
// border-b border-solid border-[#1b1b1b70]
