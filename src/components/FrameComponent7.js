import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.sortIconWrapper}>
            <img
              className={styles.sortIcon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <h1 className={styles.sortBy}>Sort By</h1>
        </div>
      </div>
      <div className={styles.frameItem} />
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.filterIconWrapper}>
            <img
              className={styles.filterIcon}
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
          </div>
          <h1 className={styles.filter}>Filter</h1>
        </div>
      </div>
    </footer>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
