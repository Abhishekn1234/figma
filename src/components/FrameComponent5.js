import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.addCollaborationsButtonParent}>
        <div className={styles.addCollaborationsButton}>
          <div className={styles.addCollaborationsButtonChild} />
          <div className={styles.thermalInsulatedConcrete}>
            Thermal Insulated Concrete Blocks
          </div>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector1@2x.png" />
          </div>
        </div>
        <div className={styles.companyLogo}>
          <div className={styles.companyLogoChild} />
          <div
            className={styles.lightWeightBlocks}
          >{`Light Weight Blocks `}</div>
          <div className={styles.vectorContainer}>
            <img className={styles.vectorIcon1} alt="" src="/vector-11.svg" />
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.solidBlocksNormal}>
            Solid Blocks Normal Weight
          </div>
          <img
            className={styles.vectorIcon2}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.contactInfoTitle}>
          <div className={styles.contactInfoTitleChild} />
          <div
            className={styles.interlocksPavings}
          >{`Interlocks & Pavings`}</div>
          <img className={styles.vectorIcon3} alt="" src="/vector-11.svg" />
        </div>
        <div className={styles.editProfile}>
          <div className={styles.editProfileChild} />
          <div
            className={styles.kerbstoneHeelkerb}
          >{`Kerbstone & Heelkerb & Wheel S...`}</div>
          <img
            className={styles.vectorIcon4}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
