import { FC, useEffect } from "react";
import { initRestore } from "../../../../gameLogic/fatigue.mechanic";
import { useAppSelector } from "../../../../hooks/redux";
import styles from "./MainTop.module.css";

export interface MainTopProps {}

const MainTop: FC<MainTopProps> = () => {
   const { progress, isSuccess, errorMessage } = useAppSelector(
      (state) => state.progressReducer
   );
   const { currentLocation, user } = useAppSelector(
      (state) => state.userReducer
   );

   useEffect(() => {
      user && initRestore(user.login);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div className={styles.top}>
         <div className={styles.top_right}>
            Гремлин
            <div className={styles.mastery_stat}>
               Мастерство: {user?.mastery}/{user?.masteryCap}
            </div>
         </div>
         <div className={styles.top_left}>
            <div className={styles.top_progress_bar}>
               <div
                  style={{ width: `${user?.fatigue}%` }}
                  className={styles.fatigue_progress_bar}
               ></div>
            </div>
            <div className={styles.top_progress_bar}>
               <div
                  style={{ width: `${progress}%` }}
                  className={styles.progress_bar_bar}
               ></div>
            </div>
            <div className={styles.top_location_preview}>
               {isSuccess === true && (
                  <div className={styles.success}>Успешно!!!</div>
               )}
               {isSuccess === false && (
                  <div className={styles.failure}>Провал...</div>
               )}
               {errorMessage && (
                  <div className={styles.failure}>{errorMessage}</div>
               )}
               <div>{currentLocation?.title}</div>
               <div>{currentLocation?.description}</div>
               <div className={styles.player_stats}></div>
            </div>
         </div>
      </div>
   );
};

export default MainTop;
