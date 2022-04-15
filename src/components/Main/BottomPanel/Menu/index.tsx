import { emitGetRatingList } from "../../../../store/reducers/ActionCreators";
import Chat from "./Chat";
import styles from "./menu.module.css";
import MenuItem from "./MenuItem";
import Rating from "./Rating";

const Menu = () => {
   return (
      <div className={styles.menu}>
         <MenuItem
            OnClick={() => {
               emitGetRatingList();
            }}
            title="Рейтинг"
         >
            <Rating />
         </MenuItem>
         <MenuItem title="Чат">
            <Chat />
         </MenuItem>
         <MenuItem disabled title="В разработке" />
         <MenuItem disabled title="В разработке" />
         <MenuItem disabled title="В разработке" />
         <MenuItem disabled title="В разработке" />
         <MenuItem disabled title="В разработке" />
      </div>
   );
};

export default Menu;
