import Image from "next/image";
import Styles from "./navBar.module.css";
import HamIcon from "../../../../public/HamBurger.svg";

export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <h2 className={Styles.brandName}>Cardiac Pacemakers - A Case Study</h2>
      <div className={Styles.hamBtn}>
        <Image
          src={HamIcon}
          alt="Settings Icon"
          width={0}
          height={0}
          sizes="100vw"
          className={Styles.hamIcon}
        />
      </div>
    </nav>
  );
}
