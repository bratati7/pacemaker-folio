import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "../history/history.module.css";

export default function Types() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>Recent Advancements In Cardiac Pacemakers</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            <strong>
              Recent years have seen major innovations in pacemaker technology:
            </strong>
          </p>
          <p>
            <strong>1. Leadless Devices: </strong> As noted, fully implantable
            leadless pacemakers (e.g. Medtronic’s Micra) are now widely used for
            single-chamber pacing. They eliminate lead-related complications and
            are tiny enough to implant via catheter. Medtronic and other firms
            have even developed dual-chamber and “CRT-like” leadless systems
            under development.
          </p>
          <p>
            <strong>2. MRI-Conditional Pacemakers: </strong> Many modern
            pacemakers are now MRI-safe under specific conditions, allowing
            patients to undergo MRI scans that were previously contraindicated.
            Device algorithms and shielding have improved to reduce interference
            from strong magnetic fields.
          </p>
          <p>
            <strong>3. Rate-Responsive and Sensing Enhancements: </strong> New sensors (accelerometers, minute ventilation sensors, etc.) allow pacemakers to adjust pacing rates more physiologically during exercise or stress. Some systems can detect myocardial contractility or respiratory rate to fine-tune pacing.
          </p>
          <p>
            <strong>4. Remote Monitoring & Connectivity: </strong> Advanced pacemakers now feature wireless telemetry. Patients’ devices automatically transmit rhythm and device data (battery status, lead integrity, arrhythmia episodes) to physicians via home-monitoring networks. This allows early detection of issues without in-person checks. Some companies are exploring smartphone apps to display pacemaker data or to use phone motion sensors for activity tracking.
          </p>
          <p>
            <strong>5. Extended Battery and Miniaturization: </strong> Battery chemistry and electronics continue to improve, lengthening device life (often 10–15 years in modern devices) and allowing ever-smaller generators. Researchers are also investigating energy-harvesting methods (e.g. body-motion power) for future pacing.
          </p>
        </div>
      </div>
    </div>
  );
}
