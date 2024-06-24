import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const onGroupClick = useCallback(() => {
    // Please sync "SELLER PROFILE FORM" to the project
  }, []);

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
                <div className={styles.kg}>(50 KG)</div>
              </div>
            </div>
            <div className={styles.quantity5Container}>
              <span>Quantity</span>
              <span className={styles.span}>{` `}</span>
              <span>- 5</span>
            </div>
          </div>
          <div className={styles.orderFromContainer}>
            <span>Order from :</span>
            <span className={styles.ernakulam}>{` Ernakulam  `}</span>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
          <div className={styles.wrapperGroup88}>
            <img
              className={styles.wrapperGroup88Child}
              alt=""
              src="/group-88.svg"
              onClick={onGroupClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
