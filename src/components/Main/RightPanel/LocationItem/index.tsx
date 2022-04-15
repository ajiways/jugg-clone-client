import { Location } from "../../../interfaces/location.interface";
import styles from "./LocationItem.module.css";

export interface LocationItemProps {
   loc: Location;
   isActive: Location | null;
   OnClick?: () => void;
   disabled: boolean;
}

const LocationItem = ({
   loc,
   isActive,
   OnClick,
   disabled,
}: LocationItemProps) => {
   const rootClasses = [styles.locationitem];

   if (isActive?.id === loc.id) {
      rootClasses.push(styles.active);
   }

   if (disabled) {
      rootClasses.push(styles.disabled);
   }

   return (
      <div
         onClick={() => OnClick && OnClick()}
         className={rootClasses.join(" ")}
      >
         {loc.title}
      </div>
   );
};

export default LocationItem;
