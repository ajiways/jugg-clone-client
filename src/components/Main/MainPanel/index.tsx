import MainBottom from "./MainBottom";
import MainTop from "./MainTop";

export interface MainPanelProps {
   className: string;
}

const MainPanel = ({ className }: MainPanelProps) => {
   return (
      <div className={className}>
         <MainTop />
         <MainBottom />
      </div>
   );
};

export default MainPanel;
