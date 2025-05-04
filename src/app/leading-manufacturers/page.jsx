import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "../history/history.module.css";

export default function LeadingManufacturers() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>Leading Manufacturers Of Cardiac Pacemakers</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            The global pacemaker market is dominated by a few major companies.
            The largest player by far is Medtronic, followed by Abbott
            Laboratories (incorporating St. Jude Medical), Boston Scientific,
            BIOTRONIK, and MicroPort. (Other
            companies like LivaNova and smaller firms hold minor shares.) For
            example, a recent market analysis shows Medtronic leading the U.S.
            market, with Abbott and Boston Scientific in distant second and
            third. These five companies together
            account for the overwhelming majority of pacemaker sales. (Pie
            chart: Medtronic ~50%, Abbott ~20%, Boston Scientific ~15%,
            BIOTRONIK ~8%, MicroPort ~5%, others ~2%, by recent estimates.)
          </p>
        </div>
      </div>
    </div>
  );
}
