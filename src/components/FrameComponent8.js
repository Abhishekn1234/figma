import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "", heart, description }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.heartParent}>
        <img className={styles.heartIcon} loading="lazy" alt="" src={heart} />
        <div className={styles.wrapperIstockphoto476199756}>
          <img
            className={styles.istockphoto476199756612x612Icon}
            alt=""
            src="/istockphoto476199756612x612removebgpreview-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  heart: PropTypes.string,
  description: PropTypes.string,
};

export default FrameComponent8;
