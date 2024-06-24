import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.categoriesInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.productTitle}>
          <div className={styles.startingFrom}>Starting from</div>
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productInfo}>
            <div className={styles.tmtSteelBars}>TMT Steel Bars</div>
            <div className={styles.wrapperOgunSteelBar500x500}>
              <img
                className={styles.ogunSteelBar500x5001RemovIcon}
                loading="lazy"
                alt=""
                src="/ogunsteelbar500x5001removebgpreview-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.productGrade}>
            <div className={styles.fe550Grade}>Fe 550 Grade</div>
          </div>
        </div>
        <div className={styles.productPrice}>
          <div className={styles.priceValue}>$ 6.70</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
