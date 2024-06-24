import PropTypes from "prop-types";
import styles from "./RightPanel.module.css";

const RightPanel = ({ className = "" }) => {
  return (
    <div className={[styles.rightPanel, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <img className={styles.frameChild} alt="" src="/group-24@2x.png" />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-25@2x.png"
            />
          </div>
        </div>
        <div className={styles.welcomePioneerContainer}>
          <p className={styles.welcome}>{`Welcome ! `}</p>
          <p className={styles.pioneerConstructions}>Pioneer Constructions</p>
        </div>
        <div className={styles.headphoneIcon}>
          <img
            className={styles.headphoneAltSvgrepoCom1Icon}
            loading="lazy"
            alt=""
            src="/headphonealtsvgrepocom-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

RightPanel.propTypes = {
  className: PropTypes.string,
};

export default RightPanel;
