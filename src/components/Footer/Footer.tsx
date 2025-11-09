import "./footer.scss";
import FooterItem from "./FooterItem";
import { BsClipboardData } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { WiCloudy } from "react-icons/wi";

const Footer = () => {
  return (
    <div className="footer">
      <FooterItem title="混雑状況" icon={<WiCloudy />} />
      <FooterItem title="混雑データ" icon={<BsClipboardData />} />
      <FooterItem title="混雑マップ" icon={<CiMap />} />
      <FooterItem title="管理" icon={<MdManageAccounts />} />
    </div>
  );
};

export default Footer;
