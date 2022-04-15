import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../../../../hooks/redux";
import { emitNewMessage } from "../../../../../store/reducers/ActionCreators";
import styles from "./Chat.module.css";
import MessageItem from "./MessageItem";

const Chat = () => {
   const { messages, user } = useAppSelector((state) => state.userReducer);
   const [message, setMessage] = useState("");
   const chatParent = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const domNode = chatParent.current;
      if (domNode) {
         domNode.scrollTop = domNode.scrollHeight;
      }
   }, [messages]);

   const createMessage = () => {
      const date = new Date(Date.now());

      user &&
         emitNewMessage({
            author: user.login,
            content: message,
            date: date.toLocaleString("ru-RU", {
               hour: "2-digit",
               minute: "2-digit",
               second: "2-digit",
            }),
         });
   };

   return (
      <div className={styles.chat}>
         <div id="msgKostyl" className={styles.messagesBox} ref={chatParent}>
            {messages.length ? (
               messages.map((msg) => {
                  return <MessageItem key={msg.id} message={msg} />;
               })
            ) : (
               <div> Сообщений нет </div>
            )}
         </div>
         <div className={styles.chatInputBox}>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  createMessage();
                  user && setMessage("");
               }}
            >
               <input
                  value={message}
                  onChange={(e) => {
                     e.target.value && setMessage(e.target.value);
                  }}
                  type="text"
                  className={styles.input}
                  placeholder="Отправить сообщение"
               />
            </form>
         </div>
      </div>
   );
};

export default Chat;
