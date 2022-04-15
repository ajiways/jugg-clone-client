import styles from "./menu.module.css";
import MenuItem from "./MenuItem";

const Menu = () => {
   return (
      <div className={styles.menu}>
         <MenuItem title="Рюкзак" />
         <MenuItem title="Магазин" />
         <MenuItem title="Рейтинг" />
         <MenuItem title="В разработке" />
         <MenuItem title="В разработке" />
         <MenuItem title="В разработке" />
         <MenuItem title="В разработке" />
      </div>
   );
};

export default Menu;
