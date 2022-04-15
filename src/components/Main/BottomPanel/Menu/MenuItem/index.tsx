import { FC, useState } from "react";
import { Modal } from "../../../../UI";
import styles from "./MenuItem.module.css";

export interface MenuItemProps {
   title: string;
   disabled?: boolean;
   OnClick?: VoidFunction;
}

const MenuItem: FC<MenuItemProps> = ({
   title,
   disabled,
   children,
   OnClick,
}) => {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <>
         <div
            onClick={() => {
               !disabled && setIsVisible(true);
               !disabled && OnClick && OnClick();
            }}
            className={styles.menuItem}
         >
            {title}
         </div>
         <Modal visible={isVisible} setVisible={setIsVisible}>
            <div className={styles.title}>{title}</div>
            {children}
         </Modal>
      </>
   );
};

export default MenuItem;
