import { FC } from "react"
import styles from "./Rating.module.css"

export interface RatingProps {

}

const Rating: FC<RatingProps> = ({}: RatingProps) => {
    return (
        <div className={styles.rating}>
     
        </div>
    );
};
   
export default Rating;
