import { FC } from "react"
import styles from "./RatingItem.module.css"

export interface RatingItemProps {

}

const RatingItem: FC<RatingItemProps> = ({}: RatingItemProps) => {
    return (
        <div className={styles.ratingitem}>
     
        </div>
    );
};
   
export default RatingItem;
