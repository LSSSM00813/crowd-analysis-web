import { IconContext } from "react-icons";
import "./footerItem.scss";

export interface FooterItemProps {
  title: string;
  icon: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const FooterItem = (props: FooterItemProps) => {
  return (
    <div className="footer-item" onClick={(event) => props.onClick?.(event)}>
      <IconContext.Provider value={{ size: "30px" }}>
        {props.icon}
      </IconContext.Provider>
      <div className="title">{props.title}</div>
    </div>
  );
};
export default FooterItem;
