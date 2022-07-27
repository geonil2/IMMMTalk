import React from 'react';
import { chat } from '../redux/slices/chatsSlice';
import TimeAgo from 'react-timeago';

const ChatThumbnail = ({ list } : {list: chat}) => {
  const date = new Date("2022-07-27T03:56:26.000Z");

  return (
    <li className="w-full flex justify-start items-center text-sm bg-white cursor-pointer py-2 px-3 md:mr-10 mb-2 duration-100 hover:drop-shadow-[0_2px_2px_rgba(25,93,174,0.5)]">
      <img
        src=""
        alt=""
        className="w-[50px] h-[50px] border border-solid border-[#1b1b1b] rounded-full mr-2"
      />
      <div className="w-full">
        <div className="w-[150px] font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">{list.title}</div>
        <div className="flex justify-between text-xs text-[#1b1b1b70] mt-2">
          <p className="w-[200px] overflow-hidden overflow-ellipsis whitespace-nowrap">{list.lastMessage}</p>
          <div className="w-[100px] text-end"><TimeAgo date={date} /></div>
        </div>
      </div>
    </li>
  );
};

export default ChatThumbnail;
