import logo from "../../assets/nukenzie.png";
import styleHeader from "../../style/header/styleHeader.module.scss";

export const Header = () => {
  return (
    <header className={styleHeader.header}>
      <div className={styleHeader.divLogo}>
        <img src={logo} alt="Logo" />
      </div>
    </header>
  );
};
