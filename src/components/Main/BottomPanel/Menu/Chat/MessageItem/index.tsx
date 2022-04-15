import { Message } from "../../../../../interfaces/message.interface";
import styles from "./MessageItem.module.css";

export interface MessageItemProps {
   message: Message;
}

const MessageItem = ({ message }: MessageItemProps) => {
   return (
      <div className={styles.messageitem}>
         <div className={styles.itemTop}>
            <div>{message.author}</div>
            <div>{message.date}</div>
         </div>
         <div className={styles.itemBot}>
            <div>{message.content}</div>
         </div>
      </div>
   );
};

export default MessageItem;
