import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../../../../../hooks/redux";
import styles from "./Strategy.module.css";

export interface StrategyProps {
   isActive: number | null;
   setCurrent: (data: { id: number; login: string }) => void;
   id: number;
   setSelected: Dispatch<SetStateAction<number>>;
   selected: number;
}

const Strategy = ({
   isActive,
   setCurrent,
   id,
   setSelected,
   selected,
}: StrategyProps) => {
   const user = useAppSelector((state) => state.userReducer.user);
   const rootClasses = [styles.strategy];

   if (isActive === id) {
      rootClasses.push(styles.active_strategy);
   }

   if (selected === id) {
      rootClasses.push(styles.selected);
   }

   return (
      <div
         onClick={() => {
            user && setCurrent({ id, login: user.login });
            setSelected(id);
         }}
         className={rootClasses.join(" ")}
      ></div>
   );
};

export default Strategy;
