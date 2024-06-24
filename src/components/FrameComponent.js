import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.homeSellerInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <div className={styles.wrapperIstockphoto476199756}>
            <img
              className={styles.istockphoto476199756612x612Icon}
              loading="lazy"
              alt=""
              src="/istockphoto476199756612x612removebgpreview-2@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.cementBagsParent}>
              <div className={styles.cementBags}>Cement Bags</div>
              <div className={styles.kgWrapper}>
                <div className={styles.kg}>(25 KG)</div>
              </div>
            </div>
            <div className={styles.quantity2Parent}>
              <div className={styles.quantity2Container}>
                <span>Quantity</span>
                <span className={styles.span}>{` `}</span>
                <span>- 2</span>
              </div>
              <img
                className={styles.quantityIcon}
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className={styles.orderFromContainer}>
            <span>Order from :</span>
            <span className={styles.kottayam}>{` Kottayam  `}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
