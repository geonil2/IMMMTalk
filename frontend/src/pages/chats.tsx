import React, {useEffect} from 'react';
import ChatLists from "../components/chatLists";
import Chat from "../components/chat";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {ChatsService} from "../services/chatsService";

const Chats = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.authSlice);

  useEffect(() => {
    dispatch(ChatsService.getChats(data.id));
  }, [])

  return (
    <article className="w-full h-screen flex justify-center items-center md:p-10 md:pt-[90px] p-5 pt-[70px]">
      <ChatLists />
      <Chat />
    </article>
  );
};

export default Chats;
