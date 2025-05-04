import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "../history/history.module.css";

export default function Types() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>Risks and Complications</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            Pacemaker implantation is generally safe, but complications can
            occur. According to the Mayo Clinic, potential risks include:
          </p>
          <p>
            <strong>1. Infection: </strong> At the implantation site or along
            leads. Device infections (pocket or endovascular) require
            antibiotics and often complete hardware removal.
          </p>
          <p>
            <strong>2. Hematoma or Bleeding: </strong> Swelling or bruising
            around the device pocket, especially in anticoagulated patients.
          </p>
          <p>
            <strong>3. Lead Displacement or Perforation:</strong> The lead tip
            may dislodge from the myocardium or, rarely, perforate the heart
            wall. Improper lead position can cause “loss of capture” (failure to
            pace the heart).
          </p>
          <p>
            <strong>4. Pneumothorax: </strong> Accidental lung puncture during
            lead insertion under the collarbone can cause a collapsed lung.
            (This is usually detected immediately and treated.)
          </p>
          <p>
            <strong>5. Vascular or Nerve Injury: </strong> Damage to subclavian
            vessels or brachial plexus can occur during venous access or pocket
            creation.
          </p>
          <p>
            <strong>6. Device Malfunction: </strong> Rarely, the generator or
            lead circuitry fails (e.g. battery defect, insulation fracture),
            necessitating replacement. Device and lead performance is rigorously
            tested before discharge.
          </p>
          <p>
            <strong>7. Pacemaker Syndrome: </strong> In some patients
            (especially with single-chamber devices), loss of AV synchrony can
            cause dizziness or hypotension. Dual-chamber or AV-sequential pacing
            is used to minimize this. Most complications occur perioperatively;
            once healed, pacemaker therapy is generally life-enhancing.
            Continual follow-up ensures early management of any issues.
          </p>
        </div>
      </div>
    </div>
  );
}
