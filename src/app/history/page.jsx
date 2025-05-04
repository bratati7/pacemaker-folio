import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Styles from "./history.module.css";

export default function History() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.moreInfoHead}>
          <h1>History Of Cardiac Pacemakers</h1>
        </div>
        <div className={Styles.moreInfo}>
          <p>
            <strong>1. 1920s–1930s:</strong> The concept of cardiac pacing began
            with mechanical devices. In 1932, Albert Hyman built a hand-cranked
            “artificial pacemaker” to revive stopped hearts. His device coined
            the term “pacemaker”, though it used needles delivering small shocks
            rather than electronic leads.
          </p>
          <p>
            <strong>2. 1950s (Modern Era Begins):</strong> In 1952, Dr. Paul
            Zoll developed the first external mains-powered pacemaker. He
            successfully used an AC-powered device with chest electrodes to
            treat heart block and ventricular standstill pmc.ncbi.nlm.nih.gov
            pmc.ncbi.nlm.nih.gov . In 1956, Aubrey Leatham and Geoffrey Davies
            built the first demand pacemaker that could sense intrinsic beats
            pmc.ncbi.nlm.nih.gov .
          </p>
          <p>
            <strong>3. 1957 (Wearable Pacemaker):</strong> Earl Bakken
            (Medtronic co-founder) created the first battery-powered wearable
            pacemaker pmc.ncbi.nlm.nih.gov . This transistor-based device was
            light enough to be worn on the body, a breakthrough over
            wall-powered models.
          </p>
          <p>
            <strong> 4. 1958 (First Implantable Pacemaker):</strong> On October
            8, 1958, surgeon Åke Senning and inventor Rune Elmqvist performed
            the world’s first fully implantable pacemaker on 43-year-old Arne
            Larsson in Sweden pmc.ncbi.nlm.nih.gov . The initial generator
            lasted only hours, but the procedure proved the concept. (Larsson
            ultimately needed 22 generators over 43 years before dying at age 86
            pmc.ncbi.nlm.nih.gov .)
          </p>
          <p>
            <strong>5. 1960 (First Long-Term Implant):</strong> In June 1960,
            Greatbatch and colleagues implanted a self-contained pacemaker in a
            77-year-old patient with complete heart block. It remained
            functional for two years, marking the first long-term correction of
            heart block with an implanted device pmc.ncbi.nlm.nih.gov .
          </p>
          <p>
            <strong>6. 2000s (Cardiac Resynchronization):</strong> In the early
            2000s, biventricular pacing (CRT) was introduced for advanced heart
            failure. Devices with three leads were used to synchronize both
            ventricles, improving ejection fraction in suitable patients
            pmc.ncbi.nlm.nih.gov .
          </p>
          <p>
            <strong>7. 2016 (Leadless Pacemakers):</strong> In April 2016, the
            FDA approved Medtronic’s Micra – the first leadless pacemaker, a
            self-contained device implanted directly in the right ventricle
            fda.gov . Leadless systems eliminated transvenous leads and reduced
            lead-related complications.
          </p>
        </div>
      </div>
    </div>
  );
}
