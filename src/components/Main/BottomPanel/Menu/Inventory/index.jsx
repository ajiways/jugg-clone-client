import { FC } from "react"
import styles from "./Inventory.module.css"

export interface InventoryProps {

}

const Inventory: FC<InventoryProps> = ({}: InventoryProps) => {
    return (
        <div className={styles.inventory}>
     
        </div>
    );
};
   
export default Inventory;
