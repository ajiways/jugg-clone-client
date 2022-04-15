import { useAppSelector } from "../../../../../hooks/redux";
import styles from "./Rating.module.css";
import RatingItem from "./RatingItem";

const Rating = () => {
   const { ratingList } = useAppSelector((state) => state.userReducer);

   return (
      <div className={styles.rating}>
         {ratingList.length ? (
            ratingList.map(({ login, currentMastery }) => {
               return <RatingItem login={login} mastery={currentMastery} />;
            })
         ) : (
            <div>В рейтинге никого нет</div>
         )}
      </div>
   );
};

export default Rating;
