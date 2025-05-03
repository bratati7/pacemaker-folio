"use client";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Styles from "./page.module.css";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { Heart } from "./components/Heart/Heart";
import HandsImg from "../../public/Hands.jpg";
import NavBar from "./components/NavBar/NavBar";
import PacemakerImage from "../../public/pacemaker-device-ss-620x400-noexp.webp";
import PacemakerHistoryImage from "../../public/first_impalnted_pacemaker.jpg";
import TypesOfPacemakerImage from "../../public/St_Jude_Medical_pacemaker_with_ruler.jpg";
import PrinciplePacemakerImage from "../../public/images_279.jpg";
import PacemakerComponentsImage from "../../public/GetImage (41).png";
import PieChartManufacturerData from "../../public/pacemaker_market_share_nude_pie_chart.png";
import AdvancementsPacemaker from "../../public/CVTeam_MicraWGlove.jpg";
import RisksImage from "../../public/HeartDiseases_share.jpg";

export default function Home() {
  return (
    <div className={Styles.content}>
      <div className={Styles.page}>
        <NavBar />
        <div className={Styles.animDiv}>
          <div className={Styles.imgContainer}>
            <Image
              className={Styles.handsImg}
              src={HandsImg}
              alt="Hands Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={Styles.heart3dModel}>
            <Canvas shadows camera={{ position: [0, 0, 7], fov: 50 }}>
              <ambientLight intensity={0.2} />

              <directionalLight
                castShadow
                position={[5, 5, 5]}
                intensity={1.2}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.5}
                shadow-camera-far={20}
              />

              <directionalLight
                position={[-4, 2, 3]}
                intensity={0.6}
                color="white"
              />

              <directionalLight
                position={[0, 5, -5]}
                intensity={0.4}
                color="white"
              />

              <Environment preset="studio" />

              <Float speed={2} rotationIntensity={0.3} floatIntensity={2}>
                <Heart scale={0.5} />
              </Float>
            </Canvas>
          </div>
        </div>
        <div className={Styles.leftAlignDiv}>
          <div className={Styles.textData}>
            <h3>What is a Cardiac Pacemaker?</h3>
            <p>
              A pacemaker is a small medical device that is implanted in the
              chest to help control abnormal heart rhythms. It uses electrical
              pulses to prompt the heart to beat at a normal rate and rhythm.
            </p>
            <p>
              A pacemaker works like a tiny conductor, making sure your heart
              keeps a steady beat—especially when it beats too slowly or
              irregularly.
            </p>
            <p>Used for: </p>
            <p>1. Bradycardia (slow heartbeat)</p>
            <p>2. Heart block</p>
            <p>3. Some forms of heart failure</p>
            <p>4. Post-surgery or congenital heart rhythm issues</p>
          </div>
          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg}
              src={PacemakerImage}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className={Styles.rightAlignDiv}>
          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg}
              src={PacemakerHistoryImage}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={Styles.textData}>
            <h3>History of Pacemakers</h3>
            <p>
              The history of cardiac pacemakers dates back to the 1950s when the
              first external pacemakers were developed to treat heart block. In
              1958, the first implantable pacemaker was introduced by Rune
              Elmqvist and Åke Senning in Sweden. Since then, pacemakers have
              evolved into compact, intelligent devices that can adapt to a
              patient`s needs.
            </p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>
        </div>
        <div className={Styles.leftAlignDiv}>
          <div className={Styles.textData}>
            <h3>Types of Pacemakers</h3>
            <p>There are three main types of cardiac pacemakers:</p>
            <p>
              1. Single-chamber pacemaker: Sends electrical impulses to either
              the right atrium or right ventricle.
            </p>
            <p>
              2. Dual-chamber pacemaker: Sends signals to both the right atrium
              and right ventricle, helping coordinate their activity.
            </p>
            <p>
              3. Biventricular pacemaker (CRT device): Used for heart failure
              patients; stimulates both ventricles to improve coordination.
            </p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>
          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg1}
              src={TypesOfPacemakerImage}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className={Styles.rightAlignDiv}>
          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg}
              src={PrinciplePacemakerImage}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={Styles.textData}>
            <h3>Working Principle of Pacemakers</h3>
            <p>
              A cardiac pacemaker monitors the heart’s rhythm through leads
              placed in the heart chambers. When it detects a rhythm that’s too
              slow or irregular, it sends electrical impulses to prompt the
              heart to beat at a normal rate. The pacemaker adjusts pacing based
              on activity levels, using built-in sensors.
            </p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>
        </div>
        <div className={Styles.leftAlignDiv}>
          <div className={Styles.textData}>
            <h3>Key Components of a Cardiac Pacemaker</h3>
            <p>
              1. Pulse Generator: Contains the battery and the circuitry that
              generates electrical impulses.
            </p>
            <p>
              2. Leads (Electrodes): Wires that deliver impulses to the heart
              and send information back to the generator.
            </p>
            <p>
              3. Software/Firmware: Controls pacing parameters and records data
              for clinical analysis.
            </p>
            <p>4. Encasing: Typically titanium, biocompatible and durable.</p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>

          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg2}
              src={PacemakerComponentsImage}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className={Styles.rightAlignDiv}>
          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg3}
              src={PieChartManufacturerData}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={Styles.textData}>
            <h3>Leading Manufacturers</h3>
            <p>
              A cardiac pacemaker monitors the heart’s rhythm through leads
              placed in the heart chambers. When it detects a rhythm that’s too
              slow or irregular, it sends electrical impulses to prompt the
              heart to beat at a normal rate. The pacemaker adjusts pacing based
              on activity levels, using built-in sensors.
            </p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>
        </div>
        <div className={Styles.leftAlignDiv}>
          <div className={Styles.textData}>
            <h3>Recent Advancements</h3>
            <p>
              1. Pulse Generator: Contains the battery and the circuitry that
              generates electrical impulses.
            </p>
            <p>
              2. Leads (Electrodes): Wires that deliver impulses to the heart
              and send information back to the generator.
            </p>
            <p>
              3. Software/Firmware: Controls pacing parameters and records data
              for clinical analysis.
            </p>
            <p>4. Encasing: Typically titanium, biocompatible and durable.</p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>

          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg3}
              src={AdvancementsPacemaker}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className={Styles.rightAlignDiv}>
          <div className={Styles.correspondingPhoto}>
            <Image
              className={Styles.paceMakerImg3}
              src={RisksImage}
              alt="Artificial Pacemaker Image"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className={Styles.textData}>
            <h3>Risks & Complications</h3>
            <p>
              A cardiac pacemaker monitors the heart’s rhythm through leads
              placed in the heart chambers. When it detects a rhythm that’s too
              slow or irregular, it sends electrical impulses to prompt the
              heart to beat at a normal rate. The pacemaker adjusts pacing based
              on activity levels, using built-in sensors.
            </p>
            <button className={Styles.learnMoreBtn}>Learn More</button>
          </div>
        </div>
        {/*----------------------*/}
      </div>
    </div>
  );
}
