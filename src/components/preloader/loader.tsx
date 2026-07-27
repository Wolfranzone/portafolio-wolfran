"use client";

import { motion } from "motion/react";
import styles from "./style.module.scss";
import { slideUp } from "./anim";
import { usePreloader } from ".";

export default function Loader() {
  const { loadingPercent } = usePreloader();
  const percent = Math.min(100, Math.max(0, Math.round(loadingPercent)));

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction} aria-live="polite" aria-label="Cargando portafolio">
      <div className={styles.content}>
        <p className={styles.eyebrow}>PORTAFOLIO DE FRENSSEN WOLFRAN</p>
        <div className={styles.readout}>
          <span className={styles.label}>Preparando experiencia</span>
          <strong>{percent}<small>%</small></strong>
        </div>
        <div className={styles.track} aria-hidden="true">
          <motion.div className={styles.bar} initial={{ width: 0 }} animate={{ width: `${percent}%` }} transition={{ duration: 0.22, ease: "easeOut" }} />
        </div>
        <p className={styles.hint}>Cargando proyectos y recursos</p>
      </div>
    </motion.div>
  );
}