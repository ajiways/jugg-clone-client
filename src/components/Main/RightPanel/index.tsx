import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getIntoLocation } from "../../../store/reducers/ActionCreators";
import LocationItem from "./LocationItem";
import styles from "./RightPanel.module.css";

export interface RightPanelProps {}

const RightPanel: FC<RightPanelProps> = () => {
   const dispath = useAppDispatch();
   const { locations } = useAppSelector((state) => state.objectsReducer);
   const { currentLocation, user } = useAppSelector(
      (state) => state.userReducer
   );

   return (
      <div className={styles.rightpanel}>
         <div>
            {locations.map((loc) =>
               user!.mastery >= loc.masteryReq ? (
                  <LocationItem
                     loc={loc}
                     OnClick={() => {
                        dispath(getIntoLocation(loc));
                     }}
                     disabled={false}
                     isActive={currentLocation}
                     key={loc.id}
                  />
               ) : (
                  <LocationItem
                     loc={loc}
                     disabled={true}
                     isActive={currentLocation}
                     key={loc.id}
                  />
               )
            )}
         </div>
      </div>
   );
};

export default RightPanel;
