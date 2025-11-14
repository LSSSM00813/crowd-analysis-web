import "./footer.scss";
import FooterItem, { type FooterItemProps } from "./FooterItem";

interface FooterProps {
  items: FooterItemProps[];
}


const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer">
      {props.items?.map((item: FooterItemProps) => (
        <FooterItem
          key={item.title}  // keyをしないとWarningが出るため追加
          title={item.title}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default Footer;
