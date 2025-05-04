import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "../history/history.module.css";

export default function Types() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>Types Of Cardiac Pacemakers</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            <strong>1. Single-Chamber Pacemaker:</strong> Stimulates either the
            right atrium or the right ventricle. Typically used when only one
            chamber needs pacing (for example, sinus node dysfunction without AV
            block). This device uses a single lead to deliver impulses
            to one chamber.
          </p>
          <p>
            <strong>2. Dual-Chamber Pacemaker:</strong> Has two leads – one in
            the right atrium and one in the right ventricle – allowing
            coordinated pacing of both chambers. Dual-chamber (AV
            sequential) pacemakers maintain atrio-ventricular synchrony and are
            indicated in sinus node disease or high-grade AV block, relieving
            symptoms of low heart rate due to either atrial or AV nodal
            dysfunction.
          </p>
          <p>
            <strong>3. Biventricular (CRT) Pacemaker:</strong> Also called a
            cardiac resynchronization device, it has three leads (right atrium,
            right ventricle, and a lead via the coronary sinus to the left
            ventricle). By pacing both ventricles simultaneously, it restores
            synchronized contraction in patients with heart failure and left
            bundle-branch block. CRT is indicated in patients with reduced
            ejection fraction and wide QRS complexes who remain symptomatic
            despite medical therapy.
          </p>
          <p>
            <strong> 4. Leadless Pacemaker:</strong> A miniaturized pacemaker
            (≈1 inch long) implanted entirely within the right ventricle, fixing
            directly to the heart wall. It provides single-chamber ventricular
            pacing (VVI mode) without transvenous leads. Leadless
            devices are indicated for patients who need ventricular pacing (for
            example, persistent atrial fibrillation with slow ventricular
            response) and can be especially useful for those at high risk of
            infection or with limited vascular access.
          </p>
        </div>
      </div>
    </div>
  );
}
