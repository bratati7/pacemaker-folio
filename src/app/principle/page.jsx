import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "../history/history.module.css";

export default function Principle() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>Working Princple Of Cardiac Pacemakers</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            A pacemaker continuously monitors the heart’s electrical activity
            and delivers pacing pulses only when needed. The device is
            programmed to a specific mode (e.g. VVI, DDD, etc.) and rate
            parameters. If the intrinsic heart rate drops below a set threshold
            (or if there is a failure of an atrial or ventricular beat), the
            pacemaker’s battery-driven pulse generator emits a timed electrical
            impulse. This impulse travels through the leads to the myocardial
            tissue, depolarizing the heart muscle and causing it to contract.
            Modern pacemakers are usually demand devices: they “sense” the
            heart’s own beats and inhibit pacing if an intrinsic beat is
            detected. Some pacemakers also include activity or
            physiologic sensors (e.g. accelerometers) to provide rate-responsive
            pacing – automatically increasing the pacing rate during exercise to
            mimic a natural heartbeat rise. Thus, a pacemaker essentially steps
            in when it detects bradycardia or missed beats, ensuring a minimum
            heart rate. Mayo Clinic notes that a pacemaker will only send
            impulses when the heart is too slow or irregular.
          </p>
        </div>
      </div>
    </div>
  );
}
