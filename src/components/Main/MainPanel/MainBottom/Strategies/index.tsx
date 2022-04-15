import { FC, useState } from "react";
import { useAppSelector } from "../../../../../hooks/redux";
import Strategy from "./Strategy";
import styles from "./Strategies.module.css";
import { changeSelectedStrategy } from "../../../../../store/reducers/ActionCreators";

export interface StrategiesProps {}

const Strategies: FC<StrategiesProps> = () => {
   const { currentStrategy } = useAppSelector((state) => state.userReducer);
   const [selected, setSelected] = useState(0);

   return (
      <div className={styles.strategies_box}>
         <Strategy
            id={1}
            setCurrent={changeSelectedStrategy}
            isActive={currentStrategy}
            setSelected={setSelected}
            selected={selected}
         />
         <Strategy
            id={2}
            setCurrent={changeSelectedStrategy}
            isActive={currentStrategy}
            setSelected={setSelected}
            selected={selected}
         />
         <Strategy
            id={3}
            setCurrent={changeSelectedStrategy}
            isActive={currentStrategy}
            setSelected={setSelected}
            selected={selected}
         />
      </div>
   );
};

export default Strategies;
