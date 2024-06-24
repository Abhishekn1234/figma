import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLeftArrowSvgrepoCom1IconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.leftArrowSvgrepoCom1Wrapper}>
        <img
          className={styles.leftArrowSvgrepoCom1Icon}
          loading="lazy"
          alt=""
          src="/leftarrowsvgrepocom-1.svg"
          onClick={onLeftArrowSvgrepoCom1IconClick}
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.cementWrapper}>
          <div className={styles.cement}>Cement</div>
        </div>
        <img
          className={styles.searchCircleStreamlineUltiIcon}
          alt=""
          src="/searchcirclestreamlineultimatesvg1.svg"
        />
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
