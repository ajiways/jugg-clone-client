import styles from "./BottomPanel.module.css";
import Menu from "./Menu";

const BottomPanel = () => {
   return (
      <div className={styles.bottompanel}>
         <Menu />
      </div>
   );
};

export default BottomPanel;
