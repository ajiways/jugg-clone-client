import styles from "./MenuItem.module.css";

export interface MenuItemProps {
   title: string;
}

const MenuItem = ({ title }: MenuItemProps) => {
   return <div className={styles.menuItem}>{title}</div>;
};

export default MenuItem;
