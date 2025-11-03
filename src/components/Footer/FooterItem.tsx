import { IconContext } from "react-icons";
import "./footerItem.scss";

interface FooterItemProps {
  title: string;
  icon: React.ReactNode;
}

const FooterItem = (props: FooterItemProps) => {
  return (
    <div className="footer-item">
      <IconContext.Provider value={{ size: "30px" }}>
        {props.icon}
      </IconContext.Provider>
      <div className="title">{props.title}</div>
    </div>
  );
};
export default FooterItem;
