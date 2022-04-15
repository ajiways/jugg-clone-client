import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Modal.module.css";

export interface ModalProps {
   visible: boolean;
   setVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ visible, setVisible, children }) => {
   const rootClasses = [styles.myModal];

   if (visible) {
      rootClasses.push(styles.active);
   }

   return (
      <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
         <div
            className={styles.myModalContent}
            onClick={(e) => e.stopPropagation()}
         >
            {children}
         </div>
      </div>
   );
};

export default Modal;
