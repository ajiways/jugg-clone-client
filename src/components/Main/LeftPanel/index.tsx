import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeResource } from "../../../store/reducers/ActionCreators";
import styles from "./LeftPanel.module.css";
import ResourceItem from "./ResourceItem";

export interface LeftPanelProps {}

const LeftPanel = () => {
   const dispatch = useAppDispatch();
   const { resources } = useAppSelector((state) => state.objectsReducer);
   const { selectedResource, currentLocation } = useAppSelector(
      (state) => state.userReducer
   );

   return (
      <div className={styles.leftpanel}>
         <div>
            {resources &&
               resources.map((res) => {
                  if (res.location.id === currentLocation?.id) {
                     return (
                        <ResourceItem
                           res={res}
                           isActive={selectedResource}
                           OnClick={() => dispatch(changeResource(res))}
                           key={res.id}
                        />
                     );
                  } else {
                     return false;
                  }
               })}
         </div>
      </div>
   );
};

export default LeftPanel;
