import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "../history/history.module.css";

export default function KeyComponents() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>Key Components Of Cardiac Pacemakers</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            <strong>A modern pacemaker system comprises:</strong>
          </p>
          <p>
            <strong>1. Pulse Generator: </strong> The main body (implanted in a
            subcutaneous chest pocket) contains the battery and electronics. It
            is encased in a biocompatible titanium housing. Inside is a
            lithium-iodide or similar long-life battery and microcircuitry that
            generates electrical pulses at programmed times. The pulse generator
            controls the pacing parameters (amplitude, duration, timing) and
            also senses incoming heart signals. For example, “pulse generators
            consist of a titanium body which contains a lithium iodine cell”.
          </p>
          <p>
            <strong>2. Leads and Electrodes: </strong> Flexible, insulated wires (usually 1–2 leads for single- or dual-chamber, 3 for CRT) connect the generator to the heart. Each lead has a tip electrode (cathode) and ring electrode (anode) at its end. The leads are threaded through veins into the heart’s chambers (typically via subclavian or cephalic veins) and fixed in place, either actively (screw-in helix) or passively (tined anchor). The electrodes at the tip of each lead deliver the pacing pulse to the myocardium and also sense intrinsic cardiac electrical activity.
          </p>
        </div>
      </div>
    </div>
  );
}
