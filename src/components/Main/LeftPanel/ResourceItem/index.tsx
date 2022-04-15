import { Resource } from "../../../interfaces/resource.interface";
import styles from "./ResourceItem.module.css";

export interface ResourceItemProps {
   res: Resource;
   OnClick: () => void;
   isActive: Resource | null;
}

const ResourceItem = ({ res, OnClick, isActive }: ResourceItemProps) => {
   const rootClasses = [styles.resourceitem];

   if (isActive?.id === res.id) {
      rootClasses.push(styles.active);
   }

   return (
      <div onClick={() => OnClick()} className={rootClasses.join(" ")}>
         {res.title}
      </div>
   );
};

export default ResourceItem;
