import styles from "./RatingItem.module.css";

export interface RatingItemProps {
   login: string;
   mastery: number;
}

const RatingItem = ({ login, mastery }: RatingItemProps) => {
   return (
      <div className={styles.ratingitem}>
         <div>Игрок: {login}</div>
         <div>Мастерство: {mastery}</div>
      </div>
   );
};

export default RatingItem;
