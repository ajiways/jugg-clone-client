import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { startGather } from "../../../../store/reducers/ActionCreators";
import Strategies from "./Strategies";
import styles from "./MainBottom.module.css";

const MainBottom = () => {
   const dispatch = useAppDispatch();
   const { isGathering } = useAppSelector((state) => state.progressReducer);
   const { selectedResource, user } = useAppSelector(
      (state) => state.userReducer
   );

   return (
      <div className={styles.bottom}>
         <div className={styles.bottom_top}>
            {selectedResource ? (
               <>
                  <div>Название: {selectedResource.title}</div>
                  <div>Описание: {selectedResource.description}</div>
                  <div>
                     Минимальное мастерство: {selectedResource.masteryMin}
                  </div>
                  <div>
                     Шанс на сбор: {selectedResource.chanceToGather * 100}%
                  </div>
                  <div>
                     Время сбора: {100 / (1000 / selectedResource.timeToGather)}{" "}
                     секунд/ы.
                  </div>
               </>
            ) : (
               <div>Ресурс не выбран</div>
            )}
         </div>
         <div className={styles.bottom_mid}>
            <Strategies />
         </div>
         <div className={styles.bottom_bot}>
            {isGathering ? (
               <button disabled className={styles.bottom_btn}>
                  Повторить
               </button>
            ) : selectedResource ? (
               <button
                  onClick={() => {
                     user &&
                        dispatch(
                           startGather(
                              selectedResource,
                              user.fatigue,
                              user.login
                           )
                        );
                  }}
                  className={styles.bottom_btn}
               >
                  Повторить
               </button>
            ) : (
               <button className={styles.bottom_btn} disabled>
                  Повторить
               </button>
            )}
         </div>
      </div>
   );
};

export default MainBottom;
